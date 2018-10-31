// C.r("12", function (e, o, s) {
//   "use strict";
//   var t = e("dP"),
//     a = e("fE"),
//     n = e("aP"),
//     i = e("dm"),
//     r = e("2p"),
//     h = e("0b"),
//     d = e("1l"),
//     w = e("7k"),
//     l = e("6f"),
//     g = e("6B"),
//     c = e("pa"),
//     m = e("3S"),
//     u = e("t7"),
//     p = e("0W"),
//     B = e("0X"),
//     y = e("0U"),
//     b = e("0V"),
//     M = e("0T"),
//     P = e("0Y"),
//     C = e("o-"),
//     I = e("5b"),
//     T = "discovery/akira/Common",
//     v = n({
//       displayName: "BobCardContainer",
      
      
//     });
//   o.exports = v
// });


import React, { Component } from "React";
import PropTypes from 'prop-types';

export default class BobCardContainer extends Component{
  constructor(props){
    super(props)
    this.bobComponent = null
    this.statics = {
    SIZE: "_665x375",
    SIZE_PANEL: "_848x477",
    getPaths: function (e, o) {
      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, t = s.isTallPanel ? "_848x477" : "_665x375";
      return [["summary"], ["title"], ["availability"], ["evidence"], ["queue"], ["episodeCount"], ["boxarts", t, w.getExtensionForOpaqueImage(e)], ["current", ["summary", "runtime", "bookmarkPosition", "interactiveBookmark", "creditsOffset", "episodeBadges"]]].concat(r.getPaths(e), h.getPaths(e, null, {
        isShow: s.isShow,
        height: 480,
        size: t
      }), g.getPaths(), d.getPaths())
    }
  }
  }

