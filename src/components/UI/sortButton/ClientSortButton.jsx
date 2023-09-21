import React from 'react';
import cl from './ClientSortButton.module.scss';

const ClientSortButton = ({ filter, setFilter, sortValue, ...props }) => {
	const rootClasses = [cl.button];

	if (filter.sortBy === sortValue) {
		rootClasses.push(cl.active);
	}

	return (
		<button 
			className={rootClasses.join(" ")}
			onClick={() => setFilter(
				{ ...filter,
					sortType: `${(filter['sortType'] === 'ascend' && filter['sortBy'] === sortValue) ? 'descend' : 'ascend'}`,
					sortBy: sortValue,
				}
			)}
		>
			{props.children}
		</button>
	);
};

export default ClientSortButton;