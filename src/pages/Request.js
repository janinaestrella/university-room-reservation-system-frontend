import React, { useState } from 'react';
import DatePicker from "react-datepicker"; //npm install react-datepicker
import addMonths from "date-fns/addMonths";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";
// import { Redirect } from 'react-router-dom'

const Request = ({url, reserveRoom, handleReservation,user}) => {

	let defaultDate = new Date()

	//set mins and ms to 00 before converting to ISO
	let today = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), 0, 0, 0);

	const [request, setRequest] = useState({
		reserveDate: today,
		reserveTimeStart: null,
		reserveTimeEnd: null	
	})
	
	const handleChangeDate = date => {

		let stringDate = date.toDateString()

		setRequest({
			...request,
			reserveDate : date,
			stringDate: stringDate,
		})
	}

	const handleChangeStartTime = startTime => {

		setRequest({
			...request,
			reserveTimeStart : startTime
		})
	}

	const handleChangeEndTime = endTime => {
		
		setRequest({
			...request,
			reserveTimeEnd : endTime
		})
	}

	const handleSubmit = e =>{
		e.preventDefault();


		if (request.reserveTimeStart == null || request.reserveTimeEnd == null){
			return alert("Please input time.")
		}
		
		if (request.reserveTimeStart >= request.reserveTimeEnd ||
			request.reserveTimeStart === request.reserveTimeEnd){
			return alert ("End time must be greater than Start time")
		}
		
		let reserveDetails = {
			roomId: reserveRoom._id,
			reserveDate: reserveDate(),
			reserveTimeStart: timeConvert(request.reserveTimeStart),
			reserveTimeEnd: timeConvert(request.reserveTimeEnd)
		}

		function reserveDate() {
			let selectedDate = request.reserveDate

			if (selectedDate == null){
				// console.log(today.toISOString())
				return today.toISOString()
			} else {
				//set mins and ms to 00 before converting to ISO
				let requestReserveDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0);
				// console.log(requestReserveDate)
				return requestReserveDate.toISOString()
			}
		}

		function timeConvert(time) {
			let setTime = new Date(request.reserveDate.getFullYear(), request.reserveDate.getMonth(), request.reserveDate.getDate(), time.getHours(), 0, 0);
			return (setTime.toISOString())
		}
		
		// console.log(reserveDetails)
		handleReservation(reserveDetails)
		
	}

	return (
	
	<div className="container my-4">
		<div className="row">
			<div className="col-12 border-bottom border-primary">
				<h1>Reserve a room | {request.stringDate ? request.stringDate : today.toDateString()} </h1>
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
				      selected={request.reserveDate ? request.reserveDate : today}
				      onChange={handleChangeDate}
				      minDate={new Date()}
				      maxDate={addMonths(new Date(), 3)} //can reserve only 3 months from today's date
				      showDisabledMonthNavigation
				      inline
				    />
					
					{/*startTime*/}
					<div className="time_container my-1">	
					<span>Start Time:</span> &nbsp;
					<DatePicker
				      selected={request.reserveTimeStart}
				      onChange={handleChangeStartTime}
				      showTimeSelect
				      showTimeSelectOnly
				      timeIntervals={60}
				      excludeTimes={[
				        setHours(setMinutes(new Date(), 0), 0),
				        setHours(setMinutes(new Date(), 0), 1),
				        setHours(setMinutes(new Date(), 0), 2),
				        setHours(setMinutes(new Date(), 0), 3),
				        setHours(setMinutes(new Date(), 0), 4),
				        setHours(setMinutes(new Date(), 0), 5),
				        setHours(setMinutes(new Date(), 0), 6),
				        setHours(setMinutes(new Date(), 0), 21),
				        setHours(setMinutes(new Date(), 0), 22),
				        setHours(setMinutes(new Date(), 0), 23),
				        setHours(setMinutes(new Date(), 0), 24),
				        setHours(setMinutes(new Date(), 0), 25)
				      ]}
				      timeCaption="Time"
				      dateFormat="h:mm aa"
				    />
					</div>
					
				    {/*endTime*/}
				    <div className="time_container my-1">
				    <span>End Time:</span> &nbsp;
					<DatePicker
				      selected={request.reserveTimeEnd}
				      onChange={handleChangeEndTime}
				      showTimeSelect
				      showTimeSelectOnly
				      timeIntervals={60}
				      excludeTimes={[
				        setHours(setMinutes(new Date(), 0), 0),
				        setHours(setMinutes(new Date(), 0), 1),
				        setHours(setMinutes(new Date(), 0), 2),
				        setHours(setMinutes(new Date(), 0), 3),
				        setHours(setMinutes(new Date(), 0), 4),
				        setHours(setMinutes(new Date(), 0), 5),
				        setHours(setMinutes(new Date(), 0), 6),
				        setHours(setMinutes(new Date(), 0), 21),
				        setHours(setMinutes(new Date(), 0), 22),
				        setHours(setMinutes(new Date(), 0), 23),
				        setHours(setMinutes(new Date(), 0), 24),
				        setHours(setMinutes(new Date(), 0), 25)
				      ]}
				      timeCaption="Time"
				      dateFormat="h:mm aa"
				    />
				    </div>

				    {/*button*/}
					<div className="container my-3 d-flex justify-content-center">
				    	<button onClick={handleSubmit} className="btn btn-primary">Submit Reservation</button>
					</div>

				</div>
			</div>
		</div>
	</div>
	)
}

export default Request;