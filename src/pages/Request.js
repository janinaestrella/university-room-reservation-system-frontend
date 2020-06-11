import React, { useState } from 'react';
import DatePicker from "react-datepicker"; //npm install react-datepicker

import "react-datepicker/dist/react-datepicker.css";


const Request = ({url, reserveRoom}) => {
	
	const [startDate, setStartDate] = useState(new Date());
	const [startTime, setStartTime] = useState(new Date());
	const [endTime, setEndTime] = useState(new Date());


	return (
	
	<div className="container my-4">
		<div className="row">
			<div className="col-12 border-bottom border-primary">
				<h1>Reserve a room</h1>
			</div>
		</div>

		<div className="row">
			<div className="container col-12 col-sm-12 col-md-8 col-lg-9">
				
				{/*Requested room details*/}
				<div className="roomList card my-3">
					<div className="row no-gutters">
						<div className="col-md-4">
						<img src={url + /public/ + reserveRoom.image} className="card-img img-thumbnail" alt="Image not found"/>
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title"><strong>{reserveRoom.name}</strong></h5>
								<p className="card-text">{reserveRoom.description}</p>
								<p className="card-text">
								<span>Location: {reserveRoom.location}</span> &nbsp; &nbsp;
								<span>Price: <strong>&#8369; {reserveRoom.price} </strong></span>

								</p>
							</div>

						</div>
					</div>
				</div>

			</div>

			<div className="container col-12 col-sm-12 col-md-4 col-lg-3">
				<div className="row my-3 d-flex justify-content-center">
					
					{/*choose a date*/}
					<DatePicker
				      selected={startDate}
				      onChange={date => setStartDate(date)}
				      minDate={new Date()}
				      showDisabledMonthNavigation
				      inline
				    />
					
					{/*startTime*/}
					<div className="time_container my-1">	
					<span>Start Time:</span> &nbsp;
					<DatePicker
				      selected={startTime}
				      onChange={startTime => setStartTime(startTime)}
				      showTimeSelect
				      showTimeSelectOnly
				      timeIntervals={30}
				      timeCaption="Time"
				      dateFormat="h:mm aa"
				    />
					</div>
					
				    {/*endTime*/}
				    <div className="time_container my-1">
				    <span>End Time:</span> &nbsp;
					<DatePicker
				      selected={endTime}
				      onChange={endTime => setStartTime(endTime)}
				      showTimeSelect
				      showTimeSelectOnly
				      timeIntervals={30}
				      timeCaption="Time"
				      dateFormat="h:mm aa"
				    />
				    </div>

				    {/*button*/}
					<div className="container my-3 d-flex justify-content-center">
				    	<button className="btn btn-primary">Submit Reservation</button>
					</div>

				</div>
			</div>
		</div>
	</div>
	)
}

export default Request;