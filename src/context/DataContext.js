
import React, { useState, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  //Website page and Home Page there is no state variable

  // Topics Page state values Start
  const [userTopic, setuserTopic] = useState("");

  
  return (
    <DataContext.Provider
      value={{
        userTopic, setuserTopic,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;