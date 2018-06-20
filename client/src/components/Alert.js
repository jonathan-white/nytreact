import React from 'react';

const Alert = props => (
	<div className={`alert ${props.classes}`}>
		{props.message}
	</div>
);

export default Alert;