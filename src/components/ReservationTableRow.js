import React from 'react'

const ReservationTableRow = ({user, url, reservation}) => {
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

			    		<button className="btn btn-info my-1">Pay Now</button>
			    		<button className="btn btn-danger mx-1 my-1">Delete</button>
			    		{user.isAdmin ?
			    		<button className="btn btn-warning my-1">Approved</button>
			    		: ""}
		    	</td>
	    	</tr>
	    	</tbody>
		</>
	)
}

export default ReservationTableRow