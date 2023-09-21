import React from 'react';
import date from 'date-and-time';
import cl from './ClientDateCell.module.scss';

const ClientDateCell = ({ unformattedDate }) => {
	return (
		<td>
			<span style={{display: 'block'}}>
				{date.format(unformattedDate, 'DD.MM.YYYY')}
			</span>
			<span>
				{date.format(unformattedDate, 'HH:mm')}
			</span>
		</td>
	);
};

export default ClientDateCell;