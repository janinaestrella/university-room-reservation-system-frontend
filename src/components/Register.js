import React from 'react';

const Register = () => {

	return (
		<form>
			<div className="col-12">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
					<span class="input-group-text"><i class="fas fa-user"></i></span>
					</div>
					<input type="text" placeholder="First name" name="firstname" id="firstname" class="form-control"/>
					<input type="text" placeholder="Last name" name="lastname" id="lastname" class="form-control"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
					</div>
					<input type="email" className="form-control" placeholder="Email"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
					</div>
					<input type="password" className="form-control" placeholder="Password"/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
					</div>
					<input type="password" className="form-control" placeholder="Confirm Password"/>
				</div>

				<button className="btn btn-primary">Sign me up!</button>
			</div>	
		</form>

	);
}

export default Register;