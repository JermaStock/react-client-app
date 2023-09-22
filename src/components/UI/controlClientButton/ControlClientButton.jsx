import React from "react";
import cl from "./ControlClientButton.module.scss";

const ControlClientButton = ({
  children,
  onClick,
  client,
  edit = false,
  del = false,
}) => {
  let rootClasses = [cl.button];

  if (edit) {
    rootClasses.push(cl.button__edit);
  } else if (del) {
    rootClasses.push(cl.button__del);
  }

  return (
    <button className={rootClasses.join(" ")} onClick={() => onClick(client)}>
      {children}
    </button>
  );
};

export default ControlClientButton;
