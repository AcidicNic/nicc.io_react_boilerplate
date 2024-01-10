import React, { useState } from "react";

export const Context = React.createContext();

export function Provider({ children }) {
  // just setting this up for later
  const [test, setTest] = useState("test");

  return (
    <Context.Provider value={{ test, setTest }}>
      {children}
    </Context.Provider>
  );
}
