// C.r("0X", function(e, o, a) {
//     "use strict";
//     var t = e("9H")
//       , s = t(e("9D"))
//       , l = e("eP")
//       , i = e("9-")
//       , n = e("10").withLogging
//       , d = e("11")
//       , r = e("0_")
//       , c = e("0-")
//       , m = e("0T")
//       , h = e("12")
//       , w = e("6Q")
//       , b = e("0f")
//       , v = e("1F")
//       , u = e("1j")
//       , g = function(e) {
//         return l.createElement(r, {
//             boxShape: "16x9",
//             className: "bob-card-adult-video-merch",
//             videoModel: e.videoModel,
//             titleCardImage: e.titleCardImage,
//             onBobOpen: e.onBobOpen,
//             onBobClose: e.onBobClose,
//             isBobOpen: e.isBobOpen
//         }, l.createElement(n, {
//             videoModel: e.videoModel,
//             isMutedByDefault: e.isMutedByDefault,
//             isShowAsARow: e.isShowAsARow
//         }, function(o) {
//             var a = o.PlayerComponent
//               , t = o.playerState
//               , n = o.mouseHandlers
//               , r = o.showMetaData;
//             return l.createElement("div", null, t !== d.POST_PLAYBACK && l.createElement("img", {
//                 src: e.titleCardImageHighRes,
//                 className: "bob-title-art",
//                 style: {
//                     zIndex: 0
//                 }
//             }), t === d.POST_PLAYBACK && l.createElement(b, {
//                 model: e.model,
//                 auto: !0,
//                 size: "_665x375",
//                 watched: e.showRecentInterestingMoment,
//                 className: "bob-background",
//                 duration: 2e3,
//                 isStandalone: e.videoModel.isStandalone,
//                 bookmarkPosition: e.videoModel.bookmarkPosition
//             }), a, l.createElement("div", (0,
//             s.default)({
//                 className: i("bob-overlay", {
//                     "non-playable": !e.videoModel.isPlayable,
//                     "bob-overlay-hidden": e.enableMetaDataHiding && !r
//                 })
//             }, n), e.videoModel.isPlayable && l.createElement("div", {
//                 className: "bob-play-hitzone",
//                 onClick: e.navigateToPlayer
//             }), l.createElement(u, {
//                 resolver: w.getTitleRoute,
//                 params: {
//                     id: e.videoModel.id
//                 },
//                 className: "bob-jaw-hitzone",
//                 onClick: e.onClickJawHitZone
//             }), l.createElement("div", {
//                 className: "bob-overview-wrapper"
//             }, l.createElement(c, {
//                 videoModel: e.videoModel,
//                 model: e.model,
//                 showMetaData: e.showMetaData,
//                 showEvidence: e.showEvidence,
//                 showSynopsis: e.isShowAsARow && !e.showProgressBar,
//                 showPlayButton: e.showPlayButton,
//                 showProgressBar: e.showProgressBar,
//                 showRichTitle: e.showRichTitle,
//                 showProgressSummary: e.showProgressSummary,
//                 showNewEpisodeBadge: e.showNewEpisodeBadge,
//                 onClickJawHitZone: e.onClickJawHitZone
//             })), l.createElement("div", {
//                 className: "bob-actions-wrapper"
//             }, l.createElement(m, {
//                 videoModel: e.videoModel,
//                 model: e.model,
//                 svgButton: !0,
//                 onMylistChange: e.onMylistChange,
//                 showAddToMyList: e.showAddToMyList,
//                 showThumbRatingIcons: e.showThumbRatingIcons,
//                 showAudioToggle: t === d.IS_PLAYING,
//                 isMutedByDefault: e.isMutedByDefault
//             })), l.createElement("div", {
//                 className: "bob-chevron-wrapper"
//             }, l.createElement(h, null))), " ")
//         }))
//     };
//     o.exports = v(g)
// });

import React,{Component} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BobCardElement from './BobCardElement'

class BobCardEle extends Component{
    render(){
        var e = this.props.isBobOpen;
        return React.createElement(TransitionGroup, null, e && React.createElement(BobCardElement, {
            boxShape: this.props.boxShape,
            className: this.props.className,
            videoModel: this.props.videoModel,
            titleCardImage: this.props.titleCardImage,
            getParentSliderItem: this.props.getParentSliderItem,
            onBobOpen: this.props.onBobOpen,
            onBobClose: this.props.onBobClose
        }, this.props.children))
    }
}

export default function BobCard(e) {
        return React.createElement(BobCardEle, {
            boxShape: "16x9",
            className: "bob-card-adult-video-merch",
            videoModel: e.videoModel,
            titleCardImage: e.titleCardImage,
            onBobOpen: e.onBobOpen,
            onBobClose: e.onBobClose,
            isBobOpen: e.isBobOpen
        }, 
        React.createElement("div", {
            videoModel: e.videoModel,
            isMutedByDefault: e.isMutedByDefault,
            isShowAsARow: e.isShowAsARow
        }, function(o) {
            var a = o.PlayerComponent
              , t = o.playerState
              , n = o.mouseHandlers
              , r = o.showMetaData;
            return React.createElement("div", null, t !== 'POST_PLAYBACK' && React.createElement("img", {
                src: e.titleCardImageHighRes,
                className: "bob-title-art",
                style: {
                    zIndex: 0
                }
            }), t === "POST_PLAYBACK" && React.createElement(b, {
                model: e.model,
                auto: !0,
                size: "_665x375",
                watched: e.showRecentInterestingMoment,
                className: "bob-background",
                duration: 2e3,
                isStandalone: e.videoModel.isStandalone,
                bookmarkPosition: e.videoModel.bookmarkPosition
            }), a, React.createElement("div", (0,
            s.default)({
                className: i("bob-overlay", {
                    "non-playable": !e.videoModel.isPlayable,
                    "bob-overlay-hidden": e.enableMetaDataHiding && !r
                })
            }, n), e.videoModel.isPlayable && l.createElement("div", {
                className: "bob-play-hitzone",
                onClick: e.navigateToPlayer
            }), React.createElement(u, {
                resolver: w.getTitleRoute,
                params: {
                    id: e.videoModel.id
                },
                className: "bob-jaw-hitzone",
                onClick: e.onClickJawHitZone
            }), React.createElement("div", {
                className: "bob-overview-wrapper"
            }, React.createElement(c, {
                videoModel: e.videoModel,
                model: e.model,
                showMetaData: e.showMetaData,
                showEvidence: e.showEvidence,
                showSynopsis: e.isShowAsARow && !e.showProgressBar,
                showPlayButton: e.showPlayButton,
                showProgressBar: e.showProgressBar,
                showRichTitle: e.showRichTitle,
                showProgressSummary: e.showProgressSummary,
                showNewEpisodeBadge: e.showNewEpisodeBadge,
                onClickJawHitZone: e.onClickJawHitZone
            })), React.createElement("div", {
                className: "bob-actions-wrapper"
            }, React.createElement(TransitionGroup, {
                videoModel: e.videoModel,
                model: e.model,
                svgButton: !0,
                onMylistChange: e.onMylistChange,
                showAddToMyList: e.showAddToMyList,
                showThumbRatingIcons: e.showThumbRatingIcons,
                showAudioToggle: t === d.IS_PLAYING,
                isMutedByDefault: e.isMutedByDefault
            })), React.createElement("div", {
                className: "bob-chevron-wrapper"
            }, React.createElement(h, null))), " ")
        }))
    };