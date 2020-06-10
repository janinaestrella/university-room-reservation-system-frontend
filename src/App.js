import React from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
// import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Room from './pages/Room';
import Reservation from './pages/Reservation';
import Request from './pages/Request';
import { 
	BrowserRouter as Router, 
	Route,
	Switch
} from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Router>
				
				<Navbar />
				
				<Switch>
					<Route exact path ="/">
						<Room />
					</Route>

					<Route path ="/login">
						<LandingPage />
					</Route>

					<Route path ="/requests">
						<Request />
					</Route>

					<Route path ="/reservations">
						<Reservation />
					</Route>

				</Switch>

	
			</Router>
		</React.Fragment>	
	);
}

export default App;
