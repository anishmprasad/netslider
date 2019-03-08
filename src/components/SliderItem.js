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
import lodash from 'lodash';

export default class SliderItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var e = lodash.extend(
			{
				'slider-item': !0
			},
			this.props.additionalClasses
		);
		return (
			undefined !== this.props.viewportIndex && (e['slider-item-' + this.props.viewportIndex] = !0),
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

// C.r("4p", function(e, s, t) {
//     "use strict";
//     var i = e("eP")
//       , r = e("a3")
//       , a = e("cC")
//       , d = e("9-")
//       , n = r({
//         displayName: "SliderItem",

//         statics: {
//             className: "slider-item"
//         },
//         render: function() {
//             var e = a.extend({
//                 "slider-item": !0
//             }, this.props.additionalClasses);
//             return void 0 !== this.props.viewportIndex && (e["slider-item-" + this.props.viewportIndex] = !0),
//             i.createElement("div", {
//                 className: d(e)
//             }, this.props.children)
//         }
//     });
//     s.exports = n
// });
