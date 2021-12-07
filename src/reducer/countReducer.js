const INITIAL_STATE = {
  count: 0,
};
export default function countReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PLUS":
      return { ...state, count: action.payload };
    case "MINUS":
      return { ...state, count: action.payload };

    default:
      return state;
  }
}
