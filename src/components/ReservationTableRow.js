import React from 'react'

const ReservationTableRow = ({user, url, reservation, handleUpdateStatus}) => {
	// console.log(reservation)
	//convert date
	let reserveDate = new Date (reservation.reserveDate).toDateString()

	//convert time
	let startTime = new Date(reservation.reserveTimeStart)
	let startHour = startTime.getHours()
	let startMin = (startTime.getMinutes()<10?'0':'')+startTime.getMinutes()
	let startAmOrPm = startHour >= 12 ? 'PM' : 'AM'
	startHour = (startHour % 12) || 12
	let reserveTimeStart = startHour +':'+ startMin + ' ' + startAmOrPm


	let endTime = new Date(reservation.reserveTimeEnd)
	let endHour = endTime.getHours()
	let endMin = (endTime.getMinutes()<10?'0':'')+endTime.getMinutes()
	let endAmOrPm = endHour >= 12 ? 'PM' : 'AM'
	endHour = (endHour % 12) || 12
	let reserveTimeEnd = endHour +':'+ endMin + ' ' + endAmOrPm

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
			handleUpdateStatus(reservation._id)
		})
	}

	return (
		<>	
			<tbody>
				<tr>
					{user.isAdmin ? <td>{reservation.reserverName}</td> : null}
			    	<td>{reservation.roomName}</td>
			    	<td>{reservation.roomLocation}</td>
			    	<td>{reserveDate}</td>
			    	<td>{reserveTimeStart}</td>
			    	<td>{reserveTimeEnd}</td>
			    	<td>&#8369;{reservation.price}</td>
			    	<td>{reservation.isApproved ? "Approved" : "Pending for Approval"}</td>
			    	<td>
			    		<button className="btn btn-warning my-1 mx-1">Pay Now</button>
			    		{/*<button onClick={() => handleUpdateDetails(reservation._id)} className="btn btn-info mx-1 my-1">Update</button>*/}
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