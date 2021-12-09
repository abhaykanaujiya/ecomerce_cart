export const getCountAction = (actionFor, count) => {
  return (dispatch) => {
    if (actionFor === "PLUS") {
      dispatch({ type: actionFor, payload: count + 1 });
    } else {
      if (count === 0) {
        alert("no negative value");
      } else {
        dispatch({ type: actionFor, payload: count - 1 });
      }
    }
  };
};
