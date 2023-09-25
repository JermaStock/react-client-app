import React from 'react';
import cl from './FilterForm.module.scss';
import { useDispatch } from 'react-redux';
import { filterClients } from '../../../store/filterSlice';

const FilterForm = () => {
	const dispatch = useDispatch();
	const onChangeFilterHandler = (e) => dispatch(filterClients(e.target.value));

	return (
		<form onSubmit={e => e.preventDefault()}>
			<input 
				className={cl.input}
				type="text"
				placeholder="Введите запрос"
				onChange={onChangeFilterHandler}
			/>
		</form>
	);
};

export default FilterForm;