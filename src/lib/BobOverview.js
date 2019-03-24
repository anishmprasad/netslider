/* eslint-disable */

// C.r("10", function(e, a, o) {
//     "use strict";
//     var s = e("2m")
//       , t = e("1x")
//       , r = e("1q")
//       , i = e("1d")
//       , n = e("eQ")
//       , m = e("2t")
//       , l = e("2u")
//       , d = function() {}
//       , v = function(e) {
//         var a = e.model
//           , o = e.onClickJawHitZone
//           , v = void 0 === o ? d : o
//           , c = e.playbackQueryParams
//           , b = e.showMetaData
//           , p = e.showNewEpisodeBadge
//           , w = e.showPlayButton
//           , u = e.showProgressBar
//           , E = e.showProgressSummary
//           , y = e.showSynopsis
//           , h = e.showEvidence
//           , k = void 0 === h || h
//           , N = e.videoModel;
//         return n.createElement("div", {
//             className: "bob-overview"
//         }, w && n.createElement(r, {
//             model: e.model,
//             className: "bob-play-button",
//             tabIndex: 0,
//             responsiveButton: !0,
//             playbackQueryParams: c
//         }), n.createElement("div", {
//             className: "bob-title"
//         }, N.title), n.createElement(m, {
//             variants: ["bob-overview", "no-wrap"],
//             videoModel: N,
//             showNewEpisodeBadge: p
//         }), b && n.createElement("div", {
//             className: "bob-metadata-wrapper"
//         }, n.createElement(l, {
//             variants: ["bob-overview"],
//             model: a,
//             videoModel: N,
//             suppressYear: !0,
//             suppressThumbs: !0,
//             suppressRatings: y
//         })), k && n.createElement(t, {
//             evidenceData: N.evidenceData
//         }), y && n.createElement("div", {
//             className: "bob-synopsis"
//         }, N.synopsis), u && n.createElement(i, {
//             variants: ["bob-overview"],
//             runtime: N.episodeRuntime,
//             bookmarkPosition: N.episodeBookmark,
//             current: !0,
//             showSummary: E
//         }), n.createElement("div", {
//             className: "bob-content-warning-wrapper"
//         }, n.createElement(s, {
//             variants: ["bob-overview"],
//             onClickJawHitZone: v,
//             videoModel: N
//         })))
//     };
//     a.exports = v
// });

import React from 'react';
export default function BobOverview(props){
    console.log(props)
     var a = props.model
          , o = props.onClickJawHitZone
          , v = undefined === o ? d : o
          , c = props.playbackQueryParams
          , b = props.showMetaData
          , p = props.showNewEpisodeBadge
          , w = props.showPlayButton
          , u = props.showProgressBar
          , E = props.showProgressSummary
          , y = props.showSynopsis
          , h = props.showEvidence
          , k = undefined === h || h;
    return(
        React.createElement("div", {
            className: "bob-overview"
        }, props.showPlayButton && false && React.createElement(r, {
            model: e.model,
            className: "bob-play-button",
            tabIndex: 0,
            responsiveButton: !0,
            playbackQueryParams: c
        }), React.createElement("div", {
            className: "bob-title"
        }, props.videoModel.title), 
        // React.createElement(m, {
        //     variants: ["bob-overview", "no-wrap"],
        //     videoModel: N,
        //     showNewEpisodeBadge: p
        // }), 
        props.showMetaData && false && React.createElement("div", {
            className: "bob-metadata-wrapper"
        }, React.createElement(l, {
            variants: ["bob-overview"],
            model: a,
            videoModel: N,
            suppressYear: !0,
            suppressThumbs: !0,
            suppressRatings: y
        })), props.showEvidence && false && React.createElement(t, {
            evidenceData: props.videoModel.evidenceData
        }), props.showSynopsis && React.createElement("div", {
            className: "bob-synopsis"
        }, props.videoModel.synopsis), props.showProgressBar && false && React.createElement(i, {
            variants: ["bob-overview"],
            runtime: props.videoModel.episodeRuntime,
            bookmarkPosition: props.videoModel.episodeBookmark,
            current: !0,
            showSummary: E
        }), false && React.createElement("div", {
            className: "bob-content-warning-wrapper"
        }, React.createElement(s, {
            variants: ["bob-overview"],
            onClickJawHitZone: v,
            videoModel: N
        })))
    )
}