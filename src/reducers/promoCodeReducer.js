import { PROMO_CODE } from "../actions/types";

const intialState = {
  open: false,
  value: ""
};
export default function(state = intialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
