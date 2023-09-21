import React from "react";
import cl from "./ControlClientButton.module.scss";

const ControlClientButton = ({ children, onClick, client }) => {
  return (
    <button className={cl.button} onClick={() => onClick(client)}>
      {children}
    </button>
  );
};

export default ControlClientButton;
