import { SelNodeChild } from '../../shared/models/RTLconfig';
import { UserPersonaEnum } from '../../shared/services/consts-enums-functions';
import { GetInfo, Fees, Balance, LocalRemoteBalance, Peer, Payment, Channel, FeeRates, ForwardingHistoryRes, ListInvoices } from '../../shared/models/clModels';
import { ErrorPayload } from '../../shared/models/errorPayload';
import * as CLActions from '../store/cl.actions';
import * as RTLActions from '../../store/rtl.actions';

export interface CLState {
  effectErrors: ErrorPayload[];
  nodeSettings: SelNodeChild;
  information: GetInfo;
  fees: Fees;
  feeRatesPerKB: FeeRates;
  feeRatesPerKW: FeeRates;
  balance: Balance;
  localRemoteBalance: LocalRemoteBalance;
  peers: Peer[];
  allChannels: Channel[];
  payments: Payment[];
  forwardingHistory: ForwardingHistoryRes;
  invoices: ListInvoices;
  totalInvoices: number;
}

export const initCLState: CLState = {
  effectErrors: [],
  nodeSettings: { userPersona: UserPersonaEnum.OPERATOR, selCurrencyUnit: 'USD', fiatConversion: false, channelBackupPath: '', currencyUnits: [] },
  information: {},
  fees: {},
  feeRatesPerKB: {},
  feeRatesPerKW: {},
  balance: {},
  localRemoteBalance: { localBalance: -1, remoteBalance: -1 },
  peers: [],
  allChannels: [],
  payments: [],
  forwardingHistory: {},
  invoices: { invoices: [] },
  totalInvoices: -1
}

export function CLReducer(state = initCLState, action: CLActions.CLActions) {
  switch (action.type) {
    case CLActions.CLEAR_EFFECT_ERROR:
      const clearedEffectErrors = [...state.effectErrors];
      const removeEffectIdx = state.effectErrors.findIndex(err => {
        return err.action === action.payload;
      });
      if (removeEffectIdx > -1) {
        clearedEffectErrors.splice(removeEffectIdx, 1);
      }
      return {
        ...state,
        effectErrorsCl: clearedEffectErrors
      };
    case CLActions.EFFECT_ERROR:
      return {
        ...state,
        effectErrors: [...state.effectErrors, action.payload]
      };
    case CLActions.SET_CHILD_NODE_SETTINGS:
      return {
        ...state,
        nodeSettings: action.payload
      }
    case CLActions.RESET_CL_STORE:
      return {
        ...initCLState,
        nodeSettings: action.payload,
      };
    case CLActions.SET_INFO:
      return {
        ...state,
        information: action.payload
      };
    case CLActions.SET_FEES:
      return {
        ...state,
        fees: action.payload
      };
    case CLActions.SET_FEE_RATES:
      if (action.payload.perkb) {
        return {
          ...state,
          feeRatesPerKB: action.payload
        };
      } else if (action.payload.perkw) {
        return {
          ...state,
          feeRatesPerKW: action.payload
        };
      } else {
        return {
          ...state
        }
      }
    case CLActions.SET_BALANCE:
      return {
        ...state,
        balance: action.payload
      };
    case CLActions.SET_LOCAL_REMOTE_BALANCE:
      return {
        ...state,
        localRemoteBalance: action.payload
      };
    case CLActions.SET_PEERS:
      return {
        ...state,
        peers: action.payload
      };
    case CLActions.ADD_PEER:
      return {
        ...state,
        peers: [...state.peers, action.payload]
      };
    case CLActions.REMOVE_PEER:
      const modifiedPeers = [...state.peers];
      const removePeerIdx = state.peers.findIndex(peer => {
        return peer.id === action.payload.id;
      });
      if (removePeerIdx > -1) {
        modifiedPeers.splice(removePeerIdx, 1);
      }
      return {
        ...state,
        peers: modifiedPeers
      };
    case CLActions.SET_CHANNELS:
      return {
        ...state,
        allChannels: action.payload,
      };
    case CLActions.REMOVE_CHANNEL:
      const modifiedChannels = [...state.allChannels];
      const removeChannelIdx = state.allChannels.findIndex(channel => {
        return channel.channel_id === action.payload.channelId;
      });
      if (removeChannelIdx > -1) {
        modifiedChannels.splice(removeChannelIdx, 1);
      }
      return {
        ...state,
        allChannels: modifiedChannels
      };
    case CLActions.SET_PAYMENTS:
      return {
        ...state,
        payments: action.payload
      };
    case CLActions.SET_FORWARDING_HISTORY:
      return {
        ...state,
        forwardingHistory: action.payload
      };
    case CLActions.ADD_INVOICE:
      const newInvoices = state.invoices;
      newInvoices.invoices.unshift(action.payload);
      return {
        ...state,
        invoices: newInvoices
      };
    case CLActions.SET_INVOICES:
      return {
        ...state,
        invoices: action.payload
      };
    case CLActions.SET_TOTAL_INVOICES:
      return {
        ...state,
        totalInvoices: action.payload
      };
    default:
      return state;
  }

}
