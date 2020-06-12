import React, {useState} from 'react';

const UpdateRoomForm = ({url, rooms, handleUpdatedRoom}) => {

	const [selectedRoom, setSelectedRoom] = useState ({
		_id: "",
		name: "",
		price: "",
		description: "",
		location: "",
		image: ""
	})
	
	let roomList = rooms.map( room => {
		return (
			<option value={room._id} key={room._id}>{room.name}</option>
		)
	})

	const handleSelectedRoom = e => {
		//get details of room selected
		let selected = rooms.find(room => {
			return room._id === e.target.value
		})
		setSelectedRoom(selected)
	}

	const handleChange = (e) => {
		setSelectedRoom({
			...selectedRoom,
			[e.target.name] : [e.target.value]
		})
	}

	const handleImage = (e) => {
		setSelectedRoom({
			...selectedRoom,
			image: e.target.files[0]
		})
		
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		let formData = new FormData();
		
		formData.append('name', selectedRoom.name)
		formData.append('price', selectedRoom.price)
		formData.append('description', selectedRoom.description)
		formData.append('location', selectedRoom.location)
		formData.append('image', selectedRoom.image)

		//save updated room to database
		fetch ( url + '/rooms/' + selectedRoom._id, {
			method: 'PUT',
			headers: {
				'Authorization' :  window.localStorage.getItem("token")
			},
			body: formData
		})
		.then (response => {
			return response.json()
		})
		.then(room => {
			handleUpdatedRoom(room._id)
		})
	}


	return (
		<>
		<div className="col-12 border-bottom border-primary title mt-3">
			<h1>Update a room</h1>
		</div>
		<div className="py-3 mx-3">
			<form onSubmit={handleSubmit}>

				<div className="form-group">
					<select onChange={handleSelectedRoom} name="room" id="room" className="form-control" value={selectedRoom._id}>
						<option value="" disabled>Select a room</option>
					    {roomList}
					</select>	
				</div>

				<div className="form-group">
					<input onChange={handleChange} type="text" className="form-control" name="name" id="name" value={selectedRoom.name}/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
					<span className="input-group-text">&#8369;</span>
					</div>
					<input onChange={handleChange} value={selectedRoom.price} type="text" className="form-control" name="price" id="price" placeholder="Enter Room price"/>
					<div className="input-group-append">
					<span className="input-group-text">.00</span>
					</div>
				</div>

				<div className="form-group">
					<select onChange={handleChange} value={selectedRoom.location} name="location" id="location" className="form-control">
						<option value="" disabled>Select Room Location</option>
					    <option value="1st Floor">1st Floor</option>
					    <option value="2nd Floor">2nd Floor</option>
					    <option value="3rd Floor">3rd Floor</option>
					</select>	
				</div>

				<div className="form-group">
					<label htmlFor="image">Room Image:</label>
					<input onChange={handleImage} type="file" name="image" id="image" className="form-control-file"/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Room Description:</label>
					<textarea onChange={handleChange} value={selectedRoom.description} name="description" id="description" cols="10" rows="3" className="form-control"></textarea>
				</div>
			
			
				<div className="text-center">
					<button className="btn btn-warning text-center w-75 ">Update Room</button>	
				</div>
			</form>
		</div>
		</>
	)
}

export default UpdateRoomForm;