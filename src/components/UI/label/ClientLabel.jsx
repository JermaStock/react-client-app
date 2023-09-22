import React from "react";
import cl from "./ClientLabel.module.scss";

const ClientLabel = ({
  children,
  isDanger,
  title,
  reqSymbol = "",
  ...props
}) => {
  const rootLabelClasses = [cl.label];
  const rootTitleClasses = [cl.label__text];


  if (isDanger) {
    rootLabelClasses.push(cl.error);
    rootTitleClasses.push(cl.error);
  }

  return (
    <label className={rootLabelClasses.join(' ')} {...props}>
      <span className={cl.label__title}>
        <span className={rootTitleClasses.join(' ')}>{title}</span>
        <span className={cl.label__req}>{reqSymbol}</span>
      </span>
      {children}
    </label>
  );
};

export default ClientLabel;
