export const initialState = {
  symbol: '',
  qty: '',
  side: 'buy',
  type: 'market',
  timeInForce: 'day'
};

export default function alpacaReducer(state, action) {
  switch(action.type) {
    case 'symbol' : return {
      ...state, symbol: action.payload
    };
    case 'qty' : return {
      ...state, qty: action.payload
    };
    case 'side' : return {
      ...state, qty: action.payload
    };
  }
}
