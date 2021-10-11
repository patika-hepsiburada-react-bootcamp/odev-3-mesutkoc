import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();
//this part is header context with useState
export const HeaderProvider = ({ children }) => {
  const [title, setTitle] = useState("Keep Choice!");

  const values = {
    title,
    setTitle,
  };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useTitle = () => useContext(HeaderContext);
