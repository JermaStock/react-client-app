import React from 'react';

const ClientCancelButton = ({children, ...props}) => {
	return (
		<button type='button' {...props}>
			{children}
		</button>
	);
};

export default ClientCancelButton;