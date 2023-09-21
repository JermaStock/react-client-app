import React from 'react';

const FilterForm = ({ onChangeFilterHandler }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input 
				type="text"
				placeholder="Введите запрос"
				onChange={(e) => onChangeFilterHandler(e.target.value)}
			/>
		</form>
	);
};

export default FilterForm;