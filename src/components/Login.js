import React, { useState } from 'react';

const Login = ({loginUser}) => {

	const [credentials, setCredentials] = useState({
		email: null, 
		password: null
	});
	
	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.id] : e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		loginUser(credentials);
	}


	return (
		<form className="login" onSubmit={handleSubmit} >	
			<div className="col-12">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
					</div>
					<input onChange={handleChange} type="text" name="email" id="email" className="form-control" placeholder="Enter your email"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
					</div>
					<input onChange={handleChange} type="password" name="password" id="password" className="form-control" placeholder="Enter your password"/>
				</div>
			</div>

			<button className="btn btn-primary">Login</button>

		</form>
	);
}

export default Login;