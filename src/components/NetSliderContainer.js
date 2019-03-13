/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NetSlider from '../lib';
// import 'styles/caroslider.scss'

export default class NetSliderContainer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className='wrapper'>
				<h1>NetSlider</h1>
				<NetSlider
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
					className='netslider'
				/>
			</div>
		);
	}
}
