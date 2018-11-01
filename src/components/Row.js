// C.r("46", function (e, o, t) {
//   "use strict";
//   var s = e("dP"),
//     n = e("fE"),
//     i = e("aP"),
//     r = e("eZ"),
//     a = e("9p"),
//     l = e("4d"),
//     p = e("3z"),
//     h = e("3A"),
//     d = e("p6"),
//     c = e("6f"),
//     u = e("pa"),
//     m = e("6m"),
//     w = e("7H"),
//     B = i({
//       displayName: "Row",
      
//       contextTypes: Object.assign({

//       }, c),

      
//     });
//   o.exports = m(B)
// });



import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from './Slider';
import JawBoneOnRow from './JawBoneOnRow'

import onBinding from './Utils'

export default class Row extends Component{
  constructor(props){
    super(props)
    this.lowestVisibleItemIndex= 0;
    this.isBobOpen = !1;
    this.sliderMoveDirection = null;
  }
  componentDidMount() {
    this.props.isMyListRow && (u.on("myList:remove:end", this._decreaseSelectedIndex), u.on("myList:add:end", this._increaseSelectedIndex))
  }
  componentWillUnmount() {
    this.props.isMyListRow && (u.removeListener("myList:remove:end", this._decreaseSelectedIndex), u.removeListener("myList:add:end", this._increaseSelectedIndex))
  }
  _increaseSelectedIndex() {
    var e = this.props.totalItems;
    this.props.showJawBone && null !== this.props.jawBoneRankNum && void 0 !== this.props.jawBoneRankNum && e && (this.props.isGallery ? (this.context.columnsInRow && this.context.columnsInRow > e && (e = this.context.columnsInRow), this.props.jawBoneRankNum + 1 < e ? this.context.openJawbone(this.props.rowNum, this.props.jawBoneRankNum + 1) : this.context.openJawbone(this.props.rowNum, 0)) : this.props.jawBoneRankNum + 1 <= e && this.context.openJawbone(this.props.rowNum, this.props.jawBoneRankNum + 1))
  }
  _decreaseSelectedIndex(e) {
    var o = this.props.orderedItemList[e.videoId],
      t = this.props.totalItems,
      s = this.props.jawBoneRankNum,
      n = void 0;
    this.props.showJawBone && this.props.orderedItemList && void 0 !== o && (n = this.props.isGallery ? (s + 1) * (this.props.rowNum + 1) : s, s - 1 >= 0 && (o < n || s + 1 >= t) && this.context.openJawbone(this.props.rowNum, s - 1))
  }
  // childContextTypes: {
  //   rowNum: s.number
  // }
  getChildContext() {
    return {
      rowNum: this.props.rowNum
    }
  }
  handleSliderMove(e, o) {
    this.setState({
      lowestVisibleItemIndex: e
    }), this.sliderMoveDirection = o, "function" == typeof this.props.handleSliderMove && this.props.handleSliderMove(e, o)
  }
  // closingBobs: [],
  onBobLeave(e, o) {
    var t = this,
      s = {
        position: e,
        callback: o,
        closeTimeout: setTimeout(function () {
          t.isMounted() && t.closePrevBobs(!1)
        }, 500)
      };
    this.closingBobs.push(s)
  }
  onBobOpen(e, o, t, s) {
    this.pushSliderItems(e, o, t, s), this.closePrevBobs(!0), this.setState({
      isBobOpen: !0
    })
  }
  onBobClose(e, o, t, s) {
    s && this.handleRowBlur(), !this.ignoreClosingPush || this.isJawBoneOpen() ? this.pushSliderItems(e, 0, o, t) : t && t(), this.ignoreClosingPush = !1
  }
  closePrevBobs(e) {
    this.ignoreClosingPush = e;
    for (var o = 0, t = this.closingBobs.length; o < t; o++) {
      var s = this.closingBobs[o];
      clearTimeout(s.closeTimeout), s.callback && s.callback()
    }
    this.closingBobs = []
  }
  cleanUpAllBobStyles() {
    if (this.isMounted()) {
      var e = this.refs.slider;
      if (e) {
        (e.getAllSliderItems() || []).map(function (e) {
          d.clearStyles(r.findDOMNode(e))
        })
      }
    }
  }
  getIsBobOpen() {
    return this.state.isBobOpen
  }
  pushSliderItems(e, o, t, s) {
    var n = this.refs.slider,
      i = n && n.getItem(e);
    if (i && t) {
      var a = void 0,
        l = i.props.viewportPosition;
      a = "leftEdge" === l ? 1 : "rightEdge" === l ? -1 : 0;
      for (var p, h = n.getSliderItemsInViewport(), c = 0; p = h[c]; c++) {
        var u = 0;
        if (p === i) u = a * o;
        else {
          var m = a ? 2 : 1,
            w = p.props.viewportIndex > i.props.viewportIndex ? 1 : -1;
          a && w !== a && (m = 0), u = w * o * m
        }
        this.context.isRtl && (u *= -1), d.animate({
          target: r.findDOMNode(p),
          translate3d: Math.floor(u) + "px, 0,0",
          duration: t,
          callback: s,
          easing: "cubic-bezier(0.5, 0, 0.1, 1)",
          delay: 0
        })
      }
    }
  }
  isJawBoneOpen() {
    return this.props.showJawBone
  }
  getJawBoneModel() {
    if (this.props.jawBoneModelIndex >= 0) {
      var e = this.props.videoRoot ? [this.props.jawBoneModelIndex, this.props.videoRoot] : [this.props.jawBoneModelIndex];
      return this.props.model.bind(e)
    }
    return null
  }
  handleRowBlur() {
    return this.closePrevBobs(!1), this.getIsBobOpen() && setTimeout(this.cleanUpAllBobStyles, 500), this.setState({
      isBobOpen: !1
    }), null
  }
  wrapChildItems(e) {
    var o = this;
    return e.map(function (e) {
      return n.cloneElement(e, {
        onBobOpen: o.onBobOpen,
        onBobClose: o.onBobClose,
        onBobLeave: o.onBobLeave,
        getRowHasBobOpen: o.getIsBobOpen,
        aJawBoneOpen: o.isJawBoneOpen(),
        myJawBoneOpen: o.isJawBoneOpen() && o.props.jawBoneRankNum === e.props.rankNum
      })
    })
  }
  render() {
    var e = this.props.model,
      o = 6,
      t =  0,
      s =  0,
      i =  0,
      r =  0,
      d =  0;
      this.props.columnsInRow && (o = this.props.columnsInRow), this.isJawBoneOpen() && (s = this.getJawBoneModel(), t = s && s.getValueSync(["summary"]), i = t && "show" === t.type, r = p.getPaths(this.context.models, null, {
        isShow: i
      }), d = s && r);
    var c = onBinding({
        rowContainer: !0,
        jawBoneOpen: d && this.props.isGallery,
        bobOpen: this.state.isBobOpen,
        rowContainer_title_card: !0
      });
      return React.createElement("div", {
        className: c,
        id: "row-" + this.props.rowNum
      }, React.createElement(<PresTrackedContainer />, null, React.createElement("div", {
        className: "rowContent slider-hover-trigger-layer",
        onMouseLeave: this.handleRowBlur
      }, React.createElement(<Slider />, {
        ref: "slider",
        itemsInRow: o,
        totalItems: this.props.totalItems,
        onSliderMove: this.handleSliderMove,
        enableLooping: !0,
        enablePeek: !0,
        enablePaginationIndicator: this.props.enablePaginationIndicator,
        parentContext: {
          rowIndex: this.props.rowNum
        }
      }, this.wrapChildItems(this.props.children))), React.createElement(<JawBoneOnRow />, {
        model: e,
        sliderRef: this.refs.slider,
        jawBoneRankNum: this.props.jawBoneRankNum,
        showJawBone: this.isJawBoneOpen(),
        lowestVisibleItemIndex: this.state.lowestVisibleItemIndex,
        sliderMoveDirection: this.sliderMoveDirection,
        infinite: !this.props.isGallery,
        jawBoneModelIndex: this.props.jawBoneModelIndex,
        playbackQueryParams: this.props.playbackQueryParams,
        videoRoot: this.props.videoRoot,
        disableClose: this.props.disableJawClose,
        hasVideoMerchInJaw: this.context.getModelData("truths").hasVideoMerchInJaw
      })))
  }
}

Row.propTypes = {
  getModelData: PropTypes.func.isRequired,
  models: PropTypes.object.isRequired,
  openJawbone: PropTypes.func.isRequired
}

