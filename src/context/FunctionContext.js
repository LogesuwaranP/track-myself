
import React, { createContext, useContext } from "react";
import DataContext from "./DataContext";

const FunctionContext = createContext({});

export const FunctionProvider = ({ children }) => {

    const {userTopic } = useContext(DataContext);

    const getData = () => {

      console.log(userTopic);

    }

  
  return (
    <FunctionContext.Provider
      value={{
        //Topics State Values Provider
        getData

      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export default FunctionContext;