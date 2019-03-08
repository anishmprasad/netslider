// C.r('4l', function(a, e, t) {
// 	'use strict';
// 	var i = a('eP'),
// 		r = a('a3'),
// 		n = r({
// 			displayName: 'PaginationIndicator',
// 			render: function() {}
// 		});
// 	e.exports = n;
// });
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
