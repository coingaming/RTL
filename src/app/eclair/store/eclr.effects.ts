import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Subject, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';

import { environment, API_URL } from '../../../environments/environment';
import { LoggerService } from '../../shared/services/logger.service';
import { SessionService } from '../../shared/services/session.service';
import { CommonService } from '../../shared/services/common.service';
import { ErrorMessageComponent } from '../../shared/components/data-modal/error-message/error-message.component';
import { GetInfo, Fees, Channel, OnChainBalance, LightningBalance, ChannelsStatus, ChannelStats } from '../../shared/models/eclrModels';
import * as fromRTLReducer from '../../store/rtl.reducers';
import * as ECLRActions from './eclr.actions';
import * as RTLActions from '../../store/rtl.actions';

@Injectable()
export class ECLREffects implements OnDestroy {
  CHILD_API_URL = API_URL + '/eclr';
  private unSubs: Array<Subject<void>> = [new Subject(), new Subject()];

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRTLReducer.RTLState>,
    private sessionService: SessionService,
    private logger: LoggerService,
    private commonService: CommonService,
    private router: Router,
    private location: Location) { }

  @Effect()
  infoFetchECLR = this.actions$.pipe(
    ofType(ECLRActions.FETCH_INFO_ECLR),
    withLatestFrom(this.store.select('root')),
    mergeMap(([action, store]: [ECLRActions.FetchInfo, fromRTLReducer.RootState]) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchInfo'));
      return this.httpClient.get<GetInfo>(this.CHILD_API_URL + environment.GETINFO_API)
        .pipe(
          takeUntil(this.actions$.pipe(ofType(RTLActions.SET_SELECTED_NODE))),
          map((info) => {
            this.logger.info(info);
            this.initializeRemainingData(info, action.payload.loadPage);
            return {
              type: ECLRActions.SET_INFO_ECLR,
              payload: info ? info : {}
            };
          }),
          catchError((err) => {
            const code = (err.error && err.error.error && err.error.error.message && err.error.error.message.code) ? err.error.error.message.code : (err.error && err.error.error && err.error.error.code) ? err.error.error.code : err.status ? err.status : '';
            const message = ((err.error && err.error.message) ? err.error.message + ' ' : '') + ((err.error && err.error.error && err.error.error.error && typeof err.error.error.error === 'string') ? err.error.error.error : (err.error && err.error.error && err.error.error.errno && typeof err.error.error.errno === 'string') ? err.error.error.errno : (err.error && err.error.error && typeof err.error.error === 'string') ? err.error.error : (err.error && typeof err.error === 'string') ? err.error : 'Unknown Error');
            this.router.navigate(['/error'], { state: { errorCode: code, errorMessage: message }});
            this.handleErrorWithoutAlert('FetchInfo', 'Fetching Node Info Failed.', err);            
            return of({type: RTLActions.VOID});
          })
        );
    }
  ));

  @Effect()
  fetchFees = this.actions$.pipe(
    ofType(ECLRActions.FETCH_FEES_ECLR),
    mergeMap((action: ECLRActions.FetchFees) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchFees'));
      return this.httpClient.get<Fees>(this.CHILD_API_URL + environment.FEES_API);
    }),
    map((fees) => {
      this.logger.info(fees);
      return {
        type: ECLRActions.SET_FEES_ECLR,
        payload: fees ? fees : {}
      };
    }),
    catchError((err: any) => {
      this.handleErrorWithoutAlert('FetchFees', 'Fetching Fees Failed.', err);
      return of({type: RTLActions.VOID});
    }
  ));

  @Effect()
  channelsFetch = this.actions$.pipe(
    ofType(ECLRActions.FETCH_CHANNELS_ECLR),
    mergeMap((action: ECLRActions.FetchChannels) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchChannels'));
      return this.httpClient.get(this.CHILD_API_URL + environment.CHANNELS_API)
        .pipe(map((channelsRes: {activeChannels: Channel[], pendingChannels: Channel[], inactiveChannels: Channel[], lightningBalances: LightningBalance, channelStatus: ChannelsStatus}) => {
          this.logger.info(channelsRes);
          this.store.dispatch(new ECLRActions.SetActiveChannels((channelsRes && channelsRes.activeChannels.length > 0) ? channelsRes.activeChannels : []));
          this.store.dispatch(new ECLRActions.SetPendingChannels((channelsRes && channelsRes.pendingChannels.length > 0) ? channelsRes.pendingChannels : []));
          this.store.dispatch(new ECLRActions.SetInactiveChannels((channelsRes && channelsRes.inactiveChannels.length > 0) ? channelsRes.inactiveChannels : []));
          this.store.dispatch(new ECLRActions.SetLightningBalance(channelsRes.lightningBalances));
          return {
            type: ECLRActions.SET_CHANNELS_STATUS_ECLR,
            payload: channelsRes.channelStatus
          };
        },
        catchError((err: any) => {
          this.handleErrorWithoutAlert('FetchChannels', 'Fetching Channels Failed.', err);
          return of({type: RTLActions.VOID});
        })
      ));
    }
  ));

  @Effect()
  channelStatsFetch = this.actions$.pipe(
    ofType(ECLRActions.FETCH_CHANNEL_STATS_ECLR),
    mergeMap((action: ECLRActions.FetchChannelStats) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchChannelStats'));
      return this.httpClient.get(this.CHILD_API_URL + environment.CHANNELS_API + '/stats')
        .pipe(map((channelStats: ChannelStats[]) => {
          this.logger.info(channelStats);
          return {
            type: ECLRActions.SET_CHANNEL_STATS_ECLR,
            payload: (channelStats && channelStats.length > 0) ? channelStats : []
          };
        },
        catchError((err: any) => {
          this.handleErrorWithoutAlert('FetchChannelStats', 'Fetching Channel Stats Failed.', err);
          return of({type: RTLActions.VOID});
        })
      ));
    }
  ));

  @Effect()
  fetchOnchainBalance = this.actions$.pipe(
    ofType(ECLRActions.FETCH_ONCHAIN_BALANCE_ECLR),
    mergeMap((action: ECLRActions.FetchOnchainBalance) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchOnchainBalance'));
      return this.httpClient.get<OnChainBalance>(this.CHILD_API_URL + environment.BALANCE_API);
    }),
    map((balance) => {
      this.logger.info(balance);
      return {
        type: ECLRActions.SET_ONCHAIN_BALANCE_ECLR,
        payload: balance ? balance : {}
      };
    }),
    catchError((err: any) => {
      this.handleErrorWithoutAlert('FetchOnchainBalance', 'Fetching Onchain Balances Failed.', err);
      return of({type: RTLActions.VOID});
    }
  ));

  @Effect()
  peersFetch = this.actions$.pipe(
    ofType(ECLRActions.FETCH_PEERS_ECLR),
    mergeMap((action: ECLRActions.FetchPeers) => {
      this.store.dispatch(new ECLRActions.ClearEffectError('FetchPeers'));
      return this.httpClient.get(this.CHILD_API_URL + environment.PEERS_API)
        .pipe(
          map((peers: any) => {
            this.logger.info(peers);
            return {
              type: ECLRActions.SET_PEERS_ECLR ,
              payload: peers ? peers : []
            };
          }),
          catchError((err: any) => {
            this.handleErrorWithoutAlert('FetchPeers', 'Fetching Peers Failed.', err);
            return of({type: RTLActions.VOID});
          })
        );
    }
  ));

  initializeRemainingData(info: any, landingPage: string) {
    this.sessionService.setItem('eclrUnlocked', 'true');
    const node_data = {
      identity_pubkey: info.nodeId,
      alias: info.alias,
      testnet: false,
      chains: info.publicAddresses,
      uris: info.uris,      
      version: info.version,
      currency_unit: 'BTC',
      smaller_currency_unit: 'Sats',
      numberOfPendingChannels: 0
    };
    this.store.dispatch(new RTLActions.SetNodeData(node_data));
    this.store.dispatch(new ECLRActions.FetchFees());
    this.store.dispatch(new ECLRActions.FetchChannels());
    this.store.dispatch(new ECLRActions.FetchChannelStats());
    this.store.dispatch(new ECLRActions.FetchOnchainBalance());
    this.store.dispatch(new ECLRActions.FetchPeers());
    // this.store.dispatch(new ECLRActions.GetForwardingHistoryCL());
    let newRoute = this.location.path();
    if(newRoute.includes('/lnd/')) {
      newRoute = newRoute.replace('/lnd/', '/eclr/');
    } else if (newRoute.includes('/cl/')) {
      newRoute = newRoute.replace('/cl/', '/eclr/');
    }
    if (newRoute.includes('/login') || newRoute.includes('/error') || newRoute === '' || landingPage === 'HOME' || newRoute.includes('?access-key=')) {
      newRoute = '/eclr/home';
    }
    this.router.navigate([newRoute]);
  }
  
  handleErrorWithoutAlert(actionName: string, genericErrorMessage: string, err: { status: number, error: any }) {
    this.logger.error('ERROR IN: ' + actionName + '\n' + JSON.stringify(err));
    if (err.status === 401) {
      this.logger.info('Redirecting to Login');
      this.store.dispatch(new RTLActions.CloseAllDialogs());
      this.store.dispatch(new RTLActions.Logout());
      this.store.dispatch(new RTLActions.OpenSnackBar('Authentication Failed. Redirecting to Login.'));
    } else {
      this.store.dispatch(new RTLActions.CloseSpinner());
      this.store.dispatch(new ECLRActions.EffectError({ action: actionName, code: err.status.toString(), message: (err.error.error && err.error.error.error && err.error.error.error.error && err.error.error.error.error.message && typeof err.error.error.error.error.message === 'string') ? err.error.error.error.error.message : (err.error.error && err.error.error.error && err.error.error.error.message && typeof err.error.error.error.message === 'string') ? err.error.error.error.message : (err.error.error && err.error.error.message && typeof err.error.error.message === 'string') ? err.error.error.message : (err.error.message && typeof err.error.message === 'string') ? err.error.message : typeof err.error === 'string' ? err.error : genericErrorMessage }));
    }
  }

  handleErrorWithAlert(alerType: string, alertTitle: string, errURL: string, err: { status: number, error: any }) {
    this.logger.error(err);
    if (err.status === 401) {
      this.logger.info('Redirecting to Login');
      this.store.dispatch(new RTLActions.CloseAllDialogs());
      this.store.dispatch(new RTLActions.Logout());
      this.store.dispatch(new RTLActions.OpenSnackBar('Authentication Failed. Redirecting to Login.'));
    } else {
      this.store.dispatch(new RTLActions.CloseSpinner());
      this.store.dispatch(new RTLActions.OpenAlert({
        data: {
          type: alerType,
          alertTitle: alertTitle,
          message: { code: err.status, message: (err.error.error && err.error.error.error && err.error.error.error.error && err.error.error.error.error.message && typeof err.error.error.error.error.message === 'string') ? err.error.error.error.error.message : (err.error.error && err.error.error.error && err.error.error.error.message && typeof err.error.error.error.message === 'string') ? err.error.error.error.message : (err.error.error && err.error.error.message && typeof err.error.error.message === 'string') ? err.error.error.message : (err.error.message && typeof err.error.message === 'string') ? err.error.message : typeof err.error === 'string' ? err.error : 'Unknown Error', URL: errURL },
          component: ErrorMessageComponent          
        }
      }));
    }
  }

  ngOnDestroy() {
    this.unSubs.forEach(completeSub => {
      completeSub.next();
      completeSub.complete();
    });
  }

}
