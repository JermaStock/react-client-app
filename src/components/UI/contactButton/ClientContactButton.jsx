import React from 'react';

const ClientContactButton = ({children, ...props}) => {
	return (
		<button type='button' {...props}>
			{children}
		</button>
	);
};

export default ClientContactButton;