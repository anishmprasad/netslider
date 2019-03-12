/** eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import LolomoRow from './LolomoRow';
// import HomeContent from './HomeContent'
// import 'styles/caroslider.scss'

export default class CaroSlider extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<h1>Slider</h1>
				<LolomoRow
					historyState={undefined}
					id={'83'}
					initialFetchCompleted={true}
					isKidsPage={false}
					isLoading={false}
					enableInitialFetch={true}
					error={undefined}
					genreId={'83'}
					children={null}
					jawBoneRankNum={null}
					jawBoneRowNum={null}
					jawBoneVideoId={undefined}
					sortOrder={'rw'}
					trackId={null}
					uiView={'browseTitles'}
					renderSource={'client'}
					className='lolomoRow'
				/>
			</div>
		);
	}
}
