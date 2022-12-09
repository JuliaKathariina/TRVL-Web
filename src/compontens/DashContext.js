import { createContext } from "react";
import useLocalStorage from "./hookstorage/useLocalStorage";

export const DashContext = createContext(null);
export const DashProvider = ({ children }) => {
  return <DashContext.Provider value={{}}>{children}</DashContext.Provider>;
};
