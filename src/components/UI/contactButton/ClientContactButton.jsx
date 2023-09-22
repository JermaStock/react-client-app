import React from "react";
import cl from "./ClientContactButton.module.scss";
import ClientAddContactIcon from "../icons/ClientAddContactIcon";

const ClientContactButton = ({ children, ...props }) => {
  return (
    <button type="button" className={cl.button} {...props}>
			<ClientAddContactIcon/>
      {children}
    </button>
  );
};

export default ClientContactButton;
