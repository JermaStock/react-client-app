import React from "react";
import cl from "./MoreContactsButton.module.scss";

const MoreContactsButton = ({ onClick, children }) => {
  return (
    <button className={cl.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default MoreContactsButton;
