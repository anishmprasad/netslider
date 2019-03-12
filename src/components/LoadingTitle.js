/* eslint-disable */

// C.r("1L", function(s, e, a) {
//     "use strict";
//     var t = s("eP")
//       , l = s("a3")
//       , i = s("1H")
//       , r = s("9-")
//       , p = l({
//         displayName: "LoadingTitle",

//     });
//     e.exports = p
// });

import React, { Component } from 'react';
import LoadingBox from './LoadingBox';
import classnames from 'classnames';
export default class LoadingTitle extends Component {
	render() {
		var s = {
				smallTitleCard: !0,
				loadingTitle: !0
			},
			e = {
				'ratio-16x9': !0
			};
		return (
			this.props.className && (s[this.props.className] = !0),
			React.createElement(
				'div',
				{
					className: classnames(s)
				},
				React.createElement(LoadingBox, {
					boxClassNames: e,
					delay: this.props.delay,
					pulsate: this.props.pulsate,
					displayWhenNotPulsing: this.props.displayWhenNotPulsing
				})
			)
		);
	}
}
