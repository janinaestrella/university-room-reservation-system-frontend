import React, { useState, useEffect } from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
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

	const [isLoading, setIsLoading] = useState(false)
	
	const [rooms, setRooms] = useState([])
	const [lastAddedRoom, setLastAddedRoom] = useState({_id: null})
	const [lastDeletedRoom, setLastDeletedRoom] = useState({_id: null})
	const [updatedRoom, setUpdatedRoom] = useState({_id:null})

	const [user, setUser] = useState ({
		_id: null,
		firstname: null,
		lastname: null,
		email: null,
		isAdmin: false,
	})
	
	//Authorization check. This will fire if user null values will be changed
	useEffect( () => {
		if(window.localStorage.getItem("token")){ //para nakabase sa token
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

	//get rooms from database and reload if new room is added, deleted, or updated
	useEffect ( () => {
		setIsLoading(true)
		fetch(url + '/rooms')
		.then (response => {
			return response.json()
		})
		.then (rooms => {
			// console.log(rooms)
			setIsLoading(false)
			return setRooms(rooms);
		})

	},[lastAddedRoom, lastDeletedRoom, updatedRoom])

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

	const handleLastAddedRoom = (id) => {
		setLastAddedRoom({ _id: id})
	}

	const handleLastDeletedRoom = (id) => {
		setLastDeletedRoom({ _id: id})
	}

	const handleUpdatedRoom = (id) => {
		setUpdatedRoom({ _id: id})
	}

	return (
		<React.Fragment>
			<Router>
				
				<Navbar handleLogout={handleLogout} user={user}/>
				
				<Switch>
					<Route exact path ="/">
						<Room 
						user={user}
						rooms={rooms}
						url={url}
						handleLastAddedRoom={handleLastAddedRoom}
						handleLastDeletedRoom={handleLastDeletedRoom}
						handleUpdatedRoom={handleUpdatedRoom}
						isLoading={isLoading}
						/>
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
