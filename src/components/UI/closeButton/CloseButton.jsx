import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import cl from './CloseButton.module.scss';

const CloseButton = (props) => {
	return (
		<button className={cl.button}>
			<CloseIcon/>
		</button>
	);
};

export default CloseButton;