// C.r("4B", function(e, t, r) {
//     "use strict";
//     var i = e("9H")
//       , n = i(e("9D"))
//       , a = e("cC")
//       , s = e("eP")
//       , o = e("a3")
//       , p = e("eH")
//       , l = e("4C")
//       , u = o({
//         displayName: "TimeoutTransitionGroup",

//     });
//     t.exports = u
// });

import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import lodash from 'lodash';

export default class TimeoutTransitionGroup extends Component {
	_wrapChild(e) {
		return React.createElement(
			l,
			{
				enterTimeout: this.props.enterTimeout,
				leaveTimeout: this.props.leaveTimeout,
				afterTransitionEnter: this.props.afterTransitionEnter,
				afterTransitionLeave: this.props.afterTransitionLeave,
				beforeTransitionEnter: this.props.beforeTransitionEnter,
				beforeTransitionLeave: this.props.beforeTransitionLeave,
				enterDelayMs: this.props.enterDelayMs,
				leaveDelayMs: this.props.leaveDelayMs,
				name: this.props.transitionName,
				appear: this.props.transitionAppear,
				enter: this.props.transitionEnter,
				leave: this.props.transitionLeave
			},
			e
		);
	}
	render() {
		return React.createElement(
			TransitionGroup,
			Object.assign(
				{},
				lodash.omit(this.props, ['enterTimeout', 'leaveTimeout', 'enterDelayMs', 'afterTransitionLeave']),
				{
					childFactory: this._wrapChild
				}
			)
		);
	}
}
TimeoutTransitionGroup.defaultProps = {
	transitionAppear: !1,
	transitionEnter: !0,
	transitionLeave: !0
};
