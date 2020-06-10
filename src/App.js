import React, { useState, useEffect } from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
// import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Room from './pages/Room';
import Reservation from './pages/Reservation';
import Request from './pages/Request';
import { 
	BrowserRouter as Router, 
	Route,
	Switch
} from 'react-router-dom';

function App() {

	const url = "https://urrs.herokuapp.com"; //backend

	const [user, setUser] = useState ({
		_id: null,
		firstname: null,
		lastname: null,
		email: null,
		isAdmin: false,
	})
	
	//Authorization check. This will fire if user null values will be changed
	useEffect( () => {
		if(window.localStorage.getItem("pushcartToken")){ //para nakabase sa token
			fetch(url + '/users/profile', {
				headers: {
					'Authorization' :  window.localStorage.getItem("token"),
				}
			})
				.then(response => {
					if (response.status === 401){
						return {error: "Unauthorized"}
					} else {
						return response.json()
					}
				})
				.then(data => {
					if(!data.error){
						setUser(data)
					}

				})
		}
	}, []);

	const handleSetUserLogin = (user) => {
		setUser(user)
	}

	const handleLogout = () => {
		setUser({
			_id: null,
			firstname: null,
			lastname: null,
			email: null,
			isAdmin: false,
		})
	}

	return (
		<React.Fragment>
			<Router>
				
				<Navbar handleLogout={handleLogout}/>
				
				<Switch>
					<Route exact path ="/">
						<Room />
					</Route>

					<Route path ="/login">
						<LandingPage 
						url={url}
						handleSetUserLogin={handleSetUserLogin}
						user={user}
						/>
					</Route>

					<Route path ="/requests">
						<Request />
					</Route>

					<Route path ="/reservations">
						<Reservation />
					</Route>

				</Switch>

	
			</Router>
		</React.Fragment>	
	);
}

export default App;
