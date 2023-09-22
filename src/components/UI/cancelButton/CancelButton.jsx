import React from 'react';
import cl from './CancelButton.module.scss'

const ClientCancelButton = ({children, ...props}) => {
	return (
		<button className={cl.button} type='button' {...props}>
			{children}
		</button>
	);
};

export default ClientCancelButton;