import React from 'react';
import cl from './ClientInput.module.scss'

const ClientInput = (props) => {
	return (
		<input
			className={cl.input}
			{...props}
			type="text"
	/>
	);
};

export default ClientInput;