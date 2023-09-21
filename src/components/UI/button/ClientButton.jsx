import React from 'react';

const ClientButton = ({ children, ...props }) => {
	return (
		<button {...props}>
			{children}
		</button>
	);
};

export default ClientButton;