// C.r("74", function (e, t, r) {
//   "use strict";
//   var n = e("fE"),
//     o = e("aP"),
//     a = e("dP"),
//     c = e("dl"),
//     s = "core/nfse",
//     i = {
//       header: c(s, "header"),
//       bodyCopy: c(s, "body.copy"),
//       bodyCopy2: c(s, "body.copy2"),
//       buttonHome: c(s, "button.home")
//     }, m = o({
//       displayName: "SiteError",
//       contextTypes: {
//         getI18nString: a.func.isRequired,
//         formatString: a.func.isRequired
//       },

//     });
//   t.exports = m
// });

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SiteError extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{
					className: 'seBox'
				},
				React.createElement(
					'h1',
					{
						className: 'seHeader'
					},
					this.context.formatString(i.header)
				),
				React.createElement('p', null, this.context.formatString(i.bodyCopy), '  '),
				React.createElement('p', null, this.context.formatString(i.bodyCopy2), ' '),
				React.createElement(
					'div',
					{
						className: 'seNflxButton'
					},
					React.createElement(
						'a',
						{
							className: 'seHomeLink',
							href: '/'
						},
						this.context.formatString(i.buttonHome)
					)
				)
			)
		);
	}
}

SiteError.contextTypes = {
	getI18nString: PropTypes.func.isRequired,
	formatString: PropTypes.func.isRequired
};
