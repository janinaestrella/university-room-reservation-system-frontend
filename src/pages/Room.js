import React from 'react';
import RoomCard from './../components/RoomCard';
import AddRoomForm from './../components/AddRoomForm';

const Room = ({user, rooms, url, handleLastAddedRoom}) => {

	let addRooms = () => {
		//display AddRoomForm is Admin is logged in
		if (user.isAdmin){
			return (
				<AddRoomForm 
				url={url} 
				handleLastAddedRoom={handleLastAddedRoom}
				/>	
			)
		}
	}
	
	let roomDetails = rooms.map ( room => {
		return (
			<div key={room._id}>
				<RoomCard 
				room={room}
				url={url} 
				/>
			</div>
		)
	})


	return (
		<div className="container my-5">
			<div className="row">
				{/*rightside for admin only*/}
				{addRooms()}

				{/*leftside*/}
				<div className= {user.isAdmin ? "col-12 col-sm-12 col-md-8 col-lg-9" : "col-12"}>

					<div className="border-bottom border-primary title">
						<h1> Select a room </h1>	
					</div>
					{roomDetails}
				</div>
			</div>
		</div>
		
	)
}

export default Room;