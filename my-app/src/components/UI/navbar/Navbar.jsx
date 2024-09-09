import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButtons from "../button/myButtons";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButtons onClick={logout}>Exit</MyButtons>
      <div className="navbar__links">
        <Link to="/about">about the site </Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
