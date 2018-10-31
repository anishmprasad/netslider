// L = a({
//   displayName: "LolomoRow",
  
//   contextTypes: Object.assign({
//     getModelData: s.func.isRequired,
//     models: s.object.isRequired,
//     renderTracker: s.object
//   }, p),
//   statics: {
//     getPaths: j,
//     defaultStrategy: R,
//     prefetchStrategies: T,
//     defaultSliderMoveStrategy: S
//   },

//   childContextTypes: {
//     requestId: s.string.isRequired,
//     trackId: s.number,
//     jawBoneTrackId: s.number,
//     jawBoneEpisodeTrackId: s.number,
//     jawBoneTrailerTrackId: s.number,
//     listContext: s.string,
//     listId: s.string,
//     listType: s.string,
//     isTallRow: s.bool,
//     impressionToken: s.string
//   },
  
  
// });



import React , { Component } from 'react';
import PropTypes from 'prop-types';


export default class LolomoRow extends Component{
  constructor(props){
    super(props)
    fullDataLoaded: !1
  }
  getChildContext() {
    var e = this.getTrackIds();
    return {
      requestId: this.props.model.getValueSync(["requestId"]),
      trackId: e.trackId,
      jawBoneTrackId: e.trackId_jaw,
      jawBoneEpisodeTrackId: e.trackId_jawEpisode,
      jawBoneTrailerTrackId: e.trackId_jawTrailer,
      listContext: this.props.listContext,
      listId: this.props.model.getValueSync(["id"]) ? this.props.model.getValueSync(["id"]) : void 0,
      listType: this.props.listType,
      isTallRow: !!this.props.model.getValueSync(["isTallRow"]),
      impressionToken: this.props.model.getValueSync(["impressionToken"])
    }
  }
  componentDidMount() {
    var e = this.context.renderTracker;
    if (e) {
      var t = e.startSession("lolomoRow" + this.props.rowNum);
      u.trackBySelectors([".boxart-image"]).then(function () {
        e.endSession(t)
      }).
        catch(function (o) {
          e.endSession(t, o)
        })
    }
  }
  getVideoPath(e) {
    return this.props.videoRoot ? [this.props.videoRoot].concat(e) : e
  }
  getId() {
    var e = this.props.model,
      t = e.getValueSync(["genreId"]),
      o = e.getValueSync(["videoId"]);
    return t || (o || null)
  }
  getTrackIds() {
    return this.props.model.getValueSync(["trackIds"]) || {}
  }
  getTitles() {
    var e = this,
      t = this.props.model,
      o = !!t.getValueSync(["isTallRow"]),
      i = m.isRichOriginalsRow(o, this.context.models.truths),
      r = this.props.rowNum,
      s = {};
    return {
      titleList: this.getLoadedItemModels().map(function (t, o) {
        var a = t.id,
          l = "title_" + a + "_" + r + "_" + o;
        s[a] = o;
        try {
          return n.createElement(y, {
            key: l,
            model: t.model,
            rowNum: r,
            rankNum: o,
            videoId: a,
            isTallPanel: i,
            videoRoot: e.props.videoRoot
          })
        } catch (e) {
          console.log("slider render error: ", o, e)
        }
        return null
      }),
      orderedItemList: s
    }
  }
  getLoadedItemModels() {
    for (var e = this.props.model, t = e.getValueSync("length"), o = [], i = void 0, r = void 0, s = 0; s < t; s++) i = e.bind([s]), (r = i.getValueSync(this.getVideoPath(["summary"]))) && r.id && o.push({
      model: i,
      id: r.id
    });
    return o
  }
  getRowItems() {
    var e = [],
      t = this.getTitles();
    return {
      rowItems: e.concat(t.titleList).slice(0, 100),
      orderedItemList: t.orderedItemList || {}
    }
  }
  getTotalItemsInRow() {
    var e = this.props.model,
      t = e.getValueSync(["length"]);
    return t > 100 && (t = 100), t
  }
  sliderMovePqls() {
    if (this.props.sliderMovePqls) return this.props.sliderMovePqls;
    var e = this.context.models,
      t = {}, o = L.defaultSliderMoveStrategy;
    return m.isRichOriginalsRow(this.props.model.getValueSync(["isTallRow"]), this.context.models.truths) && (t.tallPanelBoxart = !0), j(e, o, t)
  }
  handleSliderMove() {
    var e = this;
    this.state.fullDataLoaded || (this.state.fullDataLoaded = !0, c.queue(function () {
      var t;
      return (t = e.props.model).get.apply(t, (0, r.
        default)(e.sliderMovePqls())).subscribe(M, function () {
          return e.forceUpdate()
        }, function () {
          return e.forceUpdate()
        })
    }))
  }
  render() {
    var e = this.props.model,
      t = !!e.getValueSync(["isTallRow"]),
      o = m.isRichOriginalsRow(t, this.context.models.truths),
      i = {
        lolomoRow: !0,
        lolomoRow_title_card: !0,
        jawBoneOpen: this.props.showJawBone,
        "originals-panels-row": o
      }, r = this.props.jawBoneRankNum,
      s = this.props.listContext === v.LIST_CONTEXTS.MY_LIST,
      a = this.getRowItems() || {}, l = a.rowItems || [],
      u = s && a.orderedItemList,
      c = this.state.fullDataLoaded ? l.length : this.getTotalItemsInRow();
    return 0 === c || 0 === l.length ? null : React.createElement("div", {
      key: this.props.listContext + this.props.rowNum,
      className: d(i, this.props.className),
      "data-list-context": this.props.listContext
    }, this.props.hideRowHeader ? null : React.createElement(w, {
      id: this.getId(),
      title: this.props.title ? this.props.title : e.getValueSync(["displayName"])
    }), React.createElement(f, {
      model: e,
      videoRoot: this.props.videoRoot,
      totalItems: c,
      rowNum: this.props.rowNum,
      jawBoneRankNum: this.props.jawBoneRankNum,
      showJawBone: this.props.showJawBone,
      disableJawClose: this.props.disableJawClose,
      handleSliderMove: this.handleSliderMove,
      jawBoneModelIndex: r,
      columnsInRow: this.context.columnsInRow,
      enablePaginationIndicator: !0,
      isMyListRow: s,
      orderedItemList: s ? u : null
    }, l))
  }
}

LolomoRow.defaultProps = {
  videoRoot: "reference"
}