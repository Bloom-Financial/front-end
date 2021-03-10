import { SYMBOL, QTY, SIDE, TYPE, TIMEINFORCE } from '../actions/alpacaActions';

export const initialState = {
  symbol: '',
  qty: '',
  side: 'buy',
  type: 'market',
  timeInForce: 'day',
};

export default function alpacaReducer(state, action) {
  switch (action.type) {
    case SYMBOL:
      return {
        ...state,
        symbol: action.payload,
      };
    case QTY:
      return {
        ...state,
        qty: action.payload,
      };
    case SIDE:
      return {
        ...state,
        side: action.payload,
      };
    case TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case TIMEINFORCE:
      return {
        ...state,
        timeInForce: action.payload,
      };
    default:
      return state;
  }
}
