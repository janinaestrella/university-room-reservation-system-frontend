import React from 'react';
import Login from './../components/Login';
import Register from './../components/Register';

const LandingPage = ({url}) => {

	const registerUser = (user) => {
		fetch (url + '/users/register', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then( response => response.json())
		.then( data => {
			console.log(data)
		})
	}

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
						
							<Register 
							url={url}
							registerUser={registerUser}
							/>
							
					</div>
				</div>
			</div>
		</div>

	)
}

export default LandingPage;