C.r("7V", function (e, t, n) {
  "use strict";

  function o(e) {
    var t = s({
      displayName: "logPresentationManually(" + (e.displayName || "") + ")",
      contextTypes: {
        logger: a.object.isRequired,
        models: a.object.isRequired,
        getModelData: a.func.isRequired
      },
      _presentationId: void 0,
      _focusId: void 0,
      statics: {
        Component: e
      },

    });
    return d(t, e, {
      Component: !0
    }), t
  }
  var i = e("9i"),
    g = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    r = e("fE"),
    s = e("aP"),
    a = e("dP"),
    l = e("dm"),
    u = e("jg"),
    d = e("dh"),
    c = e("7X");
  t.exports = o
});

import React , { Component } from 'react';

export default class LogPresentationManually extends Component{
  constructor(props){
    super(props)
  }
  isLoggingEnabled() {
    return this.context.getModelData("truths").isCl2LoggingEnabledForDiscoveryPlayback
  }
  getLogger() {
    return this.context.logger
  }
  logPresentationStart(e) {
    var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!this.isLoggingEnabled()) return l.noop;
    var o = this.getLogger().startSession("Presentation", {
      view: e,
      trackingInfo: c(n)
    });
    return function (e) {
      t.getLogger().endSession(o, e)
    }
  }
  logPresented(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.isLoggingEnabled() && this.getLogger().logEvent(u.Presented, {
      view: e,
      trackingInfo: c(t)
    })
  }
  logFocus(e) {
    var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!this.isLoggingEnabled()) return l.noop;
    var o = this.getLogger().startSession("Focus", {
      view: e,
      trackingInfo: c(n)
    });
    return function (e) {
      t.getLogger().endSession(o, e)
    }
  }
  logNavigationLevel(e) {
    var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!this.isLoggingEnabled()) return l.noop;
    var o = this.getLogger().startSession("NavigationLevel", {
      view: e,
      trackingInfo: c(n)
    });
    return function (e) {
      t.getLogger().endSession(o, e)
    }
  }
  logCommand(e) {
    var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!this.isLoggingEnabled) return l.noop;
    var o = this.getLogger().startSession(e, n);
    return function (e) {
      t.getLogger().endSession(o, e)
    }
  }
  render() {
    return React.createElement(e, (0, g.
      default)({}, this.props, {
        logPresentationStart: this.logPresentationStart,
        logPresented: this.logPresented,
        logFocus: this.logFocus,
        logNavigationLevel: this.logNavigationLevel,
        logCommand: this.logCommand
      }))
  }
}