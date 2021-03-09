import { ACCESS_TOKEN } from '../actions/authActions';
export const initialState = {
  accessToken: '',
};

export default function alpacaReducer(state, action) {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
  }
}
