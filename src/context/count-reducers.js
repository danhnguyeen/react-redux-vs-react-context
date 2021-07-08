export const ADD_COUNT = "ADD_COUNT";

const countReducer = (state, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
