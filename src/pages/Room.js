import React from 'react';

const Room = ({user}) => {

	let addRooms = () => {
		//display addRoomForm is Admin is logged in
		if (user.isAdmin){
			return (
				<div className="col-12 col-sm-12 col-md-4 col-lg-3">
					<div className="row">
						<div className="col-12 border-bottom border-primary title">
							<h1>Add a room</h1>
						</div>

						<div className="py-3 mx-3">
							<form>
								<div className="form-group">
									<input type="text" className="form-control" name="name" id="name" placeholder="Enter Room Name"/>
										{/*<small id="name" className="text-muted">Enter Room Name</small>*/}
								</div>

								<div className="input-group mb-3">
									<div className="input-group-prepend">
									<span className="input-group-text">&#8369;</span>
									</div>
									<input type="text" className="form-control" name="price" id="price" placeholder="Enter Room price"/>
									<div className="input-group-append">
									<span className="input-group-text">.00</span>
									</div>
									{/*<small id="price" className="text-muted">Enter Room Price</small>*/}
								</div>

								<div className="form-group">
									<select id="location" name="location" className="form-control">
										{/*<option value="" disabled>Select Room Location</option>*/}
										<option selected disabled>Select Room Location</option>
									    <option value="1">1st Floor</option>
									    <option value="2">2nd Floor</option>
									    <option value="3">3rd Floor</option>
									</select>	
									{/*<small id="helpId" className="text-muted">Select Room Location</small>*/}
								</div>

								<div className="form-group">
									<label htmlFor="image">Room Image:</label>
									<input type="file" name="image" id="image" className="form-control-file"/>
								</div>

								<div className="form-group">
									<label htmlFor="description">Room Description:</label>
									<textarea name="description" id="description" cols="10" rows="3" className="form-control"></textarea>
								</div>
							</form>
							
							
							<div className="text-center">
							<button className="btn btn-success text-center w-75 ">Add Room</button>
								
							</div>
							
							
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<div className="container my-5">
			<div className="row">
				{/*rightside for admin only*/}
				{addRooms()}

				{/*leftside*/}
				<div className= {user.isAdmin ? "col-12 col-sm-12 col-md-8 col-lg-9" : "col-12"}>

					<div className="border-bottom border-primary title">
						<h1> Select a room </h1>	
					</div>
					<div>
						<div className="roomList card my-3">
							<div className="row no-gutters">
								<div className="col-md-4">
								<img src="..." className="card-img img-thumbnail" alt="..."/>
								</div>

								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
									</div>

									<div className="card-footer d-flex justify-content-end">
										<button className="btn btn-warning mx-1">Edit</button>
										<button className="btn btn-danger mx-1">Delete</button>
										<button className="btn btn-primary mx-1">I'd like to reserve this!</button>
									</div>

								</div>
							</div>
						</div>
					</div>	

				</div>
			</div>
		</div>

		
	)
}

export default Room;