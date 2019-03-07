// C.r("3Q", function (t, e, o) {
//   "use strict";

//   function n(t) {
//     return t && t.__esModule ? t : {
//       default: t
//     }
//   }
//   var i = t("9i"),
//     s = n(i),
//     r = t("9m"),
//     a = n(r),
//     l = t("dP"),
//     c = t("fE"),
//     h = t("aP"),
//     d = t("dm"),
//     u = t("9p"),
//     m = t("eZ"),
//     p = t("j4"),
//     g = t("jw"),
//     f = t("3U"),
//     R = t("0f"),
//     w = t("3T"),
//     L = t("3W"),
//     v = t("3V"),
//     b = t("3X"),
//     x = t("3R"),
//     I = t("3S"),
//     S = t("1F"),
//     T = t("t6"),
//     C = t("te"),
//     k = t("6f"),
//     y = t("6u"),
//     D = t("p2"),
//     B = t("pa"),
//     E = t("3O"),
//     M = t("74"),
//     V = t("o-"),
//     F = t("7k"),
//     A = t("7r"),
//     W = t("7V"),
//     O = t("fu"),
//     N = I.LIST_CONTEXTS,
//     P = p.get("netflix.ui.akira.max.lolomo.rows"),
//     j = p.get("netflix.ui.akira.prefetch.page"),
//     U = p.get("netflix.ui.akira.prefetch.homeLoaded.6"),
//     H = U ? U.rowMin : 25,
//     _ = {
//       allRows: {
//         numRows: P,
//         numVideos: 7,
//         bobs: !1,
//         jawBones: !1
//       }
//     }, q = _.allRows,
//     z = function () { }, G = function (t, e, o) {
//       var n = ["responseExpiration", "statusCode"],
//         i = V.kidsProfileWithParity(t, !1);
//       e || (e = q);
//       var s = {
//         from: e.rowMin || 0,
//         to: e.numRows
//       }, r = f.getPaths(t, e).map(function (t) {
//         return [s].concat(t)
//       }).concat([
//         [s, ["context", "type"]]
//       ]).concat([
//         ["summary"]
//       ]).concat([
//         ["id"]
//       ]).concat([
//         ["meta", n]
//       ]).concat([
//         ["requestId"]
//       ]).concat(b.getPaths(t, e)).concat(w.getPaths(t, e)).concat(L.getPaths(t, e)).concat(v.getPaths(t, e));
//       if (e.numBillboards > 0 && (r = r.concat(R.getPaths(t, e))), i) {
//         var a = E.getPaths(t, e).map(function (t) {
//           return ["character"].concat(t)
//         });
//         return r.concat(a)
//       }
//       return r
//     }
//   e.exports = W(X)
// });


import React,{ Component } from "React";
import PropTypes from 'prop-types';
import BillboardRow from './BillboardRow';
import LolomoBigRow from './LolomoBigRow';
import { profileManager } from "./Utils";
import LolomoRow from './LolomoRow';

import { onBinding } from './Utils'
import { truths } from './constants'


let U = {
  bobs: false,
  jawBones: false,
  numBillboards: 0,
  numRows: 50,
  numVideos: 7,
  rowMin: 25,
}

let H = 25;

let j = {
  bobs: false,
  jawBones: false, 
  numBillboards: 2,
  numRows: 3,
  numVideos: 7,
}

let P = 50;

let N = {
  BIG_ROW: "bigRow",
  BILLBOARD: "billboard",
  CHARACTER_ROW: "character",
  CONTINUE_WATCHING: "continueWatching",
  MY_LIST: "queue",
  NETFLIX_ORIGINALS: "netflixOriginals",
  RATE_MOVIES: "rateMovies",
  SHORT_FORM: "shortForm",
  SIMILIARS: "similars",
  SOCIAL_POPULAR: "socialPopular",
  SUGGESTION_GALLERY: "suggestionsForYouGallery",
  SUGGESTION_ROW: "galleryDisplayAsRow",
  WATCHLIST: "watchlist",
}

let E = {
  stub: true
}

