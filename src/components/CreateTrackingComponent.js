// C.r("7N", function (t, e, n) {
//   "use strict";

//   function i(t) {
//     var e = t.appView,
//       n = t.usePresentedEvent,
//       i = t.propTypes,
//       f = void 0 === i ? {} : i,
//       b = t.propsTransformer,
//       k = void 0 === b ? u : b,
//       l = Object.assign({
//         children: s.node,
//         trackingInfo: s.object,
//         getTrackingInfoFromContext: s.func.isRequired
//       }, f);
//     return g(a({
//       displayName: "createTrackingComponent(" + e + ")",

//     }))
//   }

  import React, { Component } from 'react';
  import PropTypes from 'prop-types';

  export default class CreateTrackingComponent extends Component {
    constructor(props) {
      super(props)
      __uuid__: c()
    }
    componentDidMount() {
      var t = o.findDOMNode(this);
      this.writeDataAttributesToNode(t), p.requestScan()
    }
    componentDidUpdate() {
      this.writeDataAttributesToNode(o.findDOMNode(this))
    }
    componentWillUnmount() {
      n || p.requestScan()
    }
    getDataAttribute(t, e, n) {
      return m.isUndefined(t) ? m.isUndefined(this.context[e]) ? n : this.context[e] : t
    }
    getTrackingInfo() {
      var t = {
        __uuid__: this.state.uuid,
        appView: e,
        usePresentedEvent: n
      }, i = k(this.props);
      if (i.trackingInfo) return Object.assign({}, i.trackingInfo, t);
      var r = Object.keys(m.omit(l, ["className", "children"]));
      return this.props.getTrackingInfoFromContext(t, r)
    }
    writeDataAttributesToNode(t) {
      t instanceof HTMLElement && (t.setAttribute("data-ui-tracking-context", encodeURI(JSON.stringify(this.getTrackingInfo()))), t.setAttribute("data-tracking-uuid", this.state.__uuid__))
    }
    render() {
      return r.createElement("div", {
        className: d(this.props.className, "ptrack-content")
      }, this.props.children)
    }
  }

  CreateTrackingComponent.propTypes = {
    currentPage: PropTypes.string,
    rowNum: PropTypes.number,
    rankNum: PropTypes.number,
    requestId: PropTypes.string,
    trackId: PropTypes.number,
    impressionToken: PropTypes.string,
    videoId: PropTypes.number,
    imageKey: PropTypes.string,
    listId: PropTypes.string,
    supplementalVideoId: PropTypes.number,
    lolomoId: PropTypes.string,
    parentContext: PropTypes.shape({
      rowNum: PropTypes.number,
      rankNum: PropTypes.number,
      requestId: PropTypes.string,
      trackId: PropTypes.number
    }),
    statics: {
      trackedFields: PropTypes.func
    },
    trackingInfo: PropTypes.object,
    getTrackingInfoFromContext: PropTypes.func.isRequired
  }