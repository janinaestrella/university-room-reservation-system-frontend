import React, { useState } from 'react'

const ReservationTableRow = ({user, url, reservation, handleUpdateStatus}) => {

	// const handleDelete = id => {
	// 	console.log(id)
	// 	fetch(url + '/reservations/' + id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			'Authorization' : window.localStorage.getItem('token')
	// 		}
	// 	})
	// 	.then (response => {
	// 		return response.json()
	// 	})
	// 	.then ( data => {
	// 		console.log(data)
	// 	})
	// }

	const handleStatus = (id) => {
		fetch(url + '/reservations/' + id, {
			method: 'PUT',
			headers: {
				'Authorization' : window.localStorage.getItem("token"),
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				isApproved: true
			})
		})
		.then(response => {
			return response.json()
		})
		.then (reservation => {
			console.log(reservation)
			handleUpdateStatus(reservation._id)
		})

	}


	return (
		<>	
			<tbody>
				<tr>
					{user.isAdmin ? <td>{reservation.reserverName}</td> : null}
			    	<td>{reservation.roomName}</td>
			    	<td>reservation.location</td>
			    	<td>{reservation.reserveDate}</td>
			    	<td>{reservation.reserveTimeStart}</td>
			    	<td>{reservation.reserveTimeEnd}</td>
			    	<td>{reservation.price}</td>
			    	<td>{reservation.isApproved ? "Approved" : "Pending for Approval"}</td>
			    	<td>
			    		{/*<div><button className="btn btn-info my-1">Pay Now</button></div>
			    		<div><button className="btn btn-danger my-1">Delete</button></div>
			    		{user.isAdmin ?
			    		<div><button className="btn btn-warning my-1">Approved</button></div>	
			    		: ""}*/}
			    		<button className="btn btn-warning my-1">Pay Now</button>
			    		<button className="btn btn-info mx-1 my-1">Update</button>
			    		{/*<button onClick={() => handleDelete(reservation._id)} className="btn btn-danger my-1">Delete</button>*/}
			    		{user.isAdmin ?
			    		<button onClick={() => handleStatus(reservation._id)} className="btn btn-secondary my-1">Update Status</button>
			    		: ""}
		    	</td>
	    	</tr>
	    	</tbody>
		</>
	)
}

export default ReservationTableRow