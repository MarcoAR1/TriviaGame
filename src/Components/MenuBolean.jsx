import info from "../Data/Data.jsx";

const reducer = (state, actions) => {
  info.insert("MenuBolean", { open: actions.type === "false" ? false : true });
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
