import actions from "./actions";

const initialState = {
  allReport: [],
  allCategory: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.CLEAN_UP:
      return initialState;
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      break;
  }
  return state;
}
