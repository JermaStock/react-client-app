import React from "react";
import ClientDeleteContactIcon from "../icons/ClientDeleteContactIcon";
import cl from './DeleteContactButton.module.scss'

const DeleteContactButton = (props) => {
  return (
    <button className={cl.button} {...props}>
      <ClientDeleteContactIcon />
    </button>
  );
};

export default DeleteContactButton;
