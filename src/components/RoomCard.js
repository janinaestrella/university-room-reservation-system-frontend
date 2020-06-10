import React from 'react';

const RoomCard = () => {
	
	return (
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
	)
}

export default RoomCard;