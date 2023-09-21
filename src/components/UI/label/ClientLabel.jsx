import React from 'react';
import cl from './ClientLabe.module.scss';

const ClientLabel = ({ children, title, ...props }) => {
	return (
		<label className={cl.label} {...props}>
			<span>
				{title}
			</span>
			{children}
		</label>
	);
};

export default ClientLabel;