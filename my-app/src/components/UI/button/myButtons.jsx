import React from "react";
import classes from "./MyButtons.module.css";

const MyButtons = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButtons;
