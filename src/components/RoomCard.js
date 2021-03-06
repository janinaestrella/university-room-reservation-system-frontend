import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const RoomCard = ({room, url, handleLastDeletedRoom, handleReserveRoom, user}) => {

	const handleDelete = id => {
		fetch (url + '/rooms/' + id, {
			method: 'DELETE',
			headers: {
				'Authorization' : window.localStorage.getItem("token")
			}
		})
		.then (response => {
			return response.json()
		})
		.then (room => {
			handleLastDeletedRoom(room.id)
		})
	}

	return (
		<div>
			<div className="roomList card my-3">
				<div className="row no-gutters">
					<div className="col-md-4">
					<img src={room.image} className="card-img img-thumbnail" alt=""/>
					</div>

					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"><strong>{room.name}</strong></h5>
							<p className="card-text">{room.description}</p>
							<p className="card-text">
							<span>Location: {room.location}</span> &nbsp; &nbsp;
							<span>Price: <strong>&#8369; {room.price} </strong></span>

							</p>
						</div>

						<div className="card-footer d-flex justify-content-end">
							{ 
								user.isAdmin ?
								<button onClick={() => handleDelete(room._id)} className="btn btn-danger mx-1">Delete</button>
								: ""
							}
							<Link to={user._id ? '/requests' : '/login'} onClick={() => handleReserveRoom(room, user)} className="btn btn-primary mx-1">I'd like to reserve this!</Link>
						</div>

					</div>
				</div>
			</div>
		</div>	
	)
}

export default RoomCard;