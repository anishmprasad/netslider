/* eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';
import BoxArtContainer from './BoxArtContainer';
import TitleCardFocus from './TitleCardFocus';

export default class TitleCard extends Component {
	e() {
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
	node = null;
	getAnimationStyle() {
		var e = this.props,
			t = this.props.animateIn,
			i = this.props.videoModel,
			a = ((i.id % 20) * 2.5) / 100 + 0.3;
		return t
			? l.getAnimationStyle({
					keyframes: {
						delay: a + 's'
					}
			  })
			: {};
	}
	handleMouseEnter = e => {
		this.props.onMouseEnter && this.props.onMouseEnter(this.node, e);
	};
	handleMouseLeave = e => {
		this.props.onMouseLeave && this.props.onMouseLeave(this.node, e);
	};
	onAnchorClick = e => {
		var t = this.props.onClick;
		t && (e.preventDefault(), t());
	};
	render() {
		var e = this,
			t = this.props,
			i = this.props.isInvalid,
			a = this.props.itemTabbable,
			r = this.props.isDisliked,
			l = this.props.isFocused,
			y = this.props.isDimmed,
			E = this.props.isBobOpen,
			M = this.props.videoModel,
			v = this.props.watchURL,
			b = this.props.animateIn,
			N = this.props.model,
			g = this.props.showProgress,
			k = this.props.showMetaData,
			f = this.props.showRichTitle,
			x = this.props.rowNum,
			R = this.props.rankNum,
			w = this.e({
				'title-card': !0,
				'is-bob-open': E,
				'animate-in': b,
				'is-focused': l,
				'is-dimmed': y,
				'is-disliked': r
			}),
			A = 'title-card-' + (void 0 !== x ? x : -1) + '-' + (void 0 !== R ? R : -1);
		return i
			? React.createElement(d, {
					className: classnames(w, 'boxart-size-16x9')
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
							id: A,
							style: this.getAnimationStyle(),
							className: classnames(w, this.props.className),
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave
						},
						React.createElement(
							'a',
							{
								// videoId: M.id,
								// imageKey: M.imageKey,
								// maturityMisMatchEdgy: M.maturityMisMatchEdgy,
								// maturityMisMatchNonEdgy: M.maturityMisMatchNonEdgy,
								href: v,
								onClick: this.onAnchorClick,
								'aria-label': M.title ? M.title : null,
								tabIndex: a ? 0 : -1,
								'aria-hidden': !a,
								className: 'slider-refocus'
							},
							React.createElement(
								BoxArtContainer,
								{
									className: 'boxart-size-16x9',
									title: M.title
								},
								React.createElement('img', {
									className: 'boxart-image boxart-image-in-padded-container',
									src: M.image,
									alt: ''
								})
							)
						),
						l &&
							React.createElement(u, {
								model: this.props.model,
								playbackQueryParams: this.props.playbackQueryParams
							}),
						this.props.children
					),
					g &&
						React.createElement(m, {
							runtime: M.episodeRuntime,
							bookmarkPosition: M.episodeBookmark,
							current: !0,
							showSummary: !1
						}),
					k &&
						React.createElement(
							'div',
							{
								className: 'metadata'
							},
							f
								? React.createElement(h, {
										videoId: M.id,
										title: M.title,
										isRtl: this.context.isRtl,
										assets: M.showAsARow
								  })
								: React.createElement(
										'div',
										{
											className: 'episode-title'
										},
										M.title
								  ),
							React.createElement(p, {
								onlyInMinutes: !0,
								runtime: M.episodeRuntime
							})
						)
			  );
	}
}
