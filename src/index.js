import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from './about/About';
import NotFound from './notFound/NotFound';
import Ticket from './bookTicket/Ticket';
import TicketList from './bookTicket/TicketList';
import Confirmation from './confirmation/Confirmation';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const routing = (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/tickets"> Book Tickets </Link>
					</li>
					<li>
						<Link to="/about"> About </Link>
					</li>
				</ul>

				<Switch>
					<Route exact path="/" component={App}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/tickets" component={TicketList}/>
					<Route path="/tickets/:ticket" component={Ticket}/>
					<Route path="confirmation" component={Confirmation}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