  onClickJawHitZone = () => I.ViewDetailsCommand(function (e, o) {
    var s = this.props.videoModel;
    if (!u.modifiedClick(e)) {
      var t = s.userRating.matchScore,
        a = s.userRating.tooNewForMatchScore;
      e && e.preventDefault(), c.emit("jawbone:open", i.assign({
        videoId: s.id,
        trackId: this.context.trackId,
        rowNum: this.context.rowNum,
        rankNum: this.context.rankNum,
        requestId: this.context.requestId
      }, this.props, {
          trigger: "bob"
        }, void 0 !== t ? {
          matchScore: t
        } : {}, void 0 !== a ? {
          tooNewForMatchScore: a
        } : {})), this.props.onJawOpen && this.props.onJawOpen(o), this.context.openJawbone(this.context.rowNum, this.context.rankNum, s.id, void 0, void 0, o)
    }
  })
  onMylistChange(e) {
    e && "function" == typeof this.props.onBobClose && this.props.onBobClose(0, null, e)
  }
  getBobToggles() {
    var e = this.props.videoModel,
      o = {
        showMetaData: !0,
        showPercentMatch: !0,
        showEvidence: !0,
        showThumbRatingIcons: !0,
        showProgressBar: !1,
        showProgressSummary: !e.isInteractive,
        showAudioToggle: e.hasVideoMerch,
        showAddToMyList: !!e.queue,
        showPlayButton: e.isPlayable,
        showRecentInterestingMoment: e.watchState !== g.STATES.UNWATCHED,
        showNewEpisodeBadge: !0
      };
    return e.watchState === g.STATES.RESUME && (o.showProgressBar = !0), e.watchState !== g.STATES.UNWATCHED && (o.showEvidence = !1, o.showMetaData = !1), this.context.listContext === m.LIST_CONTEXTS.CONTINUE_WATCHING && (o.showEvidence = !1, o.showProgressBar = !1), e.isOriginal && !e.isPlayable && (o.showMetaData = !1), o
  }
  render(){
    var e = this.props,
      o = e.playbackQueryParams,
      s = e.onBobOpen,
      t = e.videoModel,
      n = e.onBobClose,
      i = e.isBobOpen,
      r = e.isTallPanel,
      h = e.enableMetaDataHiding,
      d = e.videoModel.hasVideoMerch,
      w = this.context.getModelData("truths"),
      l = w.videoMerchAudioOffByDefault,
      g = this.getBobToggles();
    return C.kidsProfileWithoutParity(this.context.models) ? r ? React.createElement(P, {
      videoModel: t,
      model: this.props.model,
      episodesButtonText: this.context.getI18nString(T, "label.episodes"),
      titleCardImage: t.image,
      playbackQueryParams: o,
      trackingInfo: this.props.trackingInfo,
      isBobOpen: i,
      showProgressBar: g.showProgressBar,
      showProgressSummary: g.showProgressSummary,
      showPlayButton: g.showPlayButton,
      showMetaData: g.showMetaData,
      showEvidence: g.showEvidence,
      onBobOpen: s,
      onBobClose: n
    }) : React.createElement(B, {
      videoModel: t,
      model: this.props.model,
      episodesButtonText: this.context.getI18nString(T, "label.episodes"),
      titleCardImage: t.image,
      playbackQueryParams: o,
      trackingInfo: this.props.trackingInfo,
      isBobOpen: i,
      showProgressBar: g.showProgressBar,
      showPlayButton: g.showPlayButton,
      showMetaData: g.showMetaData,
      onBobOpen: s,
      onBobClose: n
    }) : r ? d ? React.createElement(b, {
      videoModel: t,
      model: this.props.model,
      titleCardImage: t.image,
      titleCardImageHighRes: t.imageHighRes,
      playbackQueryParams: o,
      isBobOpen: i,
      showMetaData: g.showMetaData,
      showThumbRatingIcons: g.showThumbRatingIcons,
      showEvidence: g.showEvidence,
      showAddToMyList: g.showAddToMyList,
      showAudioToggle: g.showAudioToggle,
      showRecentInterestingMoment: g.showRecentInterestingMoment,
      showProgressBar: g.showProgressBar,
      showProgressSummary: g.showProgressSummary,
      showNewEpisodeBadge: g.showNewEpisodeBadge,
      showPlayButton: g.showPlayButton,
      enableMetaDataHiding: h,
      onMylistChange: this.onMylistChange,
      onBobOpen: s,
      onBobClose: n,
      onClickJawHitZone: this.onClickJawHitZone,
      isMutedByDefault: l
    }) : React.createElement(y, {
      videoModel: t,
      model: this.props.model,
      titleCardImage: t.image,
      playbackQueryParams: o,
      isBobOpen: i,
      showMetaData: g.showMetaData,
      showThumbRatingIcons: g.showThumbRatingIcons,
      showEvidence: g.showEvidence,
      showAddToMyList: g.showAddToMyList,
      showRecentInterestingMoment: g.showRecentInterestingMoment,
      showProgressBar: g.showProgressBar,
      showProgressSummary: g.showProgressSummary,
      showNewEpisodeBadge: g.showNewEpisodeBadge,
      showPlayButton: g.showPlayButton,
      onMylistChange: this.onMylistChange,
      onBobOpen: s,
      onBobClose: n,
      onClickJawHitZone: this.onClickJawHitZone
    }) : d ? React.createElement(p, {
      videoModel: t,
      model: this.props.model,
      titleCardImage: t.image,
      titleCardImageHighRes: t.imageHighRes,
      playbackQueryParams: o,
      isBobOpen: i,
      showMetaData: g.showMetaData,
      showThumbRatingIcons: g.showThumbRatingIcons,
      showEvidence: g.showEvidence,
      showAddToMyList: g.showAddToMyList,
      showAudioToggle: g.showAudioToggle,
      showRecentInterestingMoment: g.showRecentInterestingMoment,
      showProgressBar: g.showProgressBar,
      showProgressSummary: g.showProgressSummary,
      showNewEpisodeBadge: g.showNewEpisodeBadge,
      showPlayButton: g.showPlayButton,
      enableMetaDataHiding: h,
      onMylistChange: this.onMylistChange,
      onBobOpen: s,
      onBobClose: n,
      onClickJawHitZone: this.onClickJawHitZone,
      isMutedByDefault: l
    }) : React.createElement(M, {
      videoModel: t,
      model: this.props.model,
      titleCardImage: t.image,
      playbackQueryParams: o,
      isBobOpen: i,
      showMetaData: g.showMetaData,
      showThumbRatingIcons: g.showThumbRatingIcons,
      showEvidence: g.showEvidence,
      showAddToMyList: g.showAddToMyList,
      showRecentInterestingMoment: g.showRecentInterestingMoment,
      showProgressBar: g.showProgressBar,
      showProgressSummary: g.showProgressSummary,
      showNewEpisodeBadge: g.showNewEpisodeBadge,
      showPlayButton: g.showPlayButton,
      onMylistChange: this.onMylistChange,
      onBobOpen: s,
      onBobClose: n,
      onClickJawHitZone: this.onClickJawHitZone,
      isMutedByDefault: l
    })
  }
}

BobCardContainer.defaultProps= {
  enableMetaDataHiding: !0
}

BobCardContainer.propTypes = {
  getModelData: PropTypes.func.isRequired,
  getI18nString: PropTypes.func.isRequired,
  openJawbone: PropTypes.func.isRequired,
  rowNum: PropTypes.number,
  rankNum: PropTypes.number,
  trackId: PropTypes.number,
  requestId: PropTypes.string,
  playerApp: PropTypes.object.isRequired,
  models: PropTypes.object
}