/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeoutTransitionGroup from './TimeoutTransitionGroup';
import classnames from 'classnames';
// import {CSSTransitionGroup} from 'react-transition-group';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import TransitionGroup from 'react-addons-css-transition-group'
import TransitionGroup from 'react-addons-transition-group';

export default class JawBoneOnRow extends Component {
	constructor(props) {
		super(props);
		(this.jawBoneIsNavigating = !1), (this.currentPlayerSessionId = 0), (this.previousPlayerSessionId = 0);
	}
	getChildContext() {
		return {
			rankNum: this.props.jawBoneRankNum
		};
	}
	componentWillReceiveProps(e) {
		var t = this.props,
			a = t.jawBoneRankNum,
			i = t.showJawBone,
			s = t.lowestVisibleItemIndex,
			n = t.model;
		if ((a !== e.jawBoneRankNum && (this.isFirstJaw = null === a), e.showJawBone)) {
			var l = A(o(this.props)),
				d = A(o(e)),
				c = {};
			if (l !== d) {
				if (l) {
					var h = E(l);
					this.playerPause(h), (c.previousPlayerSessionId = h);
				}
				if (d) {
					var I = E(d);
					this.playerCreate(I, e), (c.currentPlayerSessionId = I);
				}
				this.setState(c);
			}
		} else
			this.props.showJawBone &&
				!e.showJawBone &&
				this.props.videoPlayerInstance &&
				this.playerClose(E(A(o(this.props))));
		if (i && e.lowestVisibleItemIndex !== s) {
			if (this.state.jawBoneIsNavigating) return void (this.state.jawBoneIsNavigating = !1);
			var m = n.bind(
					this.props.videoRoot ? [e.lowestVisibleItemIndex, this.props.videoRoot] : [e.lowestVisibleItemIndex]
				),
				y = V(m),
				w = e.sliderMoveDirection === p.MOVE_DIRECTION_NEXT ? 'rowNext' : 'rowPrev';
			y &&
				(u.emit(
					'jawbone:open',
					r.assign({}, this.context, this.props, {
						trigger: w,
						videoId: y,
						rankNum: e.lowestVisibleItemIndex
					})
				),
				this.context.openJawbone(this.context.rowNum, e.lowestVisibleItemIndex, y));
		}
	}
	playerPause(e) {
		this.context.playerApp.getActionCreators().playerPause({
			sessionId: e
		});
	}
	playerCreate(e, t) {
		if (t.hasVideoMerchInJaw) {
			var a = j(o(t));
			if (a && a.id) {
				var i = this.context.playerApp.getActionCreators(),
					s = this.context.getModelData('truths'),
					n = this.context.playerApp.getAPI(),
					r = n.videoPlayer,
					l = r.getPlaybackStateBySessionId(O(a.id, this.context.rowNum, t.jawBoneRankNum)),
					d = !l || l.videoId !== a.id || l.ended ? a.start || 0 : l.currentTime;
				i.createCadmiumPlayer({
					initialPlaybackState: {
						autoplay: !0,
						muted: this.context.playerApp.getAPI().playerApp.getSupplementalVideoMuteState(!1),
						playbackInitiator: P.VIDEO_MERCH,
						showTimedText: !0,
						uiLabel: T.VIDEO_MERCH_JAW,
						volume: 1,
						currentTime: d
					},
					loadMetadata: !1,
					playbackParams: C({
						authParams: S(),
						disableTrackStickiness: !0,
						loadImmediately: !0,
						sessionParams: k({
							isUIAutoPlay: !0,
							preferUnletterboxed: s.preferUnletterboxedContent,
							uiplaycontext: N(
								f({
									location: 'VIDEO_MERCH',
									row: this.context.rowNum,
									rank: t.jawBoneRankNum,
									requestId: this.context.requestId,
									videoMerchComputeId: a.computeId
								})
							)
						}),
						trackingId: this.context.trackId,
						uiLabel: T.VIDEO_MERCH_JAW
					}),
					sessionId: e,
					videoId: a.id,
					initParamsForPlayback: r.getVideoMerchInitParams()
				});
			}
		}
	}
	playerClose(e) {
		this.context.playerApp.getActionCreators().closePlayer({
			sessionId: e
		});
	}
	closePlayer(e) {
		e !== this.state.currentPlayerSessionId && this.playerClose(e);
	}
	renderJawBone(e, t) {
		var a = this.props.hasVideoMerchInJaw,
			o = I.isRichOriginalsRow(this.context.isTallRow, this.context.models.truths) && !a,
			i = a ? D : d,
			n = this.context.listContext === m.LIST_CONTEXTS.SHORT_FORM;
		return s.createElement(
			h,
			{
				transitionName: 'jawBoneFadeInPlace',
				key: 'jawbone',
				className: 'jawBoneOpenContainer',
				enterTimeout: 640,
				leaveTimeout: 640,
				afterTransitionLeave: this.afterOpenJawBoneTransitionLeave
			},
			s.createElement(
				'div',
				{
					key: 'jawbone-' + t,
					className: 'jawBoneFadeInPlaceContainer'
				},
				s.createElement(i, {
					videoId: t,
					model: e,
					hideMoreLikeThis: o,
					hideTitleActions: n,
					isFirstJaw: this.isFirstJaw,
					playbackQueryParams: this.props.playbackQueryParams,
					disableClose: this.props.disableClose,
					hasVideoMerchInJaw: a,
					videoMerchPlayer: this.props.videoPlayerInstance,
					playerSessionId: this.state.currentPlayerSessionId,
					closePlayer: this.closePlayer
				})
			)
		);
	}
	afterOpenJawBoneTransitionLeave() {
		this.state.previousPlayerSessionId && this.playerClose(this.state.previousPlayerSessionId);
	}
	render() {
		var e = this.props.showJawBone,
			t = !1,
			a = null;
		if (e) {
			var i = o(this.props),
				n = V(i);
			(t = !!i), (a = t && this.renderJawBone(i, n));
		}
		return React.createElement(
			TransitionGroup,
			{
				transitionName: 'jawBoneOpen',
				enterTimeout: 640,
				leaveTimeout: 640,
				className: classnames('jawBoneContent', {
					open: t
				})
			},
			a
		);
	}
}
