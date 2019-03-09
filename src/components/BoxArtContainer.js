// C.r("0b", function(e, a, t) {
//     "use strict";
//     var c = e("eP")
//       , r = e("9-")
//       , n = function(e) {
//         var a = e.className
//           , t = e.title
//           , n = e.children;
//         return c.createElement("div", {
//             className: r(a, "boxart-container")
//         }, n, t && c.createElement("div", {
//             className: "fallback-text-container",
//             "aria-hidden": !0
//         }, c.createElement("div", {
//             className: "fallback-text"
//         }, t)))
//     };
//     a.exports = n
// });

import React from 'react'
import classnames from 'classnames'
export default function BoxArtContainer(props){
    var a = props.className
          , t = props.title
          , n = props.children;
    return React.createElement("div", {
            className: classnames(a, "boxart-container")
        }, n, t && React.createElement("div", {
            className: "fallback-text-container",
            "aria-hidden": !0
        }, React.createElement("div", {
            className: "fallback-text"
        }, t)))
}