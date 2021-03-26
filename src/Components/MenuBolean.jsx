const reducer = (state, actions) => {
  switch (actions.type) {
    case "false":
      return {
        ...state,
        open: false,
      };
    case "true":
      return {
        ...state,
        open: true,
      };

    default:
      return { state };
  }
};
const initialState = {
  open: false,
};

export { reducer, initialState };
