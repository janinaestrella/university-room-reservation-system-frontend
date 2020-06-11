import React from 'react';
import RoomCard from './../components/RoomCard';
import AddRoomForm from './../components/AddRoomForm';
import UpdateRoomForm from './../components/UpdateRoomForm';
import LoadingSpinner from './../components/LoadingSpinner';

const Room = ({user, rooms, url, handleLastAddedRoom, handleLastDeletedRoom, handleUpdatedRoom, isLoading, handleReserveRoom}) => {
	
	let roomDetails = rooms.map ( room => {
		return (
			<div key={room._id}>
				<RoomCard 
				room={room}
				url={url} 
				handleLastDeletedRoom={handleLastDeletedRoom}
				handleReserveRoom={handleReserveRoom}
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
	

	return (
		<div className="container my-4">
			<div className="row">
				{/*rightside for admin only*/}
				<div className="col-12 col-sm-12 col-md-4 col-lg-3">
					<div className="row">
						<div className="col-12 border-bottom border-primary title">
							<h1>Add a room</h1>
						</div>
						{addRoom()}

						<div className="col-12 border-bottom border-primary title mt-3">
							<h1>Update a room</h1>
						</div>
						{udpateRoom()}
						
					</div>
				</div>

				{/*leftside*/}
				<div className= {user.isAdmin ? "col-12 col-sm-12 col-md-8 col-lg-9" : "col-12 "}>
					
					<div className="border-bottom border-primary title">
						<h1> Select a room </h1>	
					</div>

					{isLoading ? <LoadingSpinner/> : roomDetails}
					


				</div>
			</div>
		</div>
		
	)
}

export default Room;