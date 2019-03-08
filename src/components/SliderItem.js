// C.r("4e", function (e, s, t) {
//   "use strict";
//   var i = (e("dP"), e("fE")),
//     r = e("aP"),
//     a = e("dm"),
//     d = e("9p"),
//     n = r({
//       displayName: "SliderItem",

//       statics: {
//         className: "slider-item"
//       },

//     });
//   s.exports = n
// });

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SliderItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var e = a.extend(
			{
				'slider-item': !0
			},
			this.props.additionalClasses
		);
		return (
			0 !== this.props.viewportIndex && (e['slider-item-' + this.props.viewportIndex] = !0),
			React.createElement(
				'div',
				{
					className: 'slider-item'
				},
				this.props.children
			)
		);
	}
}
SliderItem.defaultProps = {
	additionalClasses: {}
};
