import React from 'react';

const Alert = props => (
	<div id="alert-popup" className={`alert ${props.classes}`}>
		<div>{props.message}</div>
		<span className="close-btn" onClick={props.handleClose}>
			<i className="fas fa-times-circle"></i>
		</span>
	</div>
);

export default Alert;