let I = {
  LAZY_LOADING : { IMAGES: 6 },
  LIST_CONTEXTS : {
    BIG_ROW: "bigRow",
    BILLBOARD: "billboard",
    CHARACTER_ROW: "character",
    CONTINUE_WATCHING: "continueWatching",
    MY_LIST: "queue",
    NETFLIX_ORIGINALS: "netflixOriginals",
    RATE_MOVIES: "rateMovies",
    SHORT_FORM: "shortForm",
    SIMILIARS: "similars",
    SOCIAL_POPULAR: "socialPopular",
    SUGGESTION_GALLERY: "suggestionsForYouGallery",
    SUGGESTION_ROW: "galleryDisplayAsRow",
    WATCHLIST: "watchlist",
  },
  LIST_TYPES:{
    COMPOSITE: "composite",
    FLAT: "flat"
  }
}

import FalcorPureRender from './FalcorPureRender';
import LoadingRow from './LoadingRow';
import SiteError from './SiteError';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Lolomo  extends Component{
  constructor(props){
    super(props)
    this.renderRowsChunkSize = 10
    this.renderRowsChunkDelay = 100
    this.statics = {
      getPaths: undefined,
      prefetchStrategies: {allRows:{
        bobs: false,
        jawBones: false,
        numRows: 50,
        numVideos: 7,
      }},
      MAX_ROWS: 50
    }
    this.rowsFetching = { }
    this.isFetchingAdditionalLolomoData = !1
    this.hasfetchedLolomo = !1
    this.logPresentationEnd =  0
    this.hasBillboard = !1
    this.scope = {
      prefetchCallbacks: []
    }
    this.state = {
      bouncing: !1,
      maxRowToRender: j.numRows
    }
  }
  getChildContext() {
    return {
      requestId: this.getRequestId(),
      lolomoId: this.getLolomoId(),
      isWatchlistLolomo: this.isWatchlistLolomo()
    }
  }
  getRequestId() {
    return this.props.model.getValueSync(["requestId"])
  }
  isWatchlistLolomo() {
    return void 0 !== this.props.model.getValueSync(["watchlist", "id"])
  }
  lolomoIsValid() {
    var t = this.props.model,
      e = t.getBoundValue();
    return !!e && "error" !== e.$type && this.hasARow()
  }
  getNumRows() {
    var t = this.props.model,
      e = -1,
      o = void 0;
    if (!t.getBoundValue()) return -1;
    if (!0 === this.props.newArrivals) e = t.getValueSync(["length"]);
    else {
      if (!(o = t.getValueSync(["summary"]))) return -1;
      e = o.length
    }
    return e
  }
  renderPlaceHolder() {
    return React.createElement(LoadingRow, {
      pulsateTitles: !0,
      pulsateHeader: !1,
      showSpinner: !1
    })
  }
  renderSiteError() {
    return React.createElement(SiteError, null)
  }
  setIsInteractive() {
    if (this.props.initialFetchCompleted && !this.isInteractive && (this.isInteractive = !0, B.emit("app:interactive", this.props), this.lolomoIsValid() && T.setLolomoCookieFalcor(this.context.jsongDocument, !1, this.props.suppressBillboard)), this.hasNthRow(3)) {
      var t = this.context.renderTracker;
      t && t.endSession(this.renderId)
    }
  }
  updateRowsFetching(t, e, o) {
    t = t || 0, this.rowsFetching[t] = o, this.rowsFetching[e] = o
  }
  allAdditionalFetchingComplete() {
    return !1 === this.rowsFetching[H] && d.every(this.rowsFetching, function (t) {
      return !1 === t
    })
  }
  lastRowdataExists() {
    var t = this.props.model,
      e = t && t.getValueSync(["summary"]);
    if (!e) return !1;
    var o = e.length - 1;
    return t.bind([o]).getBoundValue() && t.bind([o - 1]).getBoundValue() && t.bind([o - 2]).getBoundValue()
  }
  allRowsFetched() {
    var t = this.isFetchingAdditionalLolomoData,
      e = this.lastRowdataExists();
    return !t && e || t && this.allAdditionalFetchingComplete()
  }
  bounceLolomo() {
    T.clearLolomoCookie(this.props.suppressBillboard), T.setIsBouncingLolomo(!0), setTimeout(function () {
      document.location.href = document.location.href
    }, 10)
  }
  componentWillMount() {
    if (this.renderTracker = this.context.renderTracker, this.mountedWithNoData = !this.lolomoIsValid(), !g) {
      this.props.model.getBoundValue() || T.seedLolomoImpression(this.context.jsongDocument, this.props.suppressBillboard);
      var t = T.isBouncingLolomo();
      !this.props.initialFetchCompleted || this.lolomoIsValid() || t ? T.setIsBouncingLolomo(!1) : (this.setState({
        bouncing: !0
      }), this.bounceLolomo())
    }
  }
  componentWillReceiveProps(t) {
    !this.props.initialFetchCompleted && t.initialFetchCompleted && this.didFetchInitialDataSet()
  }
  didFetchInitialDataSet() {
    if (!this.lolomoIsValid()) {
      if (T.getLolomoCookie(null, this.props.suppressBillboard)) return this.setState({
        bouncing: !0
      }), void this.bounceLolomo();
      this.isMounted() && this.forceUpdate()
    }
    this.mountedWithNoData && this.context.playerApp.getActionCreators().receiveManifestGenesisTimestamp({
      timestamp: Date.now()
    }), this.loadAdditionalData()
  }
  getLolomoId() {
    return this.props.model.getValueSync(["id"])
  }
  getLolomoLength() {
    var t = this.props.model,
      e = t && t.getValueSync(["summary"]);
    return e && e.length || P
  }
  componentDidMount() {
    this.context.renderTracker && (this.renderId = this.context.renderTracker.startSession("lolomo")), this.state.scrollHandlersDisabled || (D.addEventListener("scroll", this.onScroll), D.addEventListener("scrollEnd", this.onScrollEnd)), this.setIsInteractive();
    var t = this.getLolomoId();
    this.lolomoLength = this.getLolomoLength(), this.updateCurrentLolomo(), this.context.discoveryApp.getActionCreators().setLolomoLoggingContext({
      lolomoId: t
    }), this.logPresentationEnd = this.props.logPresentationStart("browseTitles", {
      lolomoId: t
    }), setTimeout(function () {
      window.scrollTo(0, 0)
    }, 0), this.props.initialFetchCompleted && this.didFetchInitialDataSet()
  }
  hasMoreRowsToRender() {
    return this.hasfetchedLolomo && this.state.maxRowToRender < this.lolomoLength && this.isMounted()
  }
  getLolomoType() {
    return d.get(this.props.model, "_path[0]")
  }
  isUsingWarmer() {
    return truths.isLolomoWarmerEnabled && "lolomo" === this.getLolomoType()
  }
  shouldDisableScrollHandlers() {
    return this.state.maxRowToRender >= this.lolomoLength
  }
  updateMaxRowToRender() {
    if (this.hasMoreRowsToRender())
      if (truths.lazyLoadLolomoDOM) {
        var t = Math.min(this.state.maxRowToRender + 5, this.lolomoLength);
        this.setState({
          maxRowToRender: t
        })
      } else {
        var e = Math.min(this.state.maxRowToRender + this.renderRowsChunkSize, this.lolomoLength);
        this.setState({
          maxRowToRender: e
        }), this.renderWarmLolomoChunkTimer = window.requestIdleCallback(this.updateMaxRowToRender, {
          timeout: this.renderRowsChunkDelay
        })
      } else this.shouldDisableScrollHandlers() && (D.removeEventListener("scroll", this.onScroll), D.removeEventListener("scrollEnd", this.onScrollEnd))
  }
  onScroll() {
    this.hasMoreRowsToRender() && (this.renderRowsChunkDelay = 200, truths.lazyLoadLolomoDOM && this.isWithinDistanceBuffer(700) ? this.updateMaxRowToRender() : this.renderRowsChunkSize = 1)
  }
  isWithinDistanceBuffer(t) {
    var e = this.lolomoContainer && m.findDOMNode(this.lolomoContainer);
    return e && A.getDistanceToBottomOfElement(e) < t
  }
  onScrollEnd() {
    this.hasMoreRowsToRender() && !truths.lazyLoadLolomoDOM && (this.renderRowsChunkDelay = 100, this.renderRowsChunkSize = 10, window.cancelIdleCallback(this.renderWarmLolomoChunkTimer), this.updateMaxRowToRender())
  }
  loadAdditionalData() {
    return this.lastRowdataExists() ? (this.hasfetchedLolomo = !0, this.updateMaxRowToRender(), !1) : (this.isFetchingAdditionalLolomoData = !0, this.loadAdditionalDataWithFalcor(), null)
  }
  loadAdditionalDataWithFalcor() {
    var t = truths.fetchLolomoInChunks,
      e = this,
      o = this.props.model,
      n = "netflix.ui.akira.prefetch.homeLoaded",
      i = void 0;
    i = t ? [n, n + ".2", n + ".3", n + ".4", n + ".5", n + ".6"] : ["netflix.ui.akira.prefetch.home.afterWarmer"];
    var s = function (t) {
      var n = this;
      if (o && o.getBoundValue()) {
        var i = p.get(t),
          s = i.rowMin,
          r = i.numRows,
          l = G(e.context.models, i);
        e.updateRowsFetching(s, r, !0);
        var c = function () {
          e.updateRowsFetching(s, r, !1), e.hasfetchedLolomo = !0, e.updateMaxRowToRender(), e.isFetchingAdditionalLolomoData = !1, e.allRowsFetched() && e.isMounted() && e.forceUpdate(), i.forceUpdate && n.forceUpdate()
        };
        o.get.apply(o, (0, a.
          default)(l)).subscribe(z, c, c)
      }
    }, r = parseInt(50, 10) || 50,
      l = parseInt(750, 10) || 750;
    d.map(i, function (t, o) {
      e.scope.prefetchCallbacks.push(y.queue(function () {
        s(t)
      }, r + o * l))
    })
  }
  loadRemainingDataWithFalcor() {
    var t = this,
      e = this.props.model;
    if (e && e.getBoundValue()) {
      var o = {
        bobs: false,
        forceUpdate: false,
        jawBones: false,
        numBillboards: 0,
        numRows: 50,
        numVideos: 7,
        rowMin: 0,
      },
        n = G(this.context.models, o),
        i = function () {
          o.forceUpdate && t.forceUpdate()
        };
      e.get.apply(e, (0, a.
        default)(n)).subscribe(z, i, i)
    }
  }
  componentWillUpdate(t, e) {
    this.context.discoveryApp.getActionCreators().setLolomoLoggingContext({
      lolomoId: this.getLolomoId()
    })
  }
  componentDidUpdate() {
    this.renderTracker !== this.context.renderTracker && (this.renderTracker = this.context.renderTracker, this.context.renderTracker && (this.renderId = this.context.renderTracker.startSession("lolomo"))), this.setIsInteractive(), this.updateCurrentLolomo()
  }
  updateCurrentLolomo() {
    var t = this.context.jsongDocument,
      e = t.getValueSync(["lolomos", "currentLolomo"]),
      o = this.getLolomoId();
    o !== e && t.setValueSync(["lolomos", "currentLolomo"], o)
  }
  componentWillUnmount() {
    var t = this.props.model.getValueSync(["id"]);
    this.context.jsongDocument.getValueSync(["lolomos", "currentLolomo"]) === t && this.context.jsongDocument.setValueSync(["lolomos", "currentLolomo"], null);
    for (var e = this.scope.prefetchCallbacks.pop(); e;) y.cancelQueuedItem(e), e = this.scope.prefetchCallbacks.pop();
    D.removeEventListener("scroll", this.onScroll), D.removeEventListener("scrollEnd", this.onScrollEnd), this.logPresentationEnd && this.logPresentationEnd(), this.context.discoveryApp.getActionCreators().removeLolomoLoggingContext()
  }
  renderBillboardTransitionGroup(t) {
    return truths.volatileBillboardsEnabled ? React.createElement(CSSTransitionGroup , {
      className: "volatile-billboard-animations-container",
      transitionName: {
        enter: "volatile-billboard-animations-enter",
        leave: "volatile-billboard-animations-leave"
      },
      transitionEnterTimeout: 600,
      transitionLeaveTimeout: 400
    }, t) : t
  }
  renderRow(t) {
    var e = void 0,
      o = this.props.model.bind([t]),
      n = o.getValueSync(["context"]),
      i = o.getValueSync(["type"]),
      r = this.context.columnsInRow,
      a = null,
      l = !1;
    this.props.jawBoneRowNum === t && (a = this.props.jawBoneRankNum, l = !0);
    var h = {
      model: o,
      rowNum: t,
      key: o.getValueSync(["id"]),
      listContext: n,
      showJawBone: l,
      jawBoneRankNum: a
    };
    var h = {
      "model": {
        "$type": "ref",
        "value": [
          "genres",
          "59849",
          "rw",
          0
        ]
      },
      "rowNum": 0,
      "key": "617df370-484a-4749-afed-c4b57baeff49_19760272X29X80234235X1541610124986",
      "listContext": "similars",
      "showJawBone": false,
      "jawBoneRankNum": null
    }
    // {
    //   "model": {
    //     "$type": "ref",
    //       "value": [
    //         "genres",
    //         "59849",
    //         "rw",
    //         2
    //       ]
    //   },
    //   "rowNum": 2,
    //     "key": "617df370-484a-4749-afed-c4b57baeff49_19760274X28X70031X1541610124986",
    //       "listContext": "genre",
    //         "showJawBone": false,
    //           "jawBoneRankNum": null
    // }
    if (n === N.BILLBOARD) {
      var d = "bigRow" === this.props.model.getValueSync(["bigRow", "context"]),
        u = d && false || truths.forceStaticBillboards,
        m = F.getExtensionForTransparentImage(this.context.models),
        g = ["billboards", 0, m, "data"],
        b = o.getValueSync(g);
      if (!b || !b.id) return null;
      e = this.renderBillboardTransitionGroup(React.createElement(BillboardRow, Object.assign({}, h, {
          forceStatic: u
        }))), this.hasBillboard = !0
    } else if (n === N.BIG_ROW) e = React.createElement(LolomoBigRow, Object.assign({}, h, {
        toggleBigRowState: this.props.toggleBigRowState,
        bigRowIsOpen: this.props.bigRowIsOpen
      }));
    else if (n === N.CHARACTER_ROW) e = React.createElement(E, Object.assign({
        model: o
      }, h, {
          columnsInRow: r
        }));
    else {
      var I;
      switch (n) {
        case N.CONTINUE_WATCHING:
          I = w;
          break;
        case N.WATCHLIST:
          I = L;
          break;
        case N.SHORT_FORM:
          I = v;
          break;
        default:
          I = f
      }
      e = React.createElement(LolomoRow, Object.assign({}, h, {
          listType: i,
          columnsInRow: r
        }))
    }
    return e
  }
  renderLolomo() {
    this.rowsFetching = {
      0 : false,
      50 : false
    }
    for (var t = this, e = [], o = 0, n = this.rowsFetching || {}; o < P;) {
      if (this.hasNthRow(o)) this.shouldRenderNthRow(o) && e.push(this.renderRow(o));
      else if (n[o]) break;
      o++
    }
    var i = onBinding({
      lolomo: !0,
      "is-fullbleed": this.hasBillboard,
      "has-open-jaw": this.props.jawBoneVideoId,
      "has-open-bigRow": this.props.bigRowIsOpen
    });
    return React.createElement("div", {
      className: i,
      ref: function (e) {
        t.lolomoContainer = e
      }
    }, e, (!this.allRowsFetched() || this.hasMoreRowsToRender()) && this.renderPlaceHolder())
  }
  hasFirstRow() {
    return this.hasNthRow(0)
  }
  hasNthRow(t) {
    var e = this.props.model.bind([t]),
      o = e.getBoundValue();
    return !(t > this.state.maxRowToRender) && (!!o && !C.isValueError(o))
  }
  hasARow() {
    for (var t = 0; t < P; t++)
      if (this.hasNthRow(t)) return !0;
    return !1
  }
  shouldRenderNthRow(t) {
    var e = this.props.model.bind([t]),
      o = e.getValueSync(["context"]);
    return !(this.props.suppressBillboard && o === N.BILLBOARD || -1 !== [N.SOCIAL_POPULAR, N.RATE_MOVIES].indexOf(o)) && (o === N.BILLBOARD || 0 !== e.getValueSync(["length"]))
  }
  render() {
    return this.props.initialFetchCompleted || this.hasFirstRow() ? this.state.bouncing ? null : this.lolomoIsValid() ? this.renderLolomo() : this.renderSiteError() : this.renderPlaceHolder()
  }
}

// Lolomo.propTypes = {
//     getModelData: PropTypes.func.isRequired,
//     jsongDocument: PropTypes.object,
//     models: PropTypes.object.isRequired,
//     renderTracker: PropTypes.object,
//     requestId: PropTypes.string,
//     lolomoId: PropTypes.string,
//     isWatchlistLolomo: PropTypes.bool
// }