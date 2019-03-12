import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import '../components/styles.scss';
import CaroSlider from '../components/CaroSlider';
// import HomePage from 'components/HomePage'

export default class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={CaroSlider} />
					{/* <Route exact path='/' component={HomePage}/> */}
				</Switch>
			</BrowserRouter>
		);
	}
}
