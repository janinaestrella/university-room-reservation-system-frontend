import React from 'react';

const Login = () => {

	return (
		<form className="login">	
			<div className="col-12">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
					</div>
					<input type="text" className="form-control" placeholder="Enter your email"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
					</div>
					<input type="text" className="form-control" placeholder="Enter your password"/>
				</div>
			</div>

			<button className="btn btn-primary">Login</button>

		</form>
	);
}

export default Login;