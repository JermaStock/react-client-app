import React from 'react';
import cl from './ClientRow.module.scss';

const ClientRow = ({children, ...props}) => {
	return (
		<tr className={cl.row} {...props}>
			{children}
		</tr>
	);
};

export default ClientRow;