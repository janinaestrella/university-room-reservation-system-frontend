import React from 'react';

const ErrorHandling = ({message}) => {
	
	return(
	<div className="alert alert-danger ">
	  {message}
	</div>
	)
}

export default ErrorHandling;