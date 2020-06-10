import React from 'react';

const RoomCard = ({room, url}) => {
	
	return (
		<div>
			<div className="roomList card my-3">
				<div className="row no-gutters">
					<div className="col-md-4">
					<img src={url + /public/ + room.image} className="card-img img-thumbnail" alt=""/>
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
							<button className="btn btn-warning mx-1">Edit</button>
							<button className="btn btn-danger mx-1">Delete</button>
							<button className="btn btn-primary mx-1">I'd like to reserve this!</button>
						</div>

					</div>
				</div>
			</div>
		</div>	
	)
}

export default RoomCard;