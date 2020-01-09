import React from 'react';
import { Link } from 'react-router-dom';
import lotr from '../pictures/lotr.jpeg';

const TicketList = ({ match }) => {
	return(
		<div>
			<h3> Tickets </h3>

			<Link to={`${match.url}/Ticket1`}> <img src={lotr} className='img-responsive' alt=''/> </Link>

		</div>
	);
}

export default TicketList;