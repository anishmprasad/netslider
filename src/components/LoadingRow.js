/* eslint-disable */

// C.r("1F", function (e, a, l) {
//   "use strict";
//   var t = (e("dP"), e("fE")),
//     s = e("aP"),
//     o = e("9p"),
//     r = e("1G"),
//     n = e("1H"),
//     i = s({
//       displayName: "LoadingRow",

//     });
//   a.exports = i
// });

import React, { Component } from 'react';

export default class LoadingRow extends Component {
	render() {
		for (
			var e = {
					lolomoRow: !0,
					lolomoRow_title_card: !0,
					lolomoPreview: !0
				},
				a = {
					rowTitle: !0,
					pulsate: this.props.pulsateHeader
				},
				l = [],
				s = 0;
			s < 7;
			s++
		)
			l.push(
				React.createElement(n, {
					delay: 0.2 * s,
					pulsate: this.props.pulsateTitles,
					displayWhenNotPulsing: !0,
					key: 'loading-row-' + s
				})
			);
		return React.createElement(
			'div',
			{
				className: o(e)
			},
			!this.props.hideRowHeader &&
				React.createElement(
					'div',
					{
						className: 'rowHeader'
					},
					React.createElement(
						'span',
						{
							className: o(a)
						},
						' '
					)
				),
			React.createElement(
				'div',
				{
					className: 'rowContent'
				},
				React.createElement(
					'div',
					{
						className: 'slider'
					},
					l
				)
			),
			this.props.showSpinner
				? React.createElement(
						'div',
						{
							className: 'lolomoSpinLoader'
						},
						React.createElement(r, null)
				  )
				: null
		);
	}
}
