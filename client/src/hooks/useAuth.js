import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {

  const {changeAuthState}=useContext(AuthContext)

  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    changeAuthState(result)
    console.log(result);
    //TODO
  };
  return loginHandler;
};
