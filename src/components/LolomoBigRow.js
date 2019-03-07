// C.r("3R", function (t, e, o) {
//   "use strict";
//   var i = t("dP"),
//     a = t("fE"),
//     s = t("aP"),
//     l = t("dm"),
//     n = t("9p"),
//     r = t("7k"),
//     d = t("j4"),
//     p = t("0e"),
//     c = t("0u"),
//     g = t("7H"),
//     u = t("7L"),
//     b = t("3Y"),
//     m = t("ts"),
//     h = t("7u"),
//     y = t("dl"),
//     I = "discovery/akira/Billboard",
//     w = {
//       info: "billboard.actions.info",
//       play: "billboard.actions.play",
//       playVolume: "billboard.actions.playVolume",
//       playCollection: "billboard.actions.playCollection",
//       playSpecial: "billboard.actions.playSpecial",
//       playSet: "billboard.actions.playSet",
//       playBook: "billboard.actions.playBook",
//       playPart: "billboard.actions.playPart",
//       playSeries: "billboard.actions.playSeries",
//       playChapter: "billboard.actions.playChapter",
//       playSeason: "billboard.actions.playSeason",
//       playEpisode: "billboard.actions.playEpisode",
//       playNextEpisode: "billboard.actions.playNextEpisode",
//       rewatchShow: "billboard.actions.rewatchShow",
//       continueWatching: "billboard.actions.continueWatching",
//       playTrailer: "billboard.actions.playTrailer",
//       replay: "billboard.actions.replay"
//     }, v = n("rowContent"),
//     f = !1,
//     S = {
//       billboardActionsInfo: y(I, "billboard.actions.info")
//     }, R = s({
//       displayName: "LolomoBigRow",
//       _hasLoggedError: !1,
//       _hasLoggedImpression: !1,
//       contextTypes: {
//         getI18nString: i.func.isRequired,
//         history: i.object.isRequired,
//         jsongDocument: i.object,
//         models: i.object.isRequired,
//         playerApp: i.object.isRequired,
//         routeHandler: i.object.isRequired,
//         formatString: i.func.isRequired
//       },
//       _motionId: null,
//       _videoId: null,
//       disposeTimeout: null,
//       statics: {
//         getPaths: function (t, e, o) {
//           return [["bigRow", "billboards", 0, r.getExtensionForTransparentImage(t), ["data", "playbackVideo"], "horizontalBackground", "playbackData", "bigRow"], ["bigRow", 0, "reference", "queue"]]
//         }
//       },
//       childContextTypes: {
//         rowNum: i.number,
//         rankNum: i.number,
//         trackId: i.number,
//         listContext: i.string,
//         supplementalVideoId: i.number
//       },
      
      
//     });
//   e.exports = R
// });

import React,{ Component } from 'react';

