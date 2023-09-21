import React from 'react';

const CloseButton = (props) => {
	return (
		<button {...props} type='button' style={{backgroundColor: 'red', width: '25px', height: '25px'}}>
			<span></span>
			<span></span>
		</button>
	);
};

export default CloseButton;