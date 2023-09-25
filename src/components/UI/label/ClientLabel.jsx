import React from "react";
import cl from "./ClientLabel.module.scss";

const ClientLabel = ({
  children,
  isDanger,
  title,
  reqSymbol = "",
  filled,
  isFocus,
  ...props
}) => {
  const rootLabelClasses = [cl.label];
  const rootLabelTitleClasses = [cl.label__title];
  const rootTitleClasses = [cl.label__text];

  if (isDanger) {
    rootLabelClasses.push(cl.error);
    rootTitleClasses.push(cl.error);
  }
  if (filled || isFocus) {
    rootLabelTitleClasses.push(cl.focus);
  }

  return (
    <label className={rootLabelClasses.join(' ')} {...props}>
      <span className={rootLabelTitleClasses.join(' ')}>
        <span className={rootTitleClasses.join(' ')}>{title}</span>
        <span className={cl.label__req}>{reqSymbol}</span>
      </span>
      {children}
    </label>
  );
};

export default ClientLabel;