export default class LolomoBigRow extends Component{
  getChildContext() {
    var t = this.getBillboardData();
    return {
      rowNum: this.props.rowNum,
      rankNum: 0,
      trackId: this.getTrackId(),
      listContext: this.props.listContext,
      supplementalVideoId: l.get(t, "videoAssets.horizontalBackground.motionId")
    }
  }
  getInitialState() {
    var t = f;
    return {
      videoHasPlayed: t,
      videoCompleted: t,
      useAvailablePhase: c.getAvailabilityTimeRemaining(this.getBillboardData()) <= 0
    }
  }
  componentDidMount() {
    this.props.bigRowIsOpen && f && this.closeJaw();
    var t = this.getBillboardData(),
      e = c.getAvailabilityTimeRemaining(t);
    if (e > 0) {
      var o = this;
      this.disposeTimeout = h(function () {
        o.setState({
          useAvailablePhase: !0
        })
      }, e, 3e4)
    }
  }
  componentWillUnmount() {
    this.disposeTimeout && this.disposeTimeout()
  }
  shouldComponentUpdate = () => m.partialPropsAndAllState(["bigRowIsOpen"])
  getTrackId() {
    var t = this.props.model.getValueSync(["trackIds"]),
      e = void 0;
    return t && (e = t.trackId), e
  }
  logImpression() {
    if (!this._hasLoggedImpression) {
      var t = this.props.model,
        e = r.getExtensionForTransparentImage(this.context.models),
        o = t && t.bind(["billboards", 0, e, "data"]),
        i = o && o.getValueSync() || {}, a = t && t.getValueSync() || {}, s = i && i.impressionToken,
        l = this.context.jsongDocument;
      d.get("netflix.ui.akira.originals.bigRow.disableImpressionToken") ? this.props.model.get(["logRowImpressionLegacy"]).subscribe(function (t) { }) : l.call(["lists", [a[1]],
        ["logRowImpression"]
      ], [s]).subscribe(), this._hasLoggedImpression = !0
    }
  }
  setCompletedState(t) {
    this.setState({
      videoCompleted: !0
    }, t), f = !0
  }
  setPlayState() {
    this.setState({
      videoHasPlayed: !0
    })
  }
  toggleJaw(t) {
    this.props.toggleBigRowState(t)
  }
  openJaw() {
    this.toggleJaw(!0)
  }
  closeJaw() {
    this.toggleJaw(!1)
  }
  getBillboardData() {
    var t = r.getExtensionForTransparentImage(this.context.models),
      e = ["billboards", 0, t, "data"];
    return this.props.model.getValueSync(e) || {}
  }
  render() {
    var t = this.props.model,
      e = n("lolomoRow", "lolomoRow_title_card", "lolomoBigRow", {
        bigRowOpen: this.props.bigRowIsOpen
      }),
      o = this.props.title ? this.props.title : t.getValueSync(["displayName"]),
      i = this.getBillboardData(),
      s = i && i.assets || {}, r = s && s.background || {}, d = r && "light" === r.tone,
      c = l.get(i, "videoAssets.horizontalBackground.motionId"),
      m = i.id;
    this._motionId = this._motionId || c, this._videoId = this._motionId || m;
    var h = l.get(i, "assets.logo.url"),
      y = l.get(i, "assets.background.url"),
      f = i.title ? i.title : null,
      R = "newsFeed" === i.billboardType,
      C = i.hashtag && R ? i.hashtag : null,
      k = R,
      x = R,
      T = n("bigRow", {
        newsFeed: R,
        "light-tone": d
      }),
      P = t.bind([0, "reference"]),
      B = i.actions,
      E = B && B[0] || {}, N = E && E.videoId,
      _ = this.context.getI18nString(I, w[E.name]),
      A = this.context.formatString(S.billboardActionsInfo),
      V = this.state.videoCompleted || !this._motionId,
      D = this.state.videoHasPlayed || !this._motionId;
    return a.createElement("div", {
      key: this.props.listContext + this.props.rowNum,
      className: e,
      "data-list-context": this.props.listContext
    }, a.createElement(b, {
      id: m,
      title: o
    }), a.createElement("div", {
      className: T,
      id: "row-" + this.props.rowNum
    }, a.createElement(g, null, a.createElement("div", {
      className: v
    }, a.createElement(u, {
      videoId: m
    }, a.createElement(p, {
      ref: "bigRow",
      motionId: c,
      isMutedByDefault: this.state.isMutedByDefault,
      videoModel: P,
      videoId: m,
      logoUrl: h,
      staticImageUrl: y,
      trailerId: N,
      primaryCtaLabel: _,
      moreInfoCtaLabel: A,
      videoTitle: f,
      isNewsFeedRow: R,
      hashtag: C,
      showLogoDuringVideo: k,
      usingHorizontalLogo: x,
      logImpression: this.logImpression,
      videoHasPlayed: D,
      videoCompleted: V,
      assets: s,
      setCompletedState: this.setCompletedState,
      setPlayState: this.setPlayState,
      inViewportSelector: ".VideoContainer",
      useAvailablePhase: this.state.useAvailablePhase,
      openJaw: this.openJaw,
      closeJaw: this.closeJaw,
      data: i
    }))))))
  }
}