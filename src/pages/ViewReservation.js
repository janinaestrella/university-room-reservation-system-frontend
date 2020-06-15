import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page403Forbidden  from './../pages/Page403Forbidden';
import SingleReservation  from './../pages/SingleReservation';

const ViewReservation = ({url, reservation, user}) => {

	let { id } = useParams();
	const [userIsForbidden, setUserIsForbidden] = useState(false);
	const [reservationDetails, setReservationDetails] = useState ({});
	const [isLoading, setIsLoading] = useState (false);

	useEffect ( () => {
		setIsLoading(true)
		fetch(url + '/reservations/' + id,{
			headers: {
				'Authorization' : window.localStorage.getItem('token')
			}
		})
		.then(response => {
			if(!response.ok){
				return setUserIsForbidden(true)
			}else {
				return response.json()
			}
		})
		.then(reservationDetails => {
			// console.log(reservationDetails)
			setReservationDetails(reservationDetails)

			setIsLoading(false)
		})

	}, [])

	return (
		<React.Fragment>
			{userIsForbidden ? <Page403Forbidden /> 
				: <SingleReservation 
					reservationDetails={reservationDetails}
					url={url}/>}

		</React.Fragment>
	)
}

export default ViewReservation;