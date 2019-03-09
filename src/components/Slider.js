// C.r("4d", function (e, t, i) {
//   "use strict";

//   function s(e, t, i) {
//     var s = t / e,
//       n = i / e,
//       o = n / s;
//     return Math.ceil(o)
//   }
//   var n = e("dP"),
//     o = e("fE"),
//     r = e("aP"),
//     a = e("eZ"),
//     l = e("9p"),
//     h = e("4e"),
//     d = e("4a"),
//     p = e("1H"),
//     c = e("6p"),
//     u = e("6z"),
//     m = e("t5"),
//     I = e("6A"),
//     v = e("7s"),
//     f = e("7t"),
//     g = e("dl"),
//     w = "discovery/akira/Common",
//     x = {
//       previous: g(w, "slider.handle.previous"),
//       next: g(w, "slider.handle.next")
//     }, S = r({
//       displayName: "Slider",

//     });
//   t.exports = S
// });

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderItem from './SliderItem';
import TitleCardContainer from './TitleCardContainer';
import PaginationIndicator from './PaginationIndicator';
import LoadingBox from './LoadingBox';
import LoadingTitle from './LoadingTitle'
import { KeyboardConstants } from './constants';

function l() {
	for (var n = [], i = 0; i < arguments.length; i++) {
		var t = arguments[i];
		if (t) {
			var f = typeof t;
			if ('string' === f || 'number' === f) n.push(t);
			else if (Array.isArray(t)) n.push(e.apply(null, t));
			else if ('object' === f) for (var o in t) Object.hasOwnProperty.call(t, o) && t[o] && n.push(o);
		}
	}
	return n.join(' ');
}
const x = {
	next: {
		b: 'discovery/akira/Common',
		k: 'slider.handle.next'
	},
	previous: {
		b: 'discovery/akira/Common',
		k: 'slider.handle.previous'
	}
};
export default class Slider extends Component {
	constructor(props) {
		super(props);
		this.animateHoverTimeout = null;
		this.isAnimating = !1;
		this.touchStart = null;
		this.statics = {
			MOVE_DIRECTION_NEXT: 1,
			MOVE_DIRECTION_PREV: -1
		};
		this.sliderWrappedItems = [];
		var e = this.getTotalItemCount(),
			t = this.props.initialLowestVisibleIndex || 0;
		// return (
		if (
			!this.props.enableLooping &&
			e &&
			t + this.props.itemsInRow > e &&
			(t = e - this.props.itemsInRow) < 0 &&
			(t = 0)
		) {
			this.state = {
				lowestVisibleItemIndex: t,
				hasMovedOnce: this.props.initialLowestVisibleIndex || !1,
				sliderHandleFocused: !1
			};
		}
		this.state = {
			lowestVisibleItemIndex: t,
			hasMovedOnce: this.props.initialLowestVisibleIndex || !1,
			sliderHandleFocused: !1
		};
		// );
	}

	advanceNext(e) {
		var t = this.getTotalItemCount(),
			i = this.props.itemsInRow,
			n = this.state.lowestVisibleItemIndex,
			o = this.state.lowestVisibleItemIndex + i;
		if ((e && e.preventDefault(), this.isNextNavActive() && !this.isAnimating)) {
			this.isAnimating = !0;
			var r = n + 2 * i;
			o !== t && r > t && (o = t - this.props.itemsInRow);
			var a = this.state.lowestVisibleItemIndex - o,
				l = this.getNewSliderOffset(a),
				h = l + this.getBaseSliderOffset();
			o === t && (o = 0),
				e && 'wheel' === e.type
					? this.shiftSlider(
							o,
							h,
							this.statics.MOVE_DIRECTION_NEXT,
							{
								x: e.clientX,
								y: e.clientY
							},
							!1,
							s(t, i, o)
					  )
					: e && 'keydown' === e.type
					? this.shiftSlider(o, h, this.statics.MOVE_DIRECTION_NEXT, null, !0, s(t, i, o))
					: this.shiftSlider(o, h, this.statics.MOVE_DIRECTION_NEXT, null, !1, s(t, i, o));
		}
	}
	advancePrev(e) {
		var t = this.getTotalItemCount(),
			i = this.props.itemsInRow,
			n = this.state.lowestVisibleItemIndex,
			o = this.state.lowestVisibleItemIndex - this.props.itemsInRow;
		if ((e && e.preventDefault(), this.isPrevNavActive() && !this.isAnimating)) {
			(this.isAnimating = !0), 0 !== this.state.lowestVisibleItemIndex && o < 0 && (o = 0);
			var r = this.state.lowestVisibleItemIndex - o;
			0 === n && (o = t - i);
			var a = this.getNewSliderOffset(r),
				l = a + this.getBaseSliderOffset();
			e && 'wheel' === e.type
				? this.shiftSlider(
						o,
						l,
						this.statics.MOVE_DIRECTION_PREV,
						{
							x: e.clientX,
							y: e.clientY
						},
						!1,
						s(t, i, o)
				  )
				: e && 'keydown' === e.type
				? this.shiftSlider(o, l, this.statics.MOVE_DIRECTION_PREV, null, !0, s(t, i, o))
				: this.shiftSlider(o, l, this.statics.MOVE_DIRECTION_PREV, null, !1, s(t, i, o));
		}
	}
	shiftSlider(e, t, i, s, n, o) {
		var r = this,
			l = a.findDOMNode(this.refs.sliderContent),
			h = this.refs.handlePrev ? a.findDOMNode(this.refs.handlePrev) : null,
			d = this.getAnimationStyle(t);
		clearTimeout(this.animateHoverTimeout),
			'function' == typeof this.props.onSliderMove && this.props.onSliderMove(e, i),
			h && h.classList.add('active'),
			v.pauseScanning(),
			l.addEventListener('transitionend', function t(n) {
				n.target === this &&
					(l.removeEventListener('transitionend', t),
					l.classList.remove('animating'),
					r.setState({
						lowestVisibleItemIndex: e,
						hasMovedOnce: !0
					}),
					r.resetSliderPosition(),
					(r.isAnimating = !1),
					r.refocusAfterShift(i),
					v.resumeScanning(),
					v.requestScan(
						Object.assign(
							{
								event: f.LOLOMO_SCROLL,
								xScrollDirection: i,
								rowSegment: o
							},
							r.props.parentContext
						)
					),
					s &&
						(clearTimeout(r.animateHoverTimeout),
						(r.animateHoverTimeout = setTimeout(function() {
							u.mouseOver(s);
						}, 100))));
			}),
			l.classList.add('animating'),
			l.setAttribute('style', d);
	}
	refocusAfterShift(e) {
		var t = this.getSliderItemsInViewport(),
			i = void 0,
			s = void 0;
		t &&
			t.length > 1 &&
			((s = e === this.statics.MOVE_DIRECTION_NEXT ? 1 : t.length - 2),
			(i = a.findDOMNode(t[s]).querySelector('.slider-refocus')) && i.focus());
	}
	resetSliderPosition() {
		if (this.refs.sliderContent) {
			var e = this.getBaseSliderOffset(),
				t = this.getAnimationStyle(e);
			a.findDOMNode(this.refs.sliderContent).setAttribute('style', t);
		}
	}
	getSliderItemWidth() {
		return 100 / this.props.itemsInRow;
	}
	getHighestIndex() {
		return Math.min(this.getTotalItemCount(), this.state.lowestVisibleItemIndex + 2 * this.props.itemsInRow + 1);
	}
	getLowestIndex() {
		return Math.max(0, this.state.lowestVisibleItemIndex - this.props.itemsInRow - 1);
	}
	getTotalItemCount() {
		return this.props.totalItems;
	}
	getTotalPages() {
		return Math.ceil(this.getTotalItemCount() / this.props.itemsInRow);
	}
	getPageNumber(e) {
		return Math.ceil(e / this.props.itemsInRow);
	}
	getBaseSliderOffset() {
		var e = this.props.itemsInRow,
			t = this.getSliderItemWidth(),
			i = 0;
		return (
			this.getTotalPages() > 1 &&
				(((this.state.hasMovedOnce && 0 === this.state.lowestVisibleItemIndex && this.props.enableLooping) ||
					this.state.lowestVisibleItemIndex >= e) &&
					(i = -100),
				this.state.hasMovedOnce &&
					(this.props.enableLooping || this.state.lowestVisibleItemIndex > e) &&
					(i -= t),
				this.state.lowestVisibleItemIndex > 0 &&
					this.state.lowestVisibleItemIndex < e &&
					(i -= this.state.lowestVisibleItemIndex * t)),
			(i *= this.context.isRtl ? -1 : 1)
		);
	}
	getNewSliderOffset(e) {
		return e * this.getSliderItemWidth() * (this.context.isRtl ? -1 : 1);
	}
	getSliderContents() {
		var e = this.props.itemsInRow,
			t = this.getTotalItemCount(),
			i = [],
			s = [],
			n = 0,
			r = this.state.lowestVisibleItemIndex - this.getLowestIndex();
		if (this.props.children && this.props.children.length) {
			(i = this.props.children.slice(this.getLowestIndex(), this.getHighestIndex())),
				(n = this.getHighestIndex() - this.getLowestIndex());
			for (var a = 0; i.length < n && i.length < t; )
				i.push(
					React.createElement(LoadingTitle, {
						className: 'fullWidth',
						delay: 0.2 * a,
						pulsate: !1,
						displayWhenNotPulsing: !0,
						key: 'loading-title-' + a
					})
				),
					a++;
			this.getTotalPages() > 1 &&
				this.props.enableLooping &&
				(this.getHighestIndex() - this.state.lowestVisibleItemIndex <= 2 * e &&
					((s =
						this.state.lowestVisibleItemIndex + e === t
							? this.props.children.slice(0, this.props.itemsInRow + 1)
							: this.props.children.slice(0, 1)),
					(s = this.cloneItemsWithNewKeys(s, '_appended')),
					(i = i.concat(s))),
				this.state.hasMovedOnce &&
					this.state.lowestVisibleItemIndex - e <= 0 &&
					((s =
						0 === this.state.lowestVisibleItemIndex
							? this.props.children.slice(-this.props.itemsInRow - 1)
							: this.props.children.slice(-1)),
					(r += s.length),
					(s = this.cloneItemsWithNewKeys(s, '_prepended')),
					(i = s.concat(i))));
		}
		return this.wrapSliderItems(i, r);
	}
	cloneItemsWithNewKeys(e, t) {
		return e.map(function(e) {
			return o.cloneElement(e, {
				key: e.key + t
			});
		});
	}

