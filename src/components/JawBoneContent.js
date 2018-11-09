// C.r("3z", function (e, t, i) {
//   "use strict";

//   function o(e, t, i) {
//     t || (t = {
//       all: !1
//     }), i || (i = {
//       isShow: !0
//     });
//     var o = void 0 === i.isShow || i.isShow,
//       a = [
//         [
//           ["summary", "title", "maturity", "bookmarkPosition", "runtime", "interactiveBookmark", "requestId", "availability", "watched", "hasSensitiveMetadata", "dpSupplementalMessage"]
//         ]
//       ].concat([
//         ["trailers", ["summary"]]
//       ]).concat([Q(e)]).concat(m.getPaths(e, null, {
//         isShow: o
//       })).concat(b.getPaths(e, null, {
//         isShow: o
//       }));
//     return u.get(e, "truths.data.hasVideoMerchInJaw", !1) && (a = a.concat([
//       ["promoVideo"]
//     ])), o && (a = a.concat([
//       ["episodeCount"]
//     ])), i && i.isStandaloneJawbone && (a = a.concat([
//       ["trackIds"]
//     ])), t.all && (a = a.concat(M.getPaths(e, t, i)).concat(f.getPaths(e, t, i)).concat(S.getPaths(e, t, i)).concat(v.getPaths(e, t, {
//       seasonIndex: "current"
//     }))), a
//   }
//   var a = e("9m"),
//     s = function (e) {
//       return e && e.__esModule ? e : {
//         default: e
//       }
//     }(a),
//     n = e("dP"),
//     r = e("fE"),
//     l = e("aP"),
//     d = e("eZ"),
//     h = e("j4"),
//     c = e("9p"),
//     u = e("dm"),
//     p = e("te"),
//     m = e("3H"),
//     g = e("3G"),
//     v = e("2X"),
//     y = e("3p"),
//     M = e("3E"),
//     S = e("3L"),
//     f = e("3q"),
//     w = e("3I"),
//     P = e("3C"),
//     b = e("3n"),
//     I = e("1f"),
//     E = e("7k"),
//     k = e("6f"),
//     x = e("6B"),
//     T = e("6u"),
//     C = e("7l"),
//     O = e("ty"),
//     V = e("p6"),
//     N = e("p0"),
//     D = e("jw"),
//     j = e("6r"),
//     B = e("pm"),
//     J = e("7H"),
//     L = e("8P"),
//     R = e("3o"),
//     q = e("2B"),
//     W = e("oU"),
//     H = e("l4").playContextRecord,
//     U = "discovery/akira/JawBone",
//     _ = ["Episodes", "Trailers", "MoreLikeThis"],
//     A = ["Overview", "Episodes", "Trailers", "MoreLikeThis", "ShowDetails", "Warning"],
//     F = h.get("netflix.ui.akira.prefetch.strategies.jawBone"),
//     K = function () { }, Q = function (e) {
//       return ["bb2OGLogo", "_550x124", E.getExtensionForTransparentImage(e)]
//     }, X = l({
//       displayName: "JawBoneContent",
//       childContextTypes: {
//         parentContext: n.object,
//         rowNum: n.number,
//         rankNum: n.number,
//         requestId: n.string,
//         trackId: n.number
//       },
//       contextTypes: Object.assign({
//         getModelData: n.func.isRequired,
//         columnsInRow: n.number,
//         getI18nString: n.func.isRequired,
//         closeJawbone: n.func.isRequired,
//         jsongDocument: n.object,
//         models: n.object,
//         renderTracker: n.object,
//         routeHandler: n.object.isRequired
//       }, k),
      
      
      
      
//     });
//   t.exports = X
// });

import React,{ Component } from 'react';

