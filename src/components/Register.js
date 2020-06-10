import React, { useState } from 'react';

const Register = ({url, registerUser}) => {

	const [user, setUser] = useState({
		firstname: null,
		lastname: null,
		email: null,
		password: null,
		confirmPassword: null,
	});
	
	const handleChange = e => {
		setUser({
			...user,
			[e.target.id] : e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		registerUser(user);	
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="col-12 ">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text"><i className="fas fa-user"></i></span>
					</div>
					<input onChange={handleChange} type="text" placeholder="First name" name="firstname" id="firstname" className="form-control"/>
					<input onChange={handleChange} type="text" placeholder="Last name" name="lastname" id="lastname" className="form-control"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
					</div>
					<input onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Email"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
					</div>
					<input onChange={handleChange} type="password" className="form-control" name="password" id="password" placeholder="Password"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
					</div>
					<input onChange={handleChange} type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
				</div>

				<button className="btn btn-primary">Sign me up!</button>
			</div>	
		</form>

	);
}

export default Register;