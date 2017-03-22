import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import SearchBox from './search-box';
import NavBar from './navbar';


var App = React.createClass({
	render(){
		return(
			<div>
				<NavBar />
				<SearchBox />
				{this.props.children}
			</div>
		)
	}
})

render(
	<Router history={hashHistory}>
		<Route path='/' component={App}></Route>
	</Router>,
document.getElementById('root')
);