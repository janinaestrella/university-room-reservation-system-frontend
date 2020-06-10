import React from 'react';
import Login from './../components/Login';
import Register from './../components/Register';

const LandingPage = () => {

	return (
		<div className="container text-center my-5">
			<h1>University Room Reservation System</h1>
			<div className="row my-5">
				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className="container border rounded-sm p-3">
						<h1>Login</h1>

							<Login />

					</div>
				</div>

				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className=" container border rounded-sm p-3">
						<h1>Register</h1>
						
							<Register />
							
					</div>
				</div>
			</div>
		</div>

	)
}

export default LandingPage;