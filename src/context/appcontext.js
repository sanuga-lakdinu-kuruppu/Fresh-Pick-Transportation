import React from "react";
import { createContext, useContext } from "react";

const GloableContext = createContext();
export const useGloableContext = () => useContext(GloableContext);

function AppContext(props) {
  return (
    <GloableContext.Provider value={{ item: null }}>
      {props.children}
    </GloableContext.Provider>
  );
}

export default AppContext;
