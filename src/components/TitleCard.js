import React, { Component } from 'react';
import classnames from 'classnames'
import BoxArtContainer from './BoxArtContainer'
import TitleCardFocus from './TitleCardFocus'

// export default class TitleCard extends Component {
// 	e() {
//             for (var n = [], i = 0; i < arguments.length; i++) {
//                 var t = arguments[i];
//                 if (t) {
//                     var f = typeof t;
//                     if ("string" === f || "number" === f)
//                         n.push(t);
//                     else if (Array.isArray(t))
//                         n.push(e.apply(null, t));
//                     else if ("object" === f)
//                         for (var o in t)
//                             Object.hasOwnProperty.call(t, o) && t[o] && n.push(o)
//                 }
//             }
//             return n.join(" ")
//         }
// 	renderTallPanel() {
// 		var e = this.props.videoModel,
// 			t = classnames('boxart-size-1x2', 'boxart-tall-panel'),
// 			a = e || {},
// 			i = a.tallImage,
// 			o = a.tallImageFocalPoint;
// 		return i
// 			? React.createElement(
// 					n,
// 					{
// 						className: t,
// 						title: e.title
// 					},
// 					o
// 						? React.createElement(l, {
// 								url: i,
// 								className: t,
// 								focalPoint: {
// 									x: o.x,
// 									containerWidth: 342,
// 									imageWidth: 848
// 								}
// 						  })
// 						: React.createElement('img', {
// 								className: 'boxart-image-tall boxart-image-in-padded-container',
// 								src: i,
// 								alt: ''
// 						  })
// 			  )
// 			: null;
// 	}
// 	getAnimationStyle() {
// 		var e = this.props,
// 			t = e.videoModel,
// 			a = e.animateIn,
// 			i = t && ((t.id % 20) * 2.5) / 100 + 0.3;
// 		return a
// 			? c.getAnimationStyle({
// 					keyframes: {
// 						delay: i + 's'
// 					}
// 			  })
// 			: {};
// 	}
// 	handleMouseEnter = (e) => {
// 		this.props.onMouseEnter && this.props.onMouseEnter(this.node, e);
// 	}
// 	handleMouseLeave = (e) => {
// 		this.props.onMouseLeave && this.props.onMouseLeave(this.node, e);
// 	}
// 	onAnchorClick(e) {
// 		var t = this.props.onClick;
// 		t && (e.stopPropagation(), e.preventDefault(), t());
// 	}
// 	render() {
// 		var e = this,
// 			t = this.props,
// 			a = t.isInvalid,
// 			i = t.itemTabbable,
// 			// l = t.isDisliked,
// 			// r = t.isFocused,
// 			// c = t.isDimmed,
// 			// h = t.isBobOpen,
// 			b = t.videoModel,
// 			v = t.watchURL,
// 			// E = t.animateIn,
// 			g = t.model,
// 			k = t.showProgress,
// 			y = t.rowNum,
// 			f = t.rankNum,
// 			x = this.e({
// 				'title-card': !0,
// 				'slider-refocus': !0,
// 				'title-card-tall-panel': !0,
// 				'is-bob-open': this.props.isBobOpen,
// 				'animate-in': this.props.animateIn,
// 				'is-focused': this.props.isFocused,
// 				'is-dimmed': this.props.isDimmed,
// 				'is-disliked': this.props.isDisliked
// 			}),
// 			M = 'title-card-' + (void 0 !== y ? y : -1) + '-' + (void 0 !== f ? f : -1);
// 		return a
// 			? React.createElement(d, {
// 					className: classnames(x, 'boxart-size-16x9')
// 			  })
// 			: React.createElement(
// 					'div',
// 					{
// 						className: 'title-card-container'
// 					},
// 					React.createElement(
// 						'div',
// 						{
// 							ref: function(t) {
// 								e.node = t;
// 							},
// 							id: M,
// 							style: this.getAnimationStyle(),
// 							className: classnames(x, this.props.className),
// 							onMouseEnter: this.handleMouseEnter,
// 							onMouseLeave: this.handleMouseLeave,
// 							onClick: this.props.onClick,
// 							onKeyDown: this.props.onKeyDown
// 						},
// 						React.createElement(
// 							'a',
// 							{
// 								videoId: b.id,
// 								imageKey: b.tallImageKey,
// 								href: b.id,
// 								onClick: this.onAnchorClick,
// 								tabIndex: i ? 0 : -1,
// 								role: i ? 'link' : null,
// 								'aria-label': b.title ? b.title : null,
// 								'aria-hidden': !i
// 							},
// 							React.createElement(
// 									BoxArtContainer,
// 									{
// 										className: 'boxart-size-16x9',
// 										title: b.title
// 									},
// 									React.createElement('img', {
// 										className: 'boxart-image boxart-image-in-padded-container',
// 										src: b.wideImage,
// 										alt: ''
// 									})
// 							),
// 							this.renderTallPanel()
// 						),
// 						this.props.isFocused &&
// 							React.createElement(TitleCardFocus, {
// 								model: g,
// 								playbackQueryParams: this.props.playbackQueryParams
// 							}),
// 						React.createElement(
// 							'div',
// 							{
// 								className: 'bob-container-tall-panel'
// 							},
// 							this.props.children
// 						)
// 					),
// 					k &&
// 						React.createElement(m, {
// 							runtime: b.episodeRuntime,
// 							bookmarkPosition: b.episodeBookmark,
// 							current: !0,
// 							showSummary: !1
// 						})
// 			  );
// 	}
// }




