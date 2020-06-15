import React, { useState, useEffect } from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Room from './pages/Room';
import Reservation from './pages/Reservation';
import ViewReservation from './pages/ViewReservation';
import Request from './pages/Request';
import Page401Unauthorized  from './pages/Page401Unauthorized';
import Page403Forbidden  from './pages/Page403Forbidden';
import Page404NotFound  from './pages/Page404NotFound';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

function App() {

	const url = "https://urrs.herokuapp.com"; //backend
	// const url = "http://localhost:5000"; //localbackend

	const [isLoading, setIsLoading] = useState(false)
	
	const [rooms, setRooms] = useState([])
	const [lastAddedRoom, setLastAddedRoom] = useState({_id: null})
	const [lastDeletedRoom, setLastDeletedRoom] = useState({_id: null})
	const [updatedRoom, setUpdatedRoom] = useState({_id:null})

	const [reserveRoom, setReserveRoom] = useState({})
	const [reservation, setReservation] = useState({})

	const [updateStatus, setUpdateStatus] = useState({_id: null})
	
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

	const handleReserveRoom = (room, user) => {

		if (!user._id){
		console.log("you are not logged in")
			
		} else {

		//contains specific room details to be reserved
		setReserveRoom(room)
		}



	}	

	const handleReservation = (reserveDetails) => {
		// save to reservations table using post method
		fetch (url + '/reservations', {
			method:'POST',
			headers: {
				'Authorization' : window.localStorage.getItem('token'),
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(reserveDetails)
		})
		.then(response => {
			return response.json()
		})
		.then(reserveDetails => {
			// console.log(reserveDetails)
			if(reserveDetails.error){
				alert(reserveDetails.error)
			} else {
				setReservation(reserveDetails)
				alert("Reserved! Please wait for your Reservation Approval.")
				// console.log(reserveDetails)
			}

		})
	}

	const handleUpdateStatus = (id) => {
		setUpdateStatus({_id: id})
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
						handleReserveRoom={handleReserveRoom}
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
					{!user._id ? <Page401Unauthorized />
						: !reserveRoom._id ? <Page403Forbidden />
						: <Request 
							url={url}
							reserveRoom={reserveRoom}
							handleReservation={handleReservation}
							user={user}
							/>
					}
					
					</Route>

					<Route exact path ="/reservations">
					{!user._id ? <Page401Unauthorized />
						: <Reservation 
						user={user}
						reservation={reservation}
						url={url}
						handleUpdateStatus={handleUpdateStatus}
						/>
					}
					</Route>

					<Route path = '/reservations/:id' >
						<ViewReservation 
						url={url}
						reservation={reservation}
						user={user}
						/>
					</Route>

					<Route path='/pagenotfound'>
						<Page404NotFound />
					</Route>
					<Redirect to= '/pagenotfound' />

				</Switch>

	
			</Router>
		</React.Fragment>	
	);
}

export default App;
