import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButtons from "../components/UI/button/myButtons";
import { AuthContext } from "../context/context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButtons>Log on</MyButtons>
      </form>
    </div>
  );
};

export default Login;