export default class JawBoneContent extends Component{
  constructor(props){
    super(props)
    this.videoModel = {
      id: 0,
        summary: { }
    }
    // ID: "jawBone-container",
    //   statics: {
    //   getPaths: o,
    //     prefetchStrategies: F
    // }
  }
  getChildContext() {
    var e = this.context,
      t = e.rowNum,
      i = e.rankNum,
      o = e.requestId,
      a = e.trackId,
      s = e.jawBoneTrackId,
      n = this.props.isStandaloneJawbone,
      r = this.getRequestId(),
      l = s || this.getJawBoneTrackId();
    return {
      rowNum: 0,
      rankNum: 0,
      parentContext: {
        rowNum: n && void 0 === t ? -1 : t,
        rankNum: n && void 0 === i ? -1 : i,
        requestId: o,
        trackId: a
      },
      trackId: l || a,
      requestId: r || o
    }
  }
componentWillMount() {
  this.suppressOriginalsJaw = h.get("netflix.ui.akira.originals.jawbone.disable") || !1, this.videoModel = u.assign({}, this.props.videoModel, this.getVideoModel(this.state))
}
componentWillUpdate(e, t) {
  this.videoModel = u.assign({}, this.props.videoModel, this.getVideoModel(t))
}
getVideoModel(e) {
  var t = this.props.model,
    i = t.getValueSync(["summary"]),
    o = t.getValueSync(["availability"]) || {}, a = {
      id: i && i.id,
      summary: i,
      supplementalMessage: t.getValueSync(["dpSupplementalMessage"]),
      isOriginal: i && i.isOriginal,
      isShow: t.getValueSync(["episodeCount"]),
      playState: x.getWatchedState(this.props.model),
      isPlayable: o.isPlayable,
      isPrePromo: !o.isPlayable,
      hasTrailers: !1,
      logoUrl: ""
    };
  if (a.isOriginal && !this.suppressOriginalsJaw) {
    var s = t.getValueSync(["trailers", ["summary"]]),
      n = t.getValueSync(Q(this.context.models)) || {
        url: ""
      }, r = s && !!s.length;
    a.logoUrl = n.url, a.hasTrailers = r
  }
  if (this.props.hasVideoMerchInJaw && !a.videoMerchId) {
    var l = t.getValueSync(["promoVideo"]) || {};
    a.videoMerchId = l.id, a.videoMerchAspectRatio = "16x9", a.videoMerchComputeId = l.computeId, a.videoMerchStartTime = l.start
  }
  return a
}
  animateInfo(e, t) {
    if (!this.props.isFirstJaw)
      for (var i = e.getElementsByClassName("has-jawbone-nav-transition"), o = 0; o < i.length; o++) t.target = i[o], V.animate(t)
  }

