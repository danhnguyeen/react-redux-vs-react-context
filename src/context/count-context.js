import React, { useReducer } from "react";

import countReducer, { ADD_COUNT } from "./count-reducers";

const initialState = { count: 0 };

export const CountContext = React.createContext({
  count: 0,
  addCount: () => {},
});

const CountContextProvider = ({ children }) => {
  const [countState, dispatch] = useReducer(countReducer, initialState);

  const addCount = () => {
    dispatch({ type: ADD_COUNT });
  };

  return (
    <CountContext.Provider
      value={{
        count: countState.count,
        addCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
