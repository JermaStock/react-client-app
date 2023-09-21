import React from 'react';

const ContactSelect = ({ options, value, onChange, name }) => {
	return (
		<select
			value={value}
			onChange={onChange}
			name={name}
		>
			{options.map(option => 
				<option key={option.value} value={option.value}>
					{option.name}
				</option>	
			)}
		</select>
	);
};

export default ContactSelect;