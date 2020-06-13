import React, { useState, useEffect } from 'react';
import ReservationTableRow from './../components/ReservationTableRow';
// import { Redirect } from 'react-router-dom'

const Reservation = ({user, url, reservation, handleUpdateStatus}) => {
	
	const [reservations, setReservations] = useState([]);

	useEffect (() => {
		fetch(url + '/reservations', {
			headers: {
				'Authorization' : window.localStorage.getItem('token')
			}
		})
		.then(response => {
			return response.json();
		})
		.then(reservations => {
			// console.log(reservations)
			setReservations(reservations)
		})
	}, [handleUpdateStatus])

	let reservationList = reservations.map( reservation => {
		return <ReservationTableRow 
				key={reservation._id} 
				user={user} 
				reservation={reservation}
				url={url}
				handleUpdateStatus={handleUpdateStatus}
				/>
	})

	// if(!user._id){
	// 	return <Redirect to="/login" />
	// }


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
	                            {user.isAdmin ? <th>Reserved By</th> : null}
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

	                    {reservationList}      
	                  
	                </table>

	            </div>

			</div>
		</div>
	)
}

export default Reservation;