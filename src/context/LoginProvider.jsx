import { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) throw new Error("useLogin must be used within LoginContext");

  return context;
};

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const signIn = () => {
    setLogin(true);
  };

  const signOut = () => {
    setLogin(false);
  };

  return (
    <LoginContext.Provider value={{ login, signIn, signOut }}>
      {children}
    </LoginContext.Provider>
  );
};
