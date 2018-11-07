// C.r("6O", function (t, e, o) {
//   "use strict";
//   var a = t("9i"),
//     r = function (t) {
//       return t && t.__esModule ? t : {
//         default: t
//       }
//     }(a),
//     i = t("dP"),
//     n = t("fE"),
//     s = t("aP"),
//     l = t("j4"),
//     u = t("3Z"),
//     c = t("4u"),
//     f = t("0f"),
//     p = t("3R"),
//     d = t("o-"),
//     h = l.get("netflix.ui.akira.prefetch.strategies.home"),
//     g = l.get("netflix.ui.akira.prefetch.page"),
//     m = c.getPaths,
//     R = function (t, e, o) {
//       e || (e = g);
//       var a = e.numVideos,
//         r = a,
//         i = void 0;
//       return i = [
//         ["summary"]
//       ].concat(u.getPaths(t, e)).concat(f.getPaths(t, e)).concat(m(t, e).map(function (t) {
//         return ["mylist", {
//           to: r
//         }].concat(t)
//       })), i = i.concat(p.getPaths(t, e))
//     }, _ = function (t) {
//       var e = d.kidsProfileWithParity(t, !1),
//         o = e ? l.get("netflix.ui.akira.prefetch.kids.page") : l.get("netflix.ui.akira.prefetch.page");
//       return R(t, o)
//     }, E = s({
//       displayName: "HomeContent",
      
//       statics: {
//         NUM_ROWS_TO_RENDER: 15,
//         NUM_TITLES_TO_RENDER: 20,
//         getPaths: R,
//         prefetchStrategies: h,
//         defaultStrategy: g,
//         getInitialPaths: _
//       },
//     });
//   e.exports = E
// });

import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Lolomo from './Lolomo';

export default class HomeContent extends Component{
  constructor(props){
    super(props)
    this.statics = {
      NUM_ROWS_TO_RENDER: 15,
      NUM_TITLES_TO_RENDER: 20,
      getPaths: R,
      prefetchStrategies: h,
      defaultStrategy: g,
      getInitialPaths: _
    }
  }
  getRootModel() {
    var t = this.props.suppressBillboard ? "lolomonobillboard" : "lolomo";
    return this.props.model.pathEvaluator.bind([t])
  }
  render() {
    var t = this.getRootModel(),
      e = this.statics.NUM_ROWS_TO_RENDER;
    return React.createElement(Lolomo, Object.assign({}, this.props, {
        ref: "lolomo",
        model: t,
        paths: _(this.context.models),
        numRows: e
      }))
  }
}

// HomeContent.contextTypes = {
//   models: PropTypes.object.isRequired
// }