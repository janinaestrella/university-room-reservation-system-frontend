import React, { useState } from 'react';
import Login from './../components/Login';
import Register from './../components/Register';
import ErrorHandling from './../components/ErrorHandling';
import SuccessMessage from './../components/SuccessMessage';
import { Redirect } from 'react-router-dom';

const LandingPage = ({url, handleSetUserLogin, user}) => {
	
	const [error, setError] = useState({
		hasError: false,
		message: null
	});

	const [success, setSuccess] = useState({
		isSuccess: false,
		message: null
	});

	if(user._id){
		return <Redirect to="/" />
	}

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
			if(data.error){
				setError({
			 		hasError: true,
			 		message: data.error
			 	})
			} else {
				setSuccess({
			 		isSuccess: true,
					message: "Registered Successfully. You may now login."
			 	})
			}
		})
	}

	const loginUser = (credentials) => {
		fetch (url + '/users/login', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(credentials)
		})
		.then ( response => {
			return response.json()
		})
		.then ( data => {
			if(data.error){
				//show error
				setError({
					hasError: true,
					message: data.error
				})
			}else {
				//save to localStorage
				window.localStorage.setItem("token", "Bearer " + data.token)
				handleSetUserLogin(data.user)
			}
		})
	}

	return (
		<div className="container text-center my-5">
			<h1>University Room Reservation System</h1>
			<div className="row my-5">
				{error.hasError ? <ErrorHandling message={error.message} /> : ""}
				{success.isSuccess ? <SuccessMessage message={success.message} /> : ""}

				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className="container border rounded-sm p-3">
						<h1>Login</h1>

							<Login 
							loginUser={loginUser}
							/>

					</div>
				</div>

				<div className="col-12 col-md-6 mx-auto  px-5">
					<div className=" container border rounded-sm p-3">
						<h1>Register</h1>
							
							<Register 
							registerUser={registerUser}
							/>
							
					</div>
				</div>
			</div>
		</div>

	)
}

export default LandingPage;