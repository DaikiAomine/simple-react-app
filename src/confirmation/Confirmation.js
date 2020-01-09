import React from 'react';

function Check(props) {
	return(
		<div>
			<p> Total number of tickets booked = {props.total} </p>
		</div>
	);
}

class Confirmation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {number: this.props.total};
	}

	render() {
		return(
			<div>
				<Check total={this.props.total}/>
			</div>
		);
	}
}

export default Confirmation;