import React, {useState} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

const ReservationTableRow = ({user, url, reservation, handleUpdateStatus}) => {
	// console.log(reservation)
	//convert date
	let reserveDate = moment(reservation.reserveDate, "YYYYMMDD").format('LL');

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

	const [receipt, setReceipt] = useState ({})

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

	const handlePayNow = (reservation) => {

		let details = {
			reservationID: reservation._id,
			price: reservation.price,
			userId: reservation.userId
		}
		
		//method to create receipt using stripe
		fetch (url + '/reservations/stripe/' + reservation._id, {
			method:'POST',
			headers: {
				'Authorization' : window.localStorage.getItem("token"),
				'Content-Type' : "application/json",
			},
			body: JSON.stringify(details)
		})
		.then(response => {
			return response.json()
		})
		.then (updateReservation => {
			handleUpdateStatus(reservation._id)
		})
	}	


	const buttons = () => {
		if (reservation.receipt != ""){
			//display receipt button only if paid
			return <button className="btn btn-secondary my-1 mx-1"><a href={reservation.receipt} target="_blank">Show Receipt </a> </button>
		} else {
			if (reservation.userId == user._id){
				//show users own paynow button
				return <button onClick={() => handlePayNow(reservation)} className="btn btn-success my-1 mx-1">Pay Now</button>
			} else {
				return ""
			} 
		}
	}

	return (
		<>	
			<tbody>
				<tr>
					{user.isAdmin ? <td>{reservation.reserverName}</td> : null}
			    	<td><Link to={'/reservations/' + reservation._id}>{reservation.roomName}</Link></td>
			    	<td>{reservation.roomLocation}</td>
			    	<td>{reserveDate}</td>
			    	<td>{reserveTimeStart}</td>
			    	<td>{reserveTimeEnd}</td>
			    	<td>&#8369;{reservation.price}</td>
			    	<td>{reservation.isApproved ? "Approved" : "Pending for Approval"}</td>
			    	<td>
			    		<div>
			    		{buttons()}
						</div>

			    		{/*<button onClick={() => handleUpdateDetails(reservation._id)} className="btn btn-info mx-1 my-1">Update</button>*/}
			    		{/*<button onClick={() => handleDelete(reservation._id)} className="btn btn-danger my-1">Delete</button>*/}
			    		
			    		<div>
			    		{user.isAdmin ?
			    		<button onClick={() => handleStatus(reservation._id)} className="btn btn-warning my-1">Update Status</button>
			    		: ""}
			    		</div>
		    	</td>
	    	</tr>
	    	</tbody>
		</>
	)
}

export default ReservationTableRow