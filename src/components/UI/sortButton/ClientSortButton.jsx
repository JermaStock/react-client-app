import React from 'react';

const ClientSortButton = ({ filter, setFilter, sortValue, ...props }) => {
	return (
		<button 
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