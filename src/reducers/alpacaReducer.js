import {
  SYMBOL,
  QTY,
  SIDE,
  ORDER,
  TIMEINFORCE,
} from '../actions/alpacaActions';

export const initialState = {
  symbol: '',
  qty: '',
  side: 'buy',
  order: 'market',
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
    case ORDER:
      return {
        ...state,
        order: action.payload,
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
