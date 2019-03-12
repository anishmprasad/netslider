/**eslint-disable */

import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TransitionGroup from 'react-addons-css-transition-group';
import TimeoutTransitionGroupChild from './TimeoutTransitionGroupChild';

import lodash from 'lodash';

export default class TimeoutTransitionGroup extends Component {
	_wrapChild(e) {
		return React.createElement(
			TimeoutTransitionGroupChild,
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
		console.log(
			Object.assign(
				{},
				lodash.omit(this.props, ['enterTimeout', 'leaveTimeout', 'enterDelayMs', 'afterTransitionLeave']),
				{
					childFactory: this._wrapChild
				}
			)
		);
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
		// return(
		// 	<TransitionGroup
		// 	>
		// 	</TransitionGroup>
		// )
	}
}
TimeoutTransitionGroup.defaultProps = {
	transitionAppear: !1,
	transitionEnter: !0,
	transitionLeave: !0
};

// children: {$$typeof: Symbol(react.element), type: ƒ, key: "/browse/genre/83", ref: null, props: {…}, …}
// className: "mainView"
// component: "div"
// role: "main"
// transitionAppear: false
// transitionEnter: true
// transitionLeave: true
// transitionName: "pageTransition"

// children: {$$typeof: Symbol(react.element), type: ƒ, key: "/browse/genre/83", ref: null, props: {…}, …}
// className: "mainView"
// component: "div"
// enterDelayMs: 250
// enterTimeout: 200
// leaveTimeout: 200
// role: "main"
// transitionAppear: false
// transitionEnter: true
// transitionLeave: true
// transitionName: "pageTransition"