	getSliderItemsInViewport() {
		return this.getSliderItems(
			this.sliderWrappedItems.filter(function(e) {
				return e.inViewport;
			})
		);
	}
	getAllSliderItems() {
		return this.getSliderItems(this.sliderWrappedItems);
	}
	getSliderItems(e) {
		var t = [],
			i = void 0,
			s = void 0;
		for (i = 0; (s = e[i]); i++) this.refs[s.uid] && t.push(this.refs[s.uid]);
		return t;
	}
	getItem(e) {
		return this.refs[e];
	}
	isItemInMiddle(e) {
		var t = this.getItem('item_' + e);
		return (
			t &&
			('middle' === t.props.viewportPosition ||
				'leftEdge' === t.props.viewportPosition ||
				'rightEdge' === t.props.viewportPosition)
		);
	}
	wrapSliderItems(e, t) {
		var i = t + this.props.itemsInRow - 1,
			s = this,
			n = 0;
		console.log(e);
		return (
			(this.sliderWrappedItems = []),
			React.Children.map(e, function(e, r) {
				var a = '',
					l = !1;
				r === t
					? ((a = 'leftEdge'), (l = !0))
					: r === t - 1
					? (a = 'leftPeek')
					: r === i + 1
					? (a = 'rightPeek')
					: r === i
					? ((a = 'rightEdge'), (l = !0))
					: r >= t && r <= i && ((a = 'middle'), (l = !0));
				var d = a ? n : '',
					p = 'item_' + r,
					c = !1;
				a && (++n, (c = !0)),
					s.sliderWrappedItems.push({
						uid: p,
						inViewport: c
					});
				var u = React.cloneElement(e, {
					sliderItemId: p,
					itemTabbable: l
				});
				console.log(u);
				return React.createElement(
					SliderItem,
					{
						ref: p,
						key: p,
						viewportIndex: d,
						viewportPosition: a
					},
					u
				);
			})
		);
	}
	getAnimationStyle(e) {
		var t = e ? 'translate3d(' + e + '%, 0px, 0px)' : '';
		return ['-webkit-transform: ' + t, '-ms-transform: ' + t, 'transform: ' + t].join(';');
	}
	getReactAnimationStyle(e) {
		if (e) {
			var t = 'translate3d(' + e + '%, 0px, 0px)';
			return {
				WebkitTransform: t,
				MsTransform: t,
				transform: t
			};
		}
		return null;
	}
	handleMouseLeaveSliderMask() {
		clearTimeout(this.animateHoverTimeout);
	}
	handleTouchStart(e) {
		if (e.pointerType && 'touch' !== e.pointerType) return void e.stopPropagation();
		this.touchStart = I.getTouchObjectStart(e);
	}
	handleTouchMove(e) {
		if (e.pointerType && 'touch' !== e.pointerType) return void e.stopPropagation();
		var t = c.touchAdvanceDirection(e, this.touchStart, this.context.isRtl);
		Math.abs(t.deltaX) > Math.abs(t.deltaY) && e.preventDefault(),
			this.isAnimating ||
				(t.direction === c.ADVANCE_NEXT && this.isNextNavActive()
					? (this.advanceNext(), (this.touchStart = {}))
					: t.direction === c.ADVANCE_PREV &&
					  this.isPrevNavActive() &&
					  (this.advancePrev(), (this.touchStart = {})));
	}
	handleMouseWheel(e) {
		if (!this.isAnimating) {
			var t = c.wheelAdvanceDirection(e);
			t === c.ADVANCE_NEXT ? this.advanceNext(e) : t === c.ADVANCE_PREV && this.advancePrev(e);
		}
	}
	componentDidUpdate(e) {
		this.props.itemsInRow !== e.itemsInRow && this.resetSliderPosition();
	}
	componentWillReceiveProps(e) {
		e.totalItems < this.props.totalItems &&
			this.isLastPage() &&
			this.setState({
				lowestVisibleItemIndex: Math.max(0, e.totalItems - e.itemsInRow)
			});
	}
	hasMorePrevPages() {
		var e = this.state.lowestVisibleItemIndex - this.props.itemsInRow;
		return this.props.enableLooping || e > -this.props.itemsInRow;
	}
	hasMoreNextPages() {
		var e = this.state.lowestVisibleItemIndex + this.props.itemsInRow;
		return this.props.enableLooping || e < this.getTotalItemCount();
	}
	isPrevNavActive() {
		return this.getTotalPages() > 1 && this.state.hasMovedOnce && this.hasMorePrevPages();
	}
	isNextNavActive() {
		return this.getTotalPages() > 1 && this.hasMoreNextPages();
	}
	isLastPage() {
		return this.getPageNumber(this.state.lowestVisibleItemIndex) + 1 === this.getTotalPages();
	}
	componentDidMount() {
		if (I.isTouchEnabled()) {
			var e = a.findDOMNode(this.refs.sliderContent);
			e.addEventListener('pointerdown', this.handleTouchStart),
				e.addEventListener('pointermove', this.handleTouchMove);
		}
	}
	componentWillUnmount() {
		if (I.isTouchEnabled()) {
			var e = a.findDOMNode(this.refs.sliderContent);
			e.removeEventListener('pointerdown', this.handleTouchStart),
				e.removeEventListener('pointermove', this.handleTouchMove);
		}
	}
	executeOnEnterOrSpace(c) {
		return function(e) {
			switch (e && e.which) {
				case KeyboardConstants.ENTER:
				case KeyboardConstants.SPACE:
					c(e);
			}
		};
	}
	renderPageHandle(e, t, i, s, n) {
		var r = l('handle', {
			handlePrev: t,
			handleNext: !t,
			active: s
		});
		if (e <= 1 || (t && !this.state.hasMovedOnce))
			return this.props.showEmptyHandles
				? React.createElement('span', {
						className: r,
						tabIndex: -1,
						ref: i,
						role: 'presentation',
						'aria-label': ''
				  })
				: null;
		var a = this.context.isRtl,
			h = l('indicator-icon', {
				'icon-leftCaret': a ? !t : t,
				'icon-rightCaret': a ? t : !t
			}),
			d = this.props.sliderHandlePrevString ? this.props.sliderHandlePrevString : 'See previous titles',
			// : this.context.formatString(x.previous),
			p = this.props.sliderHandleNextString ? this.props.sliderHandleNextString : 'See more titles',
			// : this.context.formatString(x.next),
			c = t ? d : p;
		return React.createElement(
			'span',
			{
				className: r,
				tabIndex: !t || this.state.hasMovedOnce ? 0 : -1,
				ref: i,
				onClick: n,
				onKeyDown: this.executeOnEnterOrSpace(n),
				onMouseEnter: this.props.onMouseEnterSliderHandle,
				onFocus: this.props.onMouseEnterSliderHandle,
				onMouseLeave: this.props.onMouseLeaveSliderHandle,
				onBlur: this.props.onMouseLeaveSliderHandle,
				role: 'button',
				'aria-label': c
			},
			React.createElement('b', {
				className: h
			})
		);
	}
	render() {
		var e = this.getReactAnimationStyle(this.getBaseSliderOffset()),
			t = l('sliderContent', 'row-with-x-columns'),
			i = this.getTotalPages(),
			s = this.props.enablePaginationIndicator && i > 1,
			n = l('sliderMask', {
				showPeek: this.props.enablePeek
			});
		return React.createElement(
			'div',
			{
				className: 'slider'
			},
			this.renderPageHandle(i, !0, 'handlePrev', this.isPrevNavActive(), this.advancePrev),
			s
				? React.createElement(PaginationIndicator, {
						totalPages: i,
						activePage: this.getPageNumber(this.state.lowestVisibleItemIndex)
				  })
				: null,
			React.createElement(
				'div',
				{
					className: n,
					onMouseLeave: this.handleMouseLeaveSliderMask
				},
				React.createElement(
					'div',
					{
						className: t,
						ref: 'sliderContent',
						style: e,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove,
						onWheel: this.handleMouseWheel
					},
					this.getSliderContents()
				)
			),
			this.renderPageHandle(i, !1, 'handleNext', this.isNextNavActive(), this.advanceNext)
		);
	}
}

Slider.defaultProps = {
	parentContext: {},
	showEmptyHandles: !1
};
Slider.propTypes = {
	getI18nString: PropTypes.func.isRequired,
	getModelData: PropTypes.func,
	isRtl: PropTypes.bool,
	formatString: PropTypes.func.isRequired
};
