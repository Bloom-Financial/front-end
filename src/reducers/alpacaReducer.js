import {
  PAPERPOSITIONS,
} from '../actions/alpacaActions';

export const initialState = {
  paperPositions: []
};

export default function alpacaReducer(state, action) {
  switch(action.type) {
    case PAPERPOSITIONS:
      return {
        ...state,
        paperPositions: action.payload
      };
    default:
      return state;
  }
}
