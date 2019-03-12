/**eslint-disable */

import React, { Component } from 'react';

export default class PresTrackedContainer extends Component {
	render() {
		return React.createElement(
			'div',
			{
				className: 'ptrack-container' + this.props.className
			},
			this.props.children
		);
	}
}
