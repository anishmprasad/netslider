/* eslint-disable */

// C.r("0U", function(e, t, o) {
//     "use strict";
//     var n = e("eQ")
//       , i = e("eG")
//       , a = e("2p")
//       , s = e("2N")
//       , r = e("2H")
//       , d = function(e) {
//         var t = e.videoModel
//           , o = e.model
//           , d = e.showAddToMyList
//           , l = e.showThumbRatingIcons
//           , u = e.showAudioToggle
//           , m = e.onMylistChange
//           , c = e.svgButton
//           , v = e.isMutedByDefault;
//         return n.createElement(i, {
//             className: "ActionButtons",
//             transitionName: "ButtonTransition-fade",
//             transitionEnterTimeout: 200,
//             transitionLeaveTimeout: 200
//         }, u && n.createElement(r, {
//             isMutedByDefault: v
//         }), l && n.createElement(s, {
//             model: o,
//             videoId: t.id,
//             vertical: !0
//         }), d && n.createElement(a, {
//             videoModel: t,
//             model: o,
//             onStateChange: m,
//             showToolTip: !0,
//             svgButton: c
//         }))
//     };
//     t.exports = d
// });
import React from 'react';
export default function ActionButtons(props){
    var t = props.videoModel
          , o = props.model
          , d = props.showAddToMyList
          , l = props.showThumbRatingIcons
          , u = props.showAudioToggle
          , m = props.onMylistChange
          , c = props.svgButton
          , v = props.isMutedByDefault;
    return React.createElement(i, {
            className: "ActionButtons",
            transitionName: "ButtonTransition-fade",
            transitionEnterTimeout: 200,
            transitionLeaveTimeout: 200
        }, u && React.createElement(r, {
            isMutedByDefault: v
        }), l && React.createElement(s, {
            model: o,
            videoId: t.id,
            vertical: !0
        }), d && React.createElement(a, {
            videoModel: t,
            model: o,
            onStateChange: m,
            showToolTip: !0,
            svgButton: c
        }))
}