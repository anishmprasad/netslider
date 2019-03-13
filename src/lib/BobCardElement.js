/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animate from './Animate';
import classnames from 'classnames';
import SliderItem from './SliderItem';

const v = 400,
	g = 1.95,
	y = 0.51282051282051,
	x = 1.2,
	I = 0.8333333333,
	O = 4;
export default class BobCardElement extends Component {
	getParentSliderItem(e) {
		for (; e && (e = e.parentNode); ) if (e instanceof HTMLElement && e.classList.contains('slider-item')) return e;
		return null;
	}
	setParentZIndex(e) {
		var t = this.getParentSliderItem(this.containerNode);
		t &&
			Animate().css({
				target: t,
				zIndex: e
			});
	}
	preExpandScale = '1x2' === this.props.boxShape ? I : y;
	scale = '1x2' === this.props.boxShape ? x : g;
	openBOB() {
		var e = this.props.onBobOpen,
			t = this.scale,
			n = 100 * t,
			o = (n - 100) / -2;
		this.setParentZIndex(O),
			Animate().animate({
				target: ReactDOM.findDOMNode(Object.assign(Object.assign(this))),
				before: {
					transformOrigin: '',
					scale: this.preExpandScale,
					visibility: 'visible',
					width: n + '%',
					height: n + '%',
					top: o + '%',
					left: o + '%'
				},
				scale: 0.99999,
				easing: 'cubic-bezier(0.5, 0, 0.1, 1)',
				duration: v
			}),
			Animate().animate({
				target: this.onGrowOverlayImage,
				opacity: 0,
				duration: 1.5 * v,
				easing: 'linear',
				after: {
					display: 'none'
				}
			}),
			'function' == typeof e && e(t, v);
	}
	componentDidMount() {
		this.openBOB();
	}
	componentWillEnter(callback) {
		console.log('component will enter');
		callback();
	}
	componentWillLeave(e) {
		console.log('component did leave');
		var t = this,
			a = this.props.onBobClose,
			n = !1,
			o = v;
		Animate().animate({
			target: ReactDOM.findDOMNode(this),
			before: {
				transformOrigin: '50% 50% 0',
				duration: 0
			},
			scale: this.preExpandScale,
			duration: o,
			easing: 'cubic-bezier(0.5, 0, 0.1, 1)',
			callback: function() {
				n || ((n = !0), t.setParentZIndex(null), 'function' == typeof e && e());
			}
		}),
			Animate().animate({
				target: this.onGrowOverlayImage,
				before: {
					display: 'block'
				},
				opacity: 1,
				duration: o
			}),
			'function' == typeof a && a(o),
			this.setParentZIndex(2),
			setTimeout(function() {
				n || ((n = !0), t.setParentZIndex(null), 'function' == typeof e && e());
			}, o + 20);
	}
	render() {
		var e = this,
			t = this.props,
			a = t.videoModel.id,
			n = t.titleCardImage,
			o = t.className;
		return (
			<div
				className={classnames('bob-card', o)}
				key={'bob-' + a.toString()}
				ref={function(t) {
					e.containerNode = t;
				}}
			>
				{this.props.children}
				<img
					alt={''}
					src={n}
					className={'bob-title-art'}
					ref={function(t) {
						e.onGrowOverlayImage = t;
					}}
				/>
			</div>
		);
	}
}
