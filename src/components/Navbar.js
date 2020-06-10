import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<Link className="navbar-brand" to="#"><i className="fas fa-chalkboard-teacher"></i> URRS</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/">Rooms <span className="sr-only">(current)</span></NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/requests">Requests</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/reservations">My Reservations</NavLink>
					</li>
					
				</ul>

				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/login">Login</NavLink>
					</li>
					<li className="nav-item">
						<span className="nav-link">Welcome <strong>User</strong>!</span>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/login">Logout</NavLink>
					</li>
				</ul>
			</div>
		</nav>

	)
}

export default Navbar;