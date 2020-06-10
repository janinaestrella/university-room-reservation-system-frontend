import React from 'react';

const LandingPage = () => {

	return (
		<div className="container text-center my-5">
			<h1>University Room Reservation System</h1>
			<div className="row my-5">
				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className="container border rounded-sm p-3">
						<h1>Login</h1>

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

						</div>
					<div>
						
					</div>
				</div>
				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className=" container border rounded-sm p-3">
						<h1>Register</h1>
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
					</div>
				</div>
			</div>
		</div>

	)
}

export default LandingPage;