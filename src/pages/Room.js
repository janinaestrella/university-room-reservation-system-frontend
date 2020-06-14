import React from 'react';
import RoomCard from './../components/RoomCard';
import AddRoomForm from './../components/AddRoomForm';
import UpdateRoomForm from './../components/UpdateRoomForm';
import LoadingSpinner from './../components/LoadingSpinner';
// import { Redirect } from 'react-router-dom'

const Room = ({user, rooms, url, handleLastAddedRoom, handleLastDeletedRoom, handleUpdatedRoom, isLoading, handleReserveRoom}) => {
	
	let roomCard = rooms.map ( room => {
		return (
			<div key={room._id}>
				<RoomCard 
				room={room}
				url={url} 
				handleLastDeletedRoom={handleLastDeletedRoom}
				handleReserveRoom={handleReserveRoom}
				user={user}
				/>
			</div>
		)
	})

	let addRoom = () => {
		//display AddRoomForm if Admin is logged in
		if (user.isAdmin){
			return (
				<AddRoomForm 
				url={url} 
				handleLastAddedRoom={handleLastAddedRoom}
				/>	
			)
		}
	}

	let udpateRoom = () => {
		//display UpdateRoomForm if Admin is logged in
		if (user.isAdmin){
			return (
				<UpdateRoomForm 
				url={url}
				rooms={rooms}
				handleUpdatedRoom={handleUpdatedRoom}
				/>	
			)
		}
	}	

	// if(!user._id){
	// 	return <Redirect to="/login" />
	// }

	return (
		<div className="container my-4">
			<div className="row">
				{/*rightside for admin only*/}
				<div className="col-12 col-sm-12 col-md-4 col-lg-3">
					<div className="row">
						
						{addRoom()}
						
						{udpateRoom()}
						
					</div>
				</div>

				{/*leftside*/}
				<div className= {user.isAdmin ? "col-12 col-sm-12 col-md-8 col-lg-9" : "col-12 "}>
					
					<div className="border-bottom border-primary title">
						<h1> Select a room </h1>	
					</div>

					{isLoading ? <LoadingSpinner/> : roomCard}

				</div>
			</div>
		</div>
		
	)
}

export default Room;