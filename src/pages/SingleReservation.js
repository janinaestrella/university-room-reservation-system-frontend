import React, {useState} from 'react';

const SingleReservation = ({reservationDetails, url}) => {

	// console.log(reservationDetails)

	return (		
		<div className="container my-4">
			<div className="row">
				<div className="col-12 border-bottom border-primary">
					<h1>My Reservations</h1>
				</div>

				<div className="container col-12 col-sm-12">
					<div className="roomList card my-3">
						<div className="row no-gutters">
							<div className="col-md-4">
							<img src={url + /public/ + reservationDetails.image} className="card-img img-thumbnail" alt=""/>
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title"><strong>{reservationDetails.roomName}</strong></h5>
									<p className="card-text">{reservationDetails.description}</p>
									<p className="card-text">
									<span>Location: {reservationDetails.roomLocation}</span> &nbsp; &nbsp;
									<span>Price: <strong>&#8369; {reservationDetails.price} </strong></span>
									</p>
								</div>

								<div className="card-footer d-flex justify-content-end">
									<button className="btn btn-warning mx-1">Pay Now</button>	
								</div>

							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	)
}

export default SingleReservation;