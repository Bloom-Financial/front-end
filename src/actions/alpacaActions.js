export const PAPERPOSITIONS = 'PAPERPOSITIONS';
export const newPaperPosition = (paperPositions) => ({
  type: PAPERPOSITIONS,
  payload: paperPositions,
});
