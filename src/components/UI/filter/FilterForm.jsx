import React from 'react';
import cl from './FilterForm.module.scss';

const FilterForm = ({ onChangeFilterHandler }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input 
				className={cl.input}
				type="text"
				placeholder="Введите запрос"
				onChange={(e) => onChangeFilterHandler(e.target.value)}
			/>
		</form>
	);
};

export default FilterForm;