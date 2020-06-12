import React from 'react';

const Reservation = ({user, reservation}) => {

	return (
		<div className="container my-4">
			<div className="row">
				<div className="col-12 border-bottom border-primary">
					<h1>My Reservations</h1>
				</div>

				<div className="table-responsive border border-bottom-primary my-3">
	                <table className="table table-hover">
	                    <thead>
	                        <tr>
	                            {user.isAdmin ? <th>Reserved By</th> : ""}
	                            <th>Room Name</th>
	                            <th>Location</th>
	                            <th>Date</th>
	                            <th>Start Time</th>
	                            <th>End Time</th>
	                            <th>Price</th>
	                            <th>Status</th>
	                            <th>Action</th>
	                        </tr>
	                    </thead>

	                    <tbody>
	                    	{user.isAdmin ? <td>{reservation.reserverName}</td> : ""}
	                    	<td>{reservation.roomName}</td>
	                    	<td>reservation.location</td>
	                    	<td>{reservation.reserveDate}</td>
	                    	<td>{reservation.reserveTimeStart}</td>
	                    	<td>{reservation.reserveTimeEnd}</td>
	                    	<td>{reservation.price}</td>
	                    	<td>{reservation.isApproved ? "Approved" : "Pending for Approval"}</td>
	                    	<td>
	                    		<div><button className="btn btn-info my-1">Pay Now</button></div>
	                    		<div><button className="btn btn-danger my-1">Delete</button></div>
	                    		{user.isAdmin ?
	                    		<div><button className="btn btn-warning my-1">Approved</button></div>	
	                    		: ""}
	                    	</td>
	                        
	                    </tbody>
	                </table>

	            </div>

			</div>
		</div>
	)
}

export default Reservation;