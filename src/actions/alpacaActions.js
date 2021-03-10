export const SYMBOL = 'SYMBOL';
export const newSymbol = (symbol) => ({
  type: SYMBOL,
  payload: symbol,
});

export const QTY = 'QTY';
export const newQty = (qty) => ({
  type: QTY,
  payload: qty,
});

export const SIDE = 'SIDE';
export const newSide = (side) => ({
  type: SIDE,
  payload: side,
});

export const ORDER = 'ORDER';
export const newOrder = (order) => ({
  type: ORDER,
  payload: order,
});

export const TIMEINFORCE = 'TIMEINFORCE';
export const newTimeInForce = (timeInForce) => ({
  type: TIMEINFORCE,
  payload: timeInForce,
});