export default class TitleCard extends Component{
		e() {
            for (var n = [], i = 0; i < arguments.length; i++) {
                var t = arguments[i];
                if (t) {
                    var f = typeof t;
                    if ("string" === f || "number" === f)
                        n.push(t);
                    else if (Array.isArray(t))
                        n.push(e.apply(null, t));
                    else if ("object" === f)
                        for (var o in t)
                            Object.hasOwnProperty.call(t, o) && t[o] && n.push(o)
                }
            }
            return n.join(" ")
        }
        node = null
        getAnimationStyle() {
            var e = this.props
              , t = e.animateIn
              , i = e.videoModel
              , a = i.id % 20 * 2.5 / 100 + .3;
            return t ? l.getAnimationStyle({
                keyframes: {
                    delay: a + "s"
                }
            }) : {}
        }
        handleMouseEnter = (e) => {
            this.props.onMouseEnter && this.props.onMouseEnter(this.node, e)
        }
        handleMouseLeave = (e) => {
            this.props.onMouseLeave && this.props.onMouseLeave(this.node, e)
        }
        onAnchorClick = (e) => {
            var t = this.props.onClick;
            t && (e.preventDefault(),
            t())
        }
        render() {
            var e = this
              , t = this.props
              , i = t.isInvalid
              , a = t.itemTabbable
              , r = t.isDisliked
              , l = t.isFocused
              , y = t.isDimmed
              , E = t.isBobOpen
              , M = t.videoModel
              , v = t.watchURL
              , b = t.animateIn
              , N = t.model
              , g = t.showProgress
              , k = t.showMetaData
              , f = t.showRichTitle
              , x = t.rowNum
              , R = t.rankNum
              , w = this.e({
                "title-card": !0,
                "is-bob-open": E,
                "animate-in": b,
                "is-focused": l,
                "is-dimmed": y,
                "is-disliked": r
            })
              , A = "title-card-" + (void 0 !== x ? x : -1) + "-" + (void 0 !== R ? R : -1);
            return i ? React.createElement(d, {
                className: classnames(w, "boxart-size-16x9")
            }) : React.createElement("div", {
                className: "title-card-container"
            }, React.createElement("div", {
                ref: function(t) {
                    e.node = t
                },
                id: A,
                style: this.getAnimationStyle(),
                className: classnames(w, this.props.className),
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave
            }, React.createElement("a", {
                // videoId: M.id,
                // imageKey: M.imageKey,
                // maturityMisMatchEdgy: M.maturityMisMatchEdgy,
				// maturityMisMatchNonEdgy: M.maturityMisMatchNonEdgy,
                href: v,
                onClick: this.onAnchorClick,
                "aria-label": M.title ? M.title : null,
                tabIndex: a ? 0 : -1,
                "aria-hidden": !a,
                className: "slider-refocus"
            }, React.createElement(BoxArtContainer, {
                className: "boxart-size-16x9",
                title: M.title
            }, React.createElement("img", {
                className: "boxart-image boxart-image-in-padded-container",
                src: M.image,
                alt: ""
            }))), l && React.createElement(u, {
                model: N,
                playbackQueryParams: this.props.playbackQueryParams
            }), this.props.children), g && React.createElement(m, {
                runtime: M.episodeRuntime,
                bookmarkPosition: M.episodeBookmark,
                current: !0,
                showSummary: !1
            }), k && React.createElement("div", {
                className: "metadata"
            }, f ? React.createElement(h, {
                videoId: M.id,
                title: M.title,
                isRtl: this.context.isRtl,
                assets: M.showAsARow
            }) : React.createElement("div", {
                className: "episode-title"
            }, M.title), React.createElement(p, {
                onlyInMinutes: !0,
                runtime: M.episodeRuntime
            })))
        }
}