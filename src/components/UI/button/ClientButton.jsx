import React from 'react';
import cl from './ClientButton.module.scss'

const ClientButton = ({ children, ...props }) => {
	return (
		<button className={cl.button} {...props}>
			{children}
		</button>
	);
};

export default ClientButton;