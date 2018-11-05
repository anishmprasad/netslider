import React, { Component } from "React";
import PropTypes from 'prop-types';


export default class TitleCardContainer extends Component{
  constructor(props){
    super(props)
    this.statics = {
      getPaths: q,
      getSize: function () {
        return J
      }
    },
    this._isMounted = !1;
    this.scope = { };
    this.videoModel = r({
      id: 0
    }),
    this.onBobFocusEnd =  0;
    this.onBoxartFocusEnd =  0;
    this.jawBoneDataLoadTimeout =  0;
    this.bobOpenTimeout = 0;
    this.titleCardRect =  0,
    this.scope = {
      isHovering: !1,
      hasFetchedBobData: !1
    }, {
      isBobOpen: !1
    }
  }
 
  getChildContext() {
    return {
      rankNum: this.props.rankNum
    }
  }

  componentWillMount() {
    this.videoModel = this.getVideoModel(this.state)
  }
  componentDidMount() {
    l.on("rating:set", this.onRating), this._isMounted = !0
  }
  componentWillUpdate(e, t) {
    this.videoModel = this.getVideoModel(t)
  }
  componentWillReceiveProps(e) {
    !this.props.myJawBoneOpen && e.myJawBoneOpen ? this.onBoxartFocusEnd = this.props.logFocus("boxArt", this.getBoxartTrackingInfo()) : this.props.myJawBoneOpen && !e.myJawBoneOpen && this.onBoxartFocusEnd && this.onBoxartFocusEnd()
  }
  componentWillUnmount() {
    this.clearDelays(), l.removeListener("rating:set", this.onRating), this.onBobFocusEnd && (this.onBobFocusEnd(), delete this.onBobFocusEnd), this.onBoxartFocusEnd && (this.onBoxartFocusEnd(), delete this.onBoxartFocusEnd), this._isMounted = !1
  }
  getBoxart(e, t, o) {
    return this.context.listContext === O.LIST_CONTEXTS.SHORT_FORM ? e.getValueSync(["interestingMoment", t, o]) : e.getValueSync(["boxarts", t, o])
  }
  getFalcorVideoModel() {
    return this.props.videoRoot ? this.props.model.bind([this.props.videoRoot]) : this.props.model
  }
  getVideoModel() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state,
      t = this.getFalcorVideoModel(),
      o = b.getExtensionForOpaqueImage(this.context.models),
      i = this.context.listContext === O.LIST_CONTEXTS.SHORT_FORM,
      n = i ? 50 : 160,
      a = {
        bob: e.isBobOpen,
        shortForm: i,
        videoMerch: this.context.getModelData("truths").hasVideoMerchInBob,
        tallPanel: this.props.isTallPanel
      }, r = {
        opaqueExtension: o,
        standardImageSize: J,
        highQualityImageSize: h.SIZE,
        maxSynopsisLength: n,
        tallVMEnabled: this.context.getModelData("truths").hasROAR30SecondPreview
      }, d = x(t, a, r);
    if (k.get("web.ui.akira.enable.maturity.mismatch.logging")) {
      var c = s.get(this.context.models, "userInfo.data.maturity", 1e6),
        u = s.get(t.getValueSync(["titleMaturity"]), "level", 0);
      c < u && (d.maturityMisMatchEdgy = !0, u > 96 && (d.maturityMisMatchNonEdgy = !0))
    }
    return d
  }
  getBobTrackingInfo() {
    var e = this.videoModel,
      t = e.userRating,
      o = e.userRatingRequestId,
      i = t.matchScore,
      n = t.tooNewForMatchScore,
      s = t.predicted;
    return this.props.getTrackingInfoFromContext({
      matchRequestId: o,
      predictedRating: s,
      matchScore: i,
      tooNewForMatchScore: n,
      rowNum: "number" == typeof this.props.rowNum ? this.props.rowNum : this.context.rowNum,
      rankNum: this.props.rankNum
    }, ["trackId", "lolomoId", "listId", "requestId", "videoId"])
  }
  getBoxartTrackingInfo() {
    return this.props.getTrackingInfoFromContext({
      image_key: this.videoModel.imageKey,
      rank: this.props.rankNum,
      row: this.props.rowNum
    }, Object.keys(d.trackedFields))
  }
  handleKeyDown(e) {
    switch (e && e.which) {
      case v.ENTER:
        this.handleClick()
    }
  }
  handleClick(e) {
    this.context.isKidsPage && w.kidsProfileWithoutParity(this.context.models) ? this.props.videoId > 0 && this.context.history.pushState(f.getTitleRoute(this.context.models, this.context.isKidsPage).makePath({
      id: this.props.videoId
    }), this.getBobTrackingInfo()) : this.openJawBone(e)
  }
  openJawBone() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.getBobTrackingInfo();
    this.props.myJawBoneOpen || "keydown" !== e.type && this.state.isBobOpen || (l.emit("jawbone:open", s.assign(t, {
      trigger: "miniBob"
    })), this.context.openJawbone(t.rowNum, t.rankNum, this.props.videoId, e.type), this.handleLeave())
  }
  handleMouseEnter(e, t) {
    var o = document.activeElement || document.body;
    t && t.currentTarget && e instanceof HTMLElement && e.contains(t.currentTarget) && !this.state.isBobOpen && (o && o !== document.body && !o.getAttribute("data-search-input") && o.blur(), this.handleEnter(t))
  }
  handleMouseLeave(e, t) {
    (t && !t.relatedTarget || t.relatedTarget.location || t.relatedTarget && e instanceof HTMLElement && !e.contains(t.relatedTarget)) && this.handleLeave()
  }
  handleEnter(e, t) {
    var o = this,
      i = this,
      s = this.context.models;
    if (this.scope.isHovering = !0, !this.scope.hasFetchedBobData) {
      this.scope.hasFetchedBobData = !0;
      var a = this.props.videoRoot ? [this.props.videoRoot] : [],
        r = function (e) {
          var t, r = function () {
            e.forceUpdate && o.forceUpdate()
          };
          (t = i.props.model).get.apply(t, (0, n.
            default)(q(s, e, {
              videoPrefix: a
            }))).subscribe(_, r, r)
        };
      setTimeout(function () {
        r(V.bobs)
      }), setTimeout(function () {
        r(V.jawBones)
      }, 700)
    }
    this.props.aJawBoneOpen ? this.jawBoneDataLoadTimeout || this.props.myJawBoneOpen || (this.jawBoneDataLoadTimeout = setTimeout(c.ViewDetailsCommand(function () {
      i.context.openJawbone(i.context.rowNum, i.props.rankNum, i.props.videoId), i.clearDelays()
    }), 300)) : this.queueBobOpen()
  }
  queueBobOpen() {
    if (!this.bobOpenTimeout && !this.state.isBobOpen) {
      var e = void 0;
      this.titleCardRect = N.getRect(R.findDOMNode(this)), e = this.props.getRowHasBobOpen && this.props.getRowHasBobOpen() ? 100 : 400, this.bobOpenTimeout = setTimeout(this.openBob, e)
    }
  }
  openBob() {
    if (this.scope.isHovering && this._isMounted && (this.onBobFocusEnd = this.props.logFocus("bob", this.getBobTrackingInfo()), this.setState({
      isBobOpen: !0
    }), y.isPlayPredictionEnabled(this.context.getModelData("truths")))) {
      var e = this.getBobTrackingInfo();
      l.emit(P, s.assign({
        trackId: this.context.trackId,
        rankNum: e.rankNum,
        rowNum: e.rowNum,
        listContext: this.context.listContext
      }, this.props))
    }
  }
  clearDelays() {
    this.jawBoneDataLoadTimeout && clearTimeout(this.jawBoneDataLoadTimeout), this.bobOpenTimeout && clearTimeout(this.bobOpenTimeout), this.jawBoneDataLoadTimeout = void 0, this.bobOpenTimeout = void 0
  }
  handleLeave() {
    var e = this;
    this.scope.isHovering = !1, this.clearDelays(), this.state.isBobOpen && -1 === window.location.href.indexOf("stickybob") && (this.onBobFocusEnd && (this.onBobFocusEnd(), delete this.onBobFocusEnd), l.emit("bob:close", s.assign({
      trackId: this.context.trackId,
      videoId: this.props.videoId,
      rowNum: this.context.rowNum,
      rankNum: this.props.rankNum,
      requestId: this.context.requestId
    }, this.props)), this.props.onBobLeave(this.props.rankNum, function () {
      e._isMounted && e.setState({
        isBobOpen: !1
      })
    }))
  }
  handleJawOpen() {
    this.handleLeave(), this.setState({
      isBobOpen: !1
    })
  }
  onBobOpen(e, t) {
    if (this.props.onBobOpen && this.props.sliderItemId && this.titleCardRect) {
      var o = this.titleCardRect.width * e,
        i = (o - this.titleCardRect.width) / 2;
      this.props.onBobOpen(this.props.sliderItemId, i, t)
    }
  }
  onBobClose(e, t, o){
    this.props.onBobClose && this.props.sliderItemId && this.props.onBobClose(this.props.sliderItemId, e, t, o)
  }
  onRating(){
    this._isMounted && this.forceUpdate()
  }
  isDisliked() {
    var e = this.videoModel.userRating;
    return e && "thumb" === e.type && 1 === e.userRating
  }
  getWatchURL() {
    var e = this.getBobTrackingInfo();
    return M.buildAkiraPlayerURL(this.videoModel && this.videoModel.summary && this.videoModel.summary.id, M.buildAkiraPlayerQuery({
      videoTrackingInfo: e
    }))
  }
  shouldShowProgress() {
    return this.context.listContext === O.LIST_CONTEXTS.WATCHLIST ? this.props.model.getValueSync(["context", "isContinueWatching"]) : this.context.listContext === O.LIST_CONTEXTS.CONTINUE_WATCHING && !!this.videoModel.episodeRuntime
  }
  render () {
    var e = this.props,
      t = e.itemTabbable,
      o = e.className,
      i = e.animateIn,
      n = e.isTallPanel,
      s = this.context.logger,
      a = this.getBobTrackingInfo(),
      r = this.videoModel,
      d = this.shouldShowProgress(),
      c = I.isValueError(r.summary) || !r.summary,
      u = C.createElement(h, {
        isBobOpen: this.state.isBobOpen,
        isTallPanel: n,
        model: this.getFalcorVideoModel(),
        onBobClose: this.onBobClose,
        onBobOpen: this.onBobOpen,
        onJawOpen: this.handleJawOpen,
        playbackQueryParams: this.props.playbackQueryParams,
        trackingInfo: this.getBobTrackingInfo(),
        videoModel: r
      });
    return s && c && s.logEvent(p.DebugEvent, {
      name: "TitleCardError",
      data: r
    }), this.context.listContext === O.LIST_CONTEXTS.SHORT_FORM ? C.createElement(S, {
      animateIn: i,
      className: o,
      isBobOpen: this.state.isBobOpen,
      isDimmed: this.props.aJawBoneOpen && !this.props.myJawBoneOpen,
      isDisliked: this.isDisliked(),
      isFocused: this.props.myJawBoneOpen,
      isInvalid: c,
      itemTabbable: t,
      model: this.getFalcorVideoModel(),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      rankNum: a.rankNum,
      rowNum: a.rowNum,
      showProgress: d,
      videoModel: r,
      watchURL: this.getWatchURL()
    }, u) : n ? C.createElement(D, {
      animateIn: i,
      className: o,
      isBobOpen: this.state.isBobOpen,
      isDimmed: this.props.aJawBoneOpen && !this.props.myJawBoneOpen,
      isDisliked: this.isDisliked(),
      isFocused: this.props.myJawBoneOpen,
      isInvalid: c,
      itemTabbable: t,
      model: this.getFalcorVideoModel(),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      rankNum: a.rankNum,
      rowNum: a.rowNum,
      showProgress: d,
      videoModel: r,
      watchURL: this.getWatchURL()
    }, u) : C.createElement(F, {
      animateIn: i,
      className: o,
      isBobOpen: this.state.isBobOpen,
      isDimmed: this.props.aJawBoneOpen && !this.props.myJawBoneOpen,
      isDisliked: this.isDisliked(),
      isFocused: this.props.myJawBoneOpen,
      isInvalid: c,
      itemTabbable: t,
      model: this.getFalcorVideoModel(),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      rankNum: a.rankNum,
      rowNum: a.rowNum,
      showProgress: d,
      videoModel: r,
      watchURL: this.getWatchURL()
    }, u)
  }
}

// TitleCardContainer.propTypes = {
//   getModelData: PropTypes.func.isRequired,
//   history: PropTypes.object.isRequired,
//   openJawbone: PropTypes.func.isRequired,
//   rowNum: PropTypes.number,
//   trackId: PropTypes.number,
//   requestId: PropTypes.string,
//   models: PropTypes.object.isRequired,
//   listContext: PropTypes.string.isRequired,
//   isKidsPage: PropTypes.bool,
//   logger: PropTypes.object.isRequired,
//   rankNum: PropTypes.number
// }