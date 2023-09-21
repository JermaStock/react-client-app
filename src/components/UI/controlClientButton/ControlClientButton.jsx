import React from "react";

const ControlClientButton = ({
  children,
  onClick,
	client
}) => {
  return (
    <button
		
      onClick={() => onClick(client)}
    >
      {children}
    </button>
  );
};

export default ControlClientButton;
