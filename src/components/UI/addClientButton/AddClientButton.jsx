import React from "react";
import cl from "./AddClientButton.module.scss";
import IconUser from "../icons/IconUser";

const AddClientButton = ({ onClick, ...props }) => {
  return (
    <div className={cl.wrapper}>
      <button className={cl.button} onClick={onClick}>
        <IconUser
            style={{marginRight: '10px'}}
        />
        {props.value}
      </button>
    </div>
  );
};

export default AddClientButton;