  getDefaultProps() {
    return {
      disableClose: !1
    }
  }
  getRequestId() {
    return this.props.model.getValueSync(["requestId"])
  }
  getJawBoneTrackId() {
    return this.props.model.getValueSync(["trackIds"]) && this.props.model.getValueSync(["trackIds"]).trackId_jaw
  }
  getHasEpisodes() {
    var e = this.props.model.getValueSync(["episodeCount"]);
    return void 0 !== e && e > 0
  }
  getDefaultPane(e) {
    var t = this.context.routeHandler.query,
      i = e.getValueSync(["summary"]),
      o = Boolean(i && i.contentWarning),
      a = ["Overview", "Episodes", "Trailers"],
      s = u.get(this.context.models, "truths.data.kidsParityRetest", !1),
      n = this.context.isKidsPage && s && this.getHasEpisodes() ? "Episodes" : "Overview",
      r = void 0;
    return !D && u.get(window, "location.hash", "").indexOf("showEpisodes") >= 0 ? "Episodes" : A.indexOf(t.jbt) >= 0 ? o || "Warning" !== t.jbt ? t.jbt : "Overview" : (-1 !== a.indexOf(t.jbp) && (r = t.jbp, delete t.jbp), r || n)
  }
  getInitialState() {
    return {
      data: void 0,
      isShow: !0,
      visiblePane: this.getDefaultPane(this.props.model),
      hasClickedMenu: !1,
      hasPaneData: [],
      videoMerchPlaying: !1
    }
  }
  handleNavHover() {
    var e = this,
      t = this.state,
      i = t.hasPaneData,
      a = t.isShow,
      n = this.props,
      r = n.model,
      l = n.videoId,
      d = this;
    if (l && !i[l]) {
      var c = h.get("netflix.ui.akira.prefetch.jawBoneNavHover");
      T.queue(function () {
        e.setState({
          isLoading: !0
        }), r.get.apply(r, (0, s.
          default)(o(d.context.models, c, {
            isShow: a
          }))).subscribe(K, function () {
            return e.setState({
              isLoading: !1
            })
          }, function () {
            return e.setState({
              isLoading: !1
            })
          })
      }), i[l] = !0, this.setState({
        hasPaneData: i
      })
    }
  }
  getOveriewPane() {
    return N.isRichOriginalsRow(this.context.isTallRow, this.context.models.truths) && !this.props.hasVideoMerchInJaw ? g : m
  }
  getVisiblePane(e, t) {
    var i = this.props,
      o = i.model,
      a = i.hideTitleActions,
      s = i.videoId,
      n = void 0;
    switch (e) {
      case "Overview":
        var l = this.getOveriewPane(),
          d = {
            model: o,
            videoModel: this.videoModel,
            isPrePromo: this.videoModel.isPrePromo,
            isTitleActionsSupported: !a
          };
        n = r.createElement("div", null, r.createElement(l, d));
        break;
      case "Episodes":
        n = r.createElement(v, {
          model: o,
          pathPrefix: o.getPath(),
          videoId: s,
          trackId: this.context.jawBoneEpisodeTrackId,
          onSliderMove: this._handleSliderMove,
          useSlider: !0,
          showEpisodeSummary: !0,
          showEpisodeDuration: !0,
          playbackQueryParams: this.props.playbackQueryParams
        });
        break;
      case "Trailers":
        n = r.createElement(S, {
          model: o,
          trackId: this.context.jawBoneTrailerTrackId,
          isLoading: this.state.isLoading,
          onSliderMove: this._handleSliderMove,
          playbackQueryParams: this.props.playbackQueryParams
        });
        break;
      case "Warning":
        n = r.createElement(y, {
          model: o,
          videoModel: this.videoModel,
          contentWarning: R.getContentWarning(this.videoModel)
        });
        break;
      case "MoreLikeThis":
        n = r.createElement(M, {
          model: o,
          isLoading: this.state.isLoading,
          onSliderMove: this._handleSliderMove
        });
        break;
      case "ShowDetails":
        n = r.createElement(f, {
          model: o,
          isLoading: this.state.isLoading,
          onSliderMove: this._handleSliderMove,
          watched: t
        })
    }
    return r.createElement(w, {
      key: "pane-" + e,
      ariaId: e,
      hasClickedMenu: this.state.hasClickedMenu
    }, r.createElement(J, null, n))
  }
  showEpisodesTab() {
    this.setState({
      visiblePane: "Episodes",
      hasClickedMenu: !0
    })
  }
  onTabClicked(e) {
    this.setState({
      visiblePane: e,
      hasClickedMenu: !0
    })
  }
  _isClickFromMenu(e) {
    return !!(e.parentElement && "menu" === e.parentElement.className || e.parentElement.parentElement && "menu" === e.parentElement.parentElement.className)
  }
  prefetchOnLoad() {
    var e = this,
      t = this.props,
      i = t.videoId,
      a = t.isStandaloneJawbone,
      n = this.state.hasPaneData,
      r = null,
      l = null,
      d = this.context.renderTracker;
    d && (r = d.startSession("jawbone" + i), l = function () {
      B.trackBySelectors(["image-rotator-image"]).then(function () {
        d.endSession(r)
      }).
        catch(function (e) {
          d.endSession(r, e)
        })
    }), i && !n[i] ? this.mountPrefetchTimeout = setTimeout(function () {
      var t, r = o(e.context.models, F.allJawBonePanes, {
        isShow: e.state.isShow,
        isStandaloneJawbone: a
      }),
        d = function () {
          e.setState({
            isLoading: !1
          }), l && l()
        };
      e.setState({
        isLoading: !0
      }), (t = e.props.model).get.apply(t, (0, s.
        default)(r)).subscribe(K, d, d), n[i] = !0, e.setState({
          hasPaneData: n
        })
    }, 600) : l && l()
  }
  handleCloseJawBone() {
    this.context.closeJawbone();
    var e = document.querySelector("#title-card-" + this.context.rowNum + "-" + this.context.rankNum);
    e && e.focus()
  }
  handleKeyDown(e) {
    switch (e && e.which) {
      case C.ESC:
        this.handleCloseJawBone();
        break;
      case C.ENTER:
        var t = d.findDOMNode(this.refs.closeJawboneButton);
        t && t.contains(e.target) && this.handleCloseJawBone()
    }
  }
  onPlayerError(e) {
    this.props.logStartPlayError && this.props.logStartPlayError({
      playerSessionId: this.props.playerSessionId
    }, e), this.handleVideoMerchPlayerComplete()
  }
  onPlayerPlaying() {
    this.state.videoMerchPlaying || this.setState({
      videoMerchPlaying: !0
    })
  }
  handleVideoMerchPlayerComplete() {
    this.setState({
      videoMerchPlaying: !1
    })
  }
  logVideoMerchStartPlay() {
    this.context.playerApp.getActionCreators().setStartTime({
      time: Date.now(),
      sessionId: this.props.playerSessionId
    }), this.props.logStartPlayStarted && this.props.logStartPlayStarted({
      videoId: this.videoModel.videoMerchId,
      playerSessionId: this.props.playerSessionId,
      playbackType: "videoMerchJaw"
    })
  }
  logVideoMerchCancelPlay() {
    if (this.props.logStartPlayCancel) {
      !this.context.playerApp.getAPI().videoPlayer.isVideoPlayingForSessionId(this.props.playerSessionId) && this.props.logStartPlayCancel && this.props.logStartPlayCancel({
        playerSessionId: this.props.playerSessionId
      }, "BLURRED")
    }
  }
  componentDidMount() {
    var e = this;
    this.logVideoMerchStartPlay();
    var t = this,
      i = d.findDOMNode(this),
      o = this.context.getModelData("truths").mdx2Enabled,
      a = o && L.getManagerInstance();
    a && a.on(a.EVENTS.SHOW_EPISODES, this.showEpisodesTab), i && O.show(i, function (e) {
      t.animateInfo(e, {
        before: {
          translateX: "30px",
          opacity: 0
        },
        translateX: "0px",
        opacity: 1,
        delay: 250,
        duration: 500
      })
    }), this.prefetchOnLoad(), setTimeout(function () {
      if (e.isMounted()) {
        var t = window.pageXOffset,
          i = window.pageYOffset,
          o = d.findDOMNode(e);
        o && o.focus(), window.scrollTo(t, i)
      }
    }, 600)
  }
  shouldComponentUpdate(e, t, i) {
    return this.props.videoId !== e.videoId || this.state.visiblePane !== t.visiblePane || this.state.isLoading !== t.isLoading || this.props.videoMerchPlayer !== e.videoMerchPlayer || this.state.videoMerchPlaying !== t.videoMerchPlaying || u.includes(_, this.state.visiblePane) && this.context.columnsInRow !== i.columnsInRow
  }
  componentDidUpdate() {
    this.prefetchOnLoad()
  }
  componentWillUnmount() {
    var e = this,
      t = d.findDOMNode(this),
      i = this.context.getModelData("truths").mdx2Enabled,
      o = i && L.getManagerInstance();
    t && O.show(t, function (t, i) {
      e.animateInfo(t, {
        opacity: 0,
        duration: 250
      }), setTimeout(i, 950)
    }), clearTimeout(this.mountPrefetchTimeout), o && o.removeListener(o.EVENTS.SHOW_EPISODES, this.showEpisodesTab), this.props.hasVideoMerchInJaw && (this.logVideoMerchCancelPlay(), this.props.closePlayer && this.props.closePlayer(this.props.playerSessionId))
  }
  componentWillReceiveProps(e) {
    var t = {};
    e.videoId !== this.props.videoId && (t.isShow = this.getHasEpisodes(), t.visiblePane = this.getDefaultPane(e.model)), this.props.videoMerchPlayer !== e.videoMerchPlayer && (t.videoMerchPlaying = !1), this.setState(t)
  }
  renderOriginalsTitle(e, t) {
    var i = c("logo", {
      "small-logo": !t
    });
    return r.createElement("img", {
      alt: e,
      className: i,
      src: this.videoModel.logoUrl
    })
  }
  renderText(e) {
    return r.createElement("div", {
      className: "text image-fallback-text"
    }, e)
  }
  renderTitle(e, t, i) {
    var o = "ja" === u.get(this.context.models, "geo.data.locale.language", "en"),
      a = this.videoModel.isOriginal,
      s = c("title", "has-jawbone-nav-transition", {
        "title-small": e.length > 30,
        "long-title-double-byte-width": o,
        "long-title-double-byte-font": o && e.length > 25,
        original: a
      });
    return r.createElement(this.props.isStandaloneJawbone ? "h1" : "h3", {}, r.createElement(I, {
      resolver: j.getTitleRoute,
      className: c("jawbone-title-link"),
      params: {
        id: i
      },
      tabIndex: -1
    }, r.createElement("div", {
      className: s
    }, a && this.videoModel.logoUrl ? this.renderOriginalsTitle(e, t) : this.renderText(e))))
  }
  render() {
    var e = this.props,
      t = e.model,
      i = e.videoId,
      o = e.disableClose,
      a = e.hideMoreLikeThis,
      s = this.context.getModelData("truths"),
      n = s.jawAudioOffByDefault,
      l = t.getValueSync(["summary"]),
      d = t.getValueSync(["title"]) || this.context.getI18nString(U, "overview.loading"),
      h = this.getHasEpisodes(),
      u = x.isInResumeState(this.props.model) || x.isInNextUpState(this.props.model),
      m = !this.videoModel.isPlayable && !this.videoModel.hasTrailers,
      g = !this.context.isRtl && this.videoModel.isOriginal && !u && !this.props.hasVideoMerchInJaw;
    if (!i || l && p.isValueError(l)) return null;
    var v = h || "Episodes" !== this.state.visiblePane ? this.state.visiblePane : "Overview",
      y = "Overview" === v,
      M = "Warning" === v,
      S = y || M,
      f = R.hasContentWarning(this.videoModel),
      w = this.props.hasVideoMerchInJaw ? y && !this.state.videoMerchPlaying : y;
    return r.createElement("div", {
      id: i,
      className: "jawBoneContainer slider-hover-trigger-layer",
      onKeyDown: this.handleKeyDown
    }, r.createElement(b, {
      id: i,
      dim: !y,
      rotateStills: w,
      model: t,
      isStandalone: !h,
      isFullBleed: g,
      videoMerchPlayerElement: !!this.videoModel.videoMerchId && (this.props.videoMerchPlayer || this.props.isStandaloneJawbone) && r.createElement(W, {
        allowPlayback: y,
        videoStartTime: this.videoModel.videoMerchStartTime || 0,
        videoId: this.videoModel.videoMerchId,
        playerSessionId: this.props.playerSessionId,
        onPlayerError: this.onPlayerError,
        onPlayerPlaying: this.onPlayerPlaying,
        onPlaybackComplete: this.handleVideoMerchPlayerComplete,
        trackId: this.context.trackId,
        videoMerchPlayer: this.props.videoMerchPlayer,
        isStandaloneJawBone: this.props.isStandaloneJawbone,
        playContextRecord: H({
          location: "VIDEO_MERCH",
          row: this.context.rowNum,
          rank: this.context.rankNum,
          requestId: this.context.requestId,
          videoMerchComputeId: this.videoModel.videoMerchComputeId
        })
      })
    }), r.createElement("div", {
      className: "jawBone"
    }, this.renderTitle(d, S, i), r.createElement("div", {
      className: c("jawBoneCommon")
    }, r.createElement("div", {
      className: c("jawBonePanes", {
        "offset-for-logo": this.videoModel.isOriginal && this.videoModel.logoUrl && !S,
        fullBleed: g
      })
    }, this.getVisiblePane(v, u))), !m && r.createElement(P, {
      hideMoreLikeThis: a,
      hasEpisodes: h,
      hasTrailers: this.videoModel.hasTrailers,
      isPrePromo: this.videoModel.isPrePromo,
      visiblePane: v,
      onTabClicked: this.onTabClicked,
      hasContentWarning: f,
      onMouseEnter: this.handleNavHover
    })), !o && r.createElement("a", {
      className: c("close-button", "icon-close"),
      ref: "closeJawboneButton",
      onClick: this.handleCloseJawBone,
      tabIndex: 0,
      role: "button",
      "aria-label": this.context.getI18nString(U, "button.close")
    }), !!this.videoModel.videoMerchId && this.state.videoMerchPlaying && r.createElement(q, {
      key: "audio-toggle",
      isHidden: !y,
      isMutedByDefault: n
    }))
  }
} 