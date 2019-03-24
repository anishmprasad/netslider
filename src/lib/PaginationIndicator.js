/* eslint-disable */

import React, { Component } from 'react';
export default function PaginationIndicator(props) {
	for (var a = [], e = 0; e < props.totalPages; e += 1) {
		var t = e === props.activePage ? 'active' : '';
		a.push(
			React.createElement('li', {
				className: t,
				key: 'pi' + e
			})
		);
	}
	return (<ul
			className= 'pagination-indicator'
		>
		{a}
		</ul>
	);
}
