import React from "react";
import cl from "./ControlClientButton.module.scss";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const ControlClientButton = ({ title, onClick, client, del = false }) => {
  let rootClasses = [cl.button];

  if (del) {
    rootClasses.push(cl.button__del);
  } else {
    rootClasses.push(cl.button__edit);
  }

  return (
    <button className={rootClasses.join(" ")} onClick={() => onClick(client)}>
      {del ? <DeleteIcon /> : <EditIcon />}
      {title}
    </button>
  );
};

export default ControlClientButton;
