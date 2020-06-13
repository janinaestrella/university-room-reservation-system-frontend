import React, { useState } from 'react';

const AddRoomForm = ({url, handleLastAddedRoom}) => {
	
	const [room, setRoom] = useState({})

	const handleChange = e => {
		setRoom({
			...room,
			[e.target.id] : e.target.value
		})
	}

	const handleImage = e => {
		setRoom({
			...room,
			image : e.target.files[0] 
		})
	}

	const handleSubmit = e => {
		e.preventDefault();

		let formData = new FormData();
		
		formData.append('name', room.name)
		formData.append('price', room.price)
		formData.append('description', room.description)
		formData.append('location', room.location)
		formData.append('image', room.image)
		
		//save new room to database
		fetch(url + '/rooms', {
			method: 'POST',
			headers: {
				'Authorization' : window.localStorage.getItem('token')
			},
			body: formData
		})
		.then (response => {
			return response.json()
		})
		.then (room => {
			handleLastAddedRoom(room._id)
			setRoom({
				name:"",
				price:"",
				location:"",
				description:"",
				image:""
			})
		})


	}


	return (
		<>
		<div className="col-12 border-bottom border-primary title">
			<h1>Add a room</h1>
		</div>
		<div className="py-3 mx-3">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input onChange={handleChange} value={room.name} type="text" className="form-control" name="name" id="name" placeholder="Enter Room Name"/>
						{/*<small id="name" className="text-muted">Enter Room Name</small>*/}
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text">&#8369;</span>
					</div>
					<input onChange={handleChange} value={room.price} type="text" className="form-control" name="price" id="price" placeholder="Enter Room price"/>
					<div className="input-group-append">
					<span className="input-group-text">.00</span>
					</div>
					{/*<small id="price" className="text-muted">Enter Room Price</small>*/}
				</div>

				<div className="form-group">
					<select onChange={handleChange} id="location" name="location" className="form-control">
						{/*<option value="" disabled>Select Room Location</option>*/}
						<option defaultValue disabled>Select Room Location</option>
					    <option value="1st Floor">1st Floor</option>
					    <option value="2nd Floor">2nd Floor</option>
					    <option value="3rd Floor">3rd Floor</option>
					</select>	
					{/*<small id="helpId" className="text-muted">Select Room Location</small>*/}
				</div>

				<div className="form-group">
					<label htmlFor="image">Room Image:</label>
					<input onChange={handleImage} type="file" name="image" id="image" className="form-control-file"/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Room Description:</label>
					<textarea onChange={handleChange} name="description" id="description" cols="10" rows="3" className="form-control"></textarea>
				</div>
			
			
			
				<div className="text-center">
					<button className="btn btn-success text-center w-75 ">Add Room</button>	
				</div>
			</form>
		</div>
		</>
	)
}

export default AddRoomForm;