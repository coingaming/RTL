import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Channel, GetInfo } from '../../../../../shared/models/lndModels';
import { LoggerService } from '../../../../../shared/services/logger.service';

import { LNDEffects } from '../../../../store/lnd.effects';
import { RTLEffects } from '../../../../../store/rtl.effects';
import * as RTLActions from '../../../../../store/rtl.actions';
import * as fromRTLReducer from '../../../../../store/rtl.reducers';

@Component({
  selector: 'rtl-channel-open-table',
  templateUrl: './channel-open-table.component.html',
  styleUrls: ['./channel-open-table.component.scss']
})
export class ChannelOpenTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public totalBalance = 0;
  public displayedColumns = [];
  public channels: any;
  public information: GetInfo = {};
  public flgLoading: Array<Boolean | 'error'> = [true];
  public selectedFilter = '';
  public selFilter = '';
  public flgSticky = false;
  public myChanPolicy: any = {};
  private unsub: Array<Subject<void>> = [new Subject(), new Subject(), new Subject(), new Subject()];

  constructor(private logger: LoggerService, private store: Store<fromRTLReducer.RTLState>, private rtlEffects: RTLEffects, private lndEffects: LNDEffects) {
    switch (true) {
      case (window.innerWidth <= 415):
        this.displayedColumns = ['remote_alias', 'capacity', 'actions'];
        break;
      case (window.innerWidth > 415 && window.innerWidth <= 730):
        this.displayedColumns = ['remote_alias', 'total_satoshis_sent', 'total_satoshis_received', 'actions'];
        break;
      case (window.innerWidth > 730 && window.innerWidth <= 1024):
        this.displayedColumns = ['remote_alias', 'total_satoshis_sent', 'total_satoshis_received', 'capacity', 'actions'];
        break;
      case (window.innerWidth > 1024 && window.innerWidth <= 1280):
        this.flgSticky = true;
        this.displayedColumns = ['remote_alias', 'total_satoshis_sent', 'total_satoshis_received', 'capacity', 'actions'];
        break;
      default:
        this.flgSticky = true;
        this.displayedColumns = ['remote_alias', 'total_satoshis_sent', 'total_satoshis_received', 'capacity', 'actions'];
        break;
    }
  }

  ngOnInit() {
    this.store.select('lnd')
    .pipe(takeUntil(this.unsub[0]))
    .subscribe((rtlStore) => {
      rtlStore.effectErrorsLnd.forEach(effectsErr => {
        if (effectsErr.action === 'FetchChannels/all') {
          this.flgLoading[0] = 'error';
        }
      });
      this.information = rtlStore.information;
      this.totalBalance = +rtlStore.blockchainBalance.total_balance;
      if (undefined !== rtlStore.allChannels) {
        this.loadChannelsTable(rtlStore.allChannels);
      }
      if (this.flgLoading[0] !== 'error') {
        this.flgLoading[0] = (undefined !== rtlStore.allChannels) ? false : true;
      }
      this.logger.info(rtlStore);
    });
  }

  onChannelUpdate(channelToUpdate: any) {
    if (channelToUpdate === 'all') {
      const titleMsg = 'Updated Values for ALL Channels';
      const confirmationMsg = {};
      this.store.dispatch(new RTLActions.OpenConfirmation({ width: '70%', data: {
        type: 'CONFIRM', titleMessage: titleMsg, noBtnText: 'Cancel', yesBtnText: 'Update', message: JSON.stringify(confirmationMsg), flgShowInput: true, getInputs: [
          {placeholder: 'Base Fee msat', inputType: 'number', inputValue: 1000},
          {placeholder: 'Fee Rate mili msat', inputType: 'number', inputValue: 1, min: 1},
          {placeholder: 'Time Lock Delta', inputType: 'number', inputValue: 144}
        ]
      }}));
      this.rtlEffects.closeConfirm
      .pipe(takeUntil(this.unsub[2]))
      .subscribe(confirmRes => {
        if (confirmRes) {
          const base_fee = confirmRes[0].inputValue;
          const fee_rate = confirmRes[1].inputValue;
          const time_lock_delta = confirmRes[2].inputValue;
          this.store.dispatch(new RTLActions.OpenSpinner('Updating Channel Policy...'));
          this.store.dispatch(new RTLActions.UpdateChannels({baseFeeMsat: base_fee, feeRate: fee_rate, timeLockDelta: time_lock_delta, chanPoint: 'all'}));
        }
      });
    } else {
      this.myChanPolicy = {fee_base_msat: 0, fee_rate_milli_msat: 0, time_lock_delta: 0};
      this.store.dispatch(new RTLActions.OpenSpinner('Fetching Channel Policy...'));
      this.store.dispatch(new RTLActions.ChannelLookup(channelToUpdate.chan_id.toString()));
      this.lndEffects.setLookup
      .pipe(takeUntil(this.unsub[3]))
      .subscribe(resLookup => {
        this.logger.info(resLookup);
        if (resLookup.node1_pub === this.information.identity_pubkey) {
          this.myChanPolicy = resLookup.node1_policy;
        } else if (resLookup.node2_pub === this.information.identity_pubkey) {
          this.myChanPolicy = resLookup.node2_policy;
        } else {
          this.myChanPolicy = {fee_base_msat: 0, fee_rate_milli_msat: 0, time_lock_delta: 0};
        }
        this.logger.info(this.myChanPolicy);
        this.store.dispatch(new RTLActions.CloseSpinner());
        const titleMsg = 'Updated Values for Channel Point: ' + channelToUpdate.channel_point;
        const confirmationMsg = {};
        this.store.dispatch(new RTLActions.OpenConfirmation({ width: '70%', data: {
          type: 'CONFIRM', titleMessage: titleMsg, noBtnText: 'Cancel', yesBtnText: 'Update', message: JSON.stringify(confirmationMsg), flgShowInput: true, getInputs: [
            {placeholder: 'Base Fee msat', inputType: 'number', inputValue: (this.myChanPolicy.fee_base_msat === '') ? 0 : this.myChanPolicy.fee_base_msat},
            {placeholder: 'Fee Rate mili msat', inputType: 'number', inputValue: this.myChanPolicy.fee_rate_milli_msat, min: 1},
            {placeholder: 'Time Lock Delta', inputType: 'number', inputValue: this.myChanPolicy.time_lock_delta}
          ]
        }}));
      });
      this.rtlEffects.closeConfirm
      .pipe(takeUntil(this.unsub[2]))
      .subscribe(confirmRes => {
        if (confirmRes) {
          const base_fee = confirmRes[0].inputValue;
          const fee_rate = confirmRes[1].inputValue;
          const time_lock_delta = confirmRes[2].inputValue;
          this.store.dispatch(new RTLActions.OpenSpinner('Updating Channel Policy...'));
          this.store.dispatch(new RTLActions.UpdateChannels({baseFeeMsat: base_fee, feeRate: fee_rate, timeLockDelta: time_lock_delta, chanPoint: channelToUpdate.channel_point}));
        }
      });
    }
    this.applyFilter();
  }

  onChannelClose(channelToClose: Channel) {
    this.store.dispatch(new RTLActions.OpenConfirmation({
      width: '70%', data: { type: 'CONFIRM', titleMessage: 'Closing channel: ' + channelToClose.chan_id, noBtnText: 'Cancel', yesBtnText: 'Close Channel'
    }}));
    this.rtlEffects.closeConfirm
    .pipe(takeUntil(this.unsub[1]))
    .subscribe(confirmRes => {
      if (confirmRes) {
        this.store.dispatch(new RTLActions.OpenSpinner('Closing Channel...'));
        this.store.dispatch(new RTLActions.CloseChannel({channelPoint: channelToClose.channel_point, forcibly: !channelToClose.active}));
      }
    });
  }

  applyFilter() {
    this.selectedFilter = this.selFilter;
    this.channels.filter = this.selFilter;
  }

  onChannelClick(selRow: Channel, event: any) {
    console.warn(selRow.local_balance && selRow.local_balance > 0 ? ((+selRow.local_balance/(selRow.local_balance+selRow.remote_balance))*100) : 0);
    const flgCloseClicked =
      event.target.className.includes('mat-column-close')
      || event.target.className.includes('mat-column-update')
      || event.target.className.includes('mat-icon');
    if (flgCloseClicked) {
      return;
    }
    const selChannel = this.channels.data.filter(channel => {
      return channel.chan_id === selRow.chan_id;
    })[0];
    const reorderedChannel = JSON.parse(JSON.stringify(selChannel, [
      'active', 'remote_pubkey', 'remote_alias', 'channel_point', 'chan_id', 'capacity', 'local_balance', 'remote_balance', 'commit_fee', 'commit_weight',
      'fee_per_kw', 'unsettled_balance', 'total_satoshis_sent', 'total_satoshis_received', 'num_updates', 'pending_htlcs', 'csv_delay', 'private'
    ] , 2));
    this.store.dispatch(new RTLActions.OpenAlert({config: { width: '75%', data: {
      type: 'INFO',
      message: JSON.stringify(reorderedChannel)
    }}}));
  }

  loadChannelsTable(channels) {
    channels.sort(function(a, b) {
      return (a.active === b.active) ? 0 : ((b.active) ? 1 : -1);
    });
    this.channels = new MatTableDataSource<Channel>([...channels]);
    this.channels.sort = this.sort;
    this.channels.filterPredicate = (channel: Channel, fltr: string) => {
      const newChannel = ((channel.active) ? 'active' : 'inactive') + (channel.chan_id ? channel.chan_id : '') +
      (channel.remote_pubkey ? channel.remote_pubkey : '') + (channel.remote_alias ? channel.remote_alias : '') +
      (channel.capacity ? channel.capacity : '') + (channel.local_balance ? channel.local_balance : '') +
      (channel.remote_balance ? channel.remote_balance : '') + (channel.total_satoshis_sent ? channel.total_satoshis_sent : '') +
      (channel.total_satoshis_received ? channel.total_satoshis_received : '') + (channel.commit_fee ? channel.commit_fee : '') +
      (channel.private ? 'private' : 'public');
      return newChannel.includes(fltr);
    };
    this.logger.info(this.channels);
  }

  ngOnDestroy() {
    this.unsub.forEach(completeSub => {
      completeSub.next();
      completeSub.complete();
    });
  }

}
