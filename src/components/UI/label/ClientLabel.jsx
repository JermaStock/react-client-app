import React from "react";
import cl from "./ClientLabel.module.scss";

const ClientLabel = ({ children, title, reqSymbol = "", ...props }) => {
  return (
    <label className={cl.label} {...props}>
      <span className={cl.label__title}>
        <span className={cl.label__text}>
          {title}
        </span>
				<span className={cl.label__req}>
					{reqSymbol}
				</span>
      </span>
      {children}
    </label>
  );
};

export default ClientLabel;
