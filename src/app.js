import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';


var App = React.createClass({
	render() {
		return(
			<div>
				<h1>Hello World</h1>
			</div>

		)
	}
})

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}></Route>
	</Router>,
document.getElementById('root')
)