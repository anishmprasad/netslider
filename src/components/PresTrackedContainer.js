// C.r("7H", function (e, r, a) {
//   "use strict";
//   var s = (e("dP"), e("fE")),
//     t = e("aP"),
//     n = e("9p"),
//     c = t({
//       displayName: "PresTrackedContainer",
//       render: function () {
//         return s.createElement("div", {
//           className: n("ptrack-container", this.props.className)
//         }, this.props.children)
//       }
//     });
//   r.exports = c
// });

import React , { Component } from 'react';

export default class PresTrackedContainer extends Component{
  render(){
    return React.createElement("div", {
      className: n("ptrack-container", this.props.className)
    }, this.props.children)
  }
}