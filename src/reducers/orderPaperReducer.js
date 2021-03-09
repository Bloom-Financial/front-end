export const initialState = {
  buy: '',
  sell: '',
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'BUY_PAPER_STOCK':
      return {
        ...state,
        buy: action.payload,
      };
    case 'SELL_PAPER_STOCK':
      return {
        ...state,
        sell: action.payload,
      };
    default:
      return state;
  }
}
