import React from "react";
import ClientDeleteContactIcon from "../icons/ClientDeleteContactIcon";
import cl from './DeleteContactButton.module.scss'
import { Tooltip } from "react-tooltip";

const DeleteContactButton = (props) => {
  return (
    <button className={cl.button} {...props}
      data-tooltip-id="contact-delete-btn-tooltip"
      data-tooltip-content='Удалить контакт'
    >
      <ClientDeleteContactIcon />
      <Tooltip id={'contact-delete-btn-tooltip'}/>
    </button>
  );
};

export default DeleteContactButton;
