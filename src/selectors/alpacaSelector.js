export const getAlpacaSymbol = (state) => state.symbol;
export const getAlpacaQty = (state) => state.qty;
export const getAlpacaSide = (state) => state.side;
export const getAlpacaOrder = (state) => state.order;
export const getAlpacaTimeInForce = (state) => state.timeInForce;
export const getAllAlpaca = (state) => ({ 
  symbol: state.symbol,
  qty: state.qty,
  side: state.side,
  order: state.order,
  timeInForce: state.timeInForce
});
