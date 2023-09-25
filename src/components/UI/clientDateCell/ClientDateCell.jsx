import React from 'react';
import date from 'date-and-time';
import cl from './ClientDateCell.module.scss';

const ClientDateCell = ({ unformattedDate }) => {
	return (
		<td className={cl.cell}>
			<span className={cl.date}>
				{date.format(new Date(unformattedDate), 'DD.MM.YYYY')}
			</span>
			<span className={cl.time} >
				{date.format(new Date(unformattedDate), 'HH:mm')}
			</span>
		</td>
	);
};

export default ClientDateCell;