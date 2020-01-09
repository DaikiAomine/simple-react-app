import React from 'react';
import {Link} from 'react-router-dom';
import Confirmation from '../confirmation/Confirmation';


function HandleOnClick(props) {
	if(props.movie === 'Ticket1') {
		return(
			<div>
				<ul>
					<li>
						<Link to="/tickets"> Back to Movie List </Link>
					</li>
				</ul>
				<h2>
					Book Tickets for Lord of the Rings
				</h2>

				<button onClick={() => props.onClick()}>
					{props.number}
				</button>
			</div>
		);
	}
}

function LinkClick(props) {
	return(
		<div>
			{props.showForm && <button onClick={() => props.onClick()}> Confirm </button>}
			{props.showForm && <button onClick={() => props.back()}> Back </button>}
		</div>
	);
}

class Ticket extends React.Component {
	constructor(props) {
		super(props);
		let match = props.match;
		this.state = {
			total: 0,
			total1: 0,
			ticket: match.params.ticket,
			showForm: true,
		};
	}

	handleClick() {
		if(this.state.ticket === 'Ticket1') {
			this.setState({total: this.state.total +1, total1: this.state.total1 +1});
		}
	}

	linkClick() {
		this.setState({showForm: !this.state.showForm});
	}

	back() {
		this.setState({showForm: !this.state.showForm});
	}

	render() {
		return(
			<div>
			<div>
				{this.state.showForm &&
					<HandleOnClick number={this.state.total}
					movie={this.state.ticket}
					onClick={() => {this.handleClick()}}
					/>}
			</div>

			<div>
				<LinkClick showForm={this.state.showForm} onClick={() => {this.linkClick()}} back={() => {this.back()}} />

				{!this.state.showForm && <Confirmation total={this.state.total}/>}
			</div>

			</div>
		);
	}
}

export default Ticket;