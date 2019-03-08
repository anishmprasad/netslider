// C.r('1H', function(s, e, a) {
// 	'use strict';
// 	var t = s('eP'),
// 		i = s('a3'),
// 		n = s('9-'),
// 		p = i({
// 			displayName: 'LoadingBox'
// 		});
// 	e.exports = p;
// });

import React, { Component } from 'react';
import classnames from 'classnames';
export default class LoadingBox extends Component {
	render() {
		var s = this.props.pulsate,
			e = this.props.displayWhenNotPulsing,
			a = this.props.boxClassNames,
			i = this.props.delay + 's',
			p = s
				? {
						WebkitAnimationDelay: i,
						AnimationDelay: i
				  }
				: {};
		return (
			(a.pulsate = s && e),
			(a['pulsate-transparent'] = s && !e),
			(a['no-pulsate'] = !s && e),
			React.createElement('div', {
				className: classnames(a),
				style: p
			})
		);
	}
}
