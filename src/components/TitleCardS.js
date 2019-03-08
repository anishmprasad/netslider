// C.r('2S', function(e, t, i) {
// 	'use strict';
// 	var a = e('4M'),
// 		s = (a.videoReactShape, e('0b')),
// 		n = e('89'),
// 		o = e('9-'),
// 		r = e('a3'),
// 		l = e('oE'),
// 		d = e('1w'),
// 		c = e('2C'),
// 		m = e('2N'),
// 		u = e('1c'),
// 		h = e('d3'),
// 		p = e('eP'),
// 		E = e('eH'),
// 		v = e('2R'),
// 		y = r({
// 			displayName: 'TitleCard',
// 			contextTypes: {
// 				getModelData: h.func.isRequired
// 			},
// 			node: null
// 		});
// 	t.exports = y;
// });

import React, { Component } from 'react';
export default class TitleCardS extends Component {
	getAnimationStyle() {
		var e = this.props,
			t = e.videoModel.id,
			i = e.animateIn,
			a = ((t % 20) * 2.5) / 100 + 0.3;
		return i
			? l.getAnimationStyle({
					keyframes: {
						delay: a + 's'
					}
			  })
			: {};
	}
	handleMouseEnter(e) {
		this.props.onMouseEnter && this.props.onMouseEnter(this.node, e);
	}
	handleMouseLeave(e) {
		this.props.onMouseLeave && this.props.onMouseLeave(this.node, e);
	}
	onAnchorClick(e) {
		var t = this.props.onClick;
		t && (e.preventDefault(), t());
	}
	render() {
		var e = this,
			t = this.props,
			i = t.isInvalid,
			a = t.itemTabbable,
			r = t.isDisliked,
			l = t.isFocused,
			h = t.isDimmed,
			y = t.isBobOpen,
			M = t.videoModel,
			b = t.watchURL,
			g = t.animateIn,
			f = t.model,
			k = t.rowNum,
			N = t.rankNum,
			x = o({
				'title-card': !0,
				'is-bob-open': y,
				'animate-in': g,
				'is-focused': l,
				'is-dimmed': h,
				'is-disliked': r
			}),
			D = this.context.getModelData('truths').shortformEpisodeDurationVisible,
			C = 'title-card-' + (void 0 !== k ? k : -1) + '-' + (void 0 !== N ? N : -1);
		return i
			? React.createElement(m, {
					className: o(x, 'boxart-size-16x9')
			  })
			: React.createElement(
					'div',
					{
						className: 'title-card-container'
					},
					React.createElement(
						'div',
						{
							ref: function(t) {
								e.node = t;
							},
							id: C,
							style: this.getAnimationStyle(),
							className: o(x, this.props.className),
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave
						},
						React.createElement(
							n,
							{
								videoId: M.id,
								imageKey: M.imageKey,
								maturityMisMatchEdgy: M.maturityMisMatchEdgy,
								maturityMisMatchNonEdgy: M.maturityMisMatchNonEdgy
							},
							React.createElement(
								'a',
								{
									href: b,
									onClick: this.onAnchorClick,
									'aria-label': M.title ? M.title : null,
									tabIndex: a ? 0 : -1,
									'aria-hidden': !a,
									className: 'slider-refocus'
								},
								React.createElement(
									s,
									{
										className: 'boxart-size-16x9',
										title: M.title
									},
									p.createElement('img', {
										className: 'boxart-image boxart-image-in-padded-container',
										src: M.image,
										alt: ''
									})
								)
							)
						),
						l &&
							React.createElement(v, {
								model: f,
								playbackQueryParams: this.props.playbackQueryParams
							}),
						this.props.children && p.createElement(E, null, this.props.isBobOpen && this.props.children),
						D &&
							React.createElement(
								'div',
								{
									className: 'title-card-duration'
								},
								p.createElement(c, {
									runtime: M.episodeRuntime || 0
								})
							)
					),
					M.evidenceData &&
						React.createElement(d, {
							evidenceData: M.evidenceData
						}),
					this.props.showProgress &&
						React.createElement(u, {
							runtime: M.episodeRuntime,
							bookmarkPosition: M.episodeBookmark,
							current: !0,
							showSummary: !1
						})
			  );
	}
}
