import { createContext } from "react";
import useLocalStorage from "./hookstorage/useLocalStorage";

export const DashContext = createContext(null);
export const DashProvider = ({ children }) => {
  const [input, setInput] = useLocalStorage("input", []);
  return (
    <DashContext.Provider value={{ input, setInput }}>
      {children}
    </DashContext.Provider>
  );
};
