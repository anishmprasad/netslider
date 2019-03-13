/* eslint-disable */

import React, { Component } from 'react';
export default class PaginationIndicator extends Component {
	render() {
		for (var a = [], e = 0; e < this.props.totalPages; e += 1) {
			var t = e === this.props.activePage ? 'active' : '';
			a.push(
				React.createElement('li', {
					className: t,
					key: 'pi' + e
				})
			);
		}
		return React.createElement(
			'ul',
			{
				className: 'pagination-indicator'
			},
			a
		);
	}
}
