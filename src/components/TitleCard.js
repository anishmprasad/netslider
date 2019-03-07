C.r("2L", function (e, t, i) {
  "use strict";
  var a = e("4B"),
    s = (a.videoReactShape, e("0a")),
    n = e("7L"),
    o = e("9p"),
    r = e("aP"),
    l = e("p6"),
    d = e("2I"),
    m = e("19"),
    c = (e("dP"), e("fE")),
    u = e("2M"),
    h = r({
      displayName: "TitleCard",
      node: null,
      getAnimationStyle: function () {
        var e = this.props,
          t = e.animateIn,
          i = e.videoModel,
          a = i.id % 20 * 2.5 / 100 + .3;
        return t ? l.getAnimationStyle({
          keyframes: {
            delay: a + "s"
          }
        }) : {}
      },
      handleMouseEnter: function (e) {
        this.props.onMouseEnter && this.props.onMouseEnter(this.node, e)
      },
      handleMouseLeave: function (e) {
        this.props.onMouseLeave && this.props.onMouseLeave(this.node, e)
      },
      onAnchorClick: function (e) {
        var t = this.props.onClick;
        t && (e.preventDefault(), t())
      },
      render: function () {
        var e = this,
          t = this.props,
          i = t.isInvalid,
          a = t.itemTabbable,
          r = t.isDisliked,
          l = t.isFocused,
          h = t.isDimmed,
          p = t.isBobOpen,
          y = t.videoModel,
          M = t.watchURL,
          v = t.animateIn,
          E = t.model,
          b = t.showProgress,
          f = t.rowNum,
          g = t.rankNum,
          k = o({
            "title-card": !0,
            "is-bob-open": p,
            "animate-in": v,
            "is-focused": l,
            "is-dimmed": h,
            "is-disliked": r
          }),
          N = "title-card-" + (void 0 !== f ? f : -1) + "-" + (void 0 !== g ? g : -1);
        return i ? c.createElement(d, {
          className: o(k, "boxart-size-16x9")
        }) : c.createElement("div", {
          className: "title-card-container"
        }, c.createElement("div", {
          ref: function (t) {
            e.node = t
          },
          id: N,
          style: this.getAnimationStyle(),
          className: o(k, this.props.className),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, c.createElement(n, {
          videoId: y.id,
          imageKey: y.imageKey,
          maturityMisMatchEdgy: y.maturityMisMatchEdgy,
          maturityMisMatchNonEdgy: y.maturityMisMatchNonEdgy
        }, c.createElement("a", {
          href: M,
          onClick: this.onAnchorClick,
          "aria-label": y.title ? y.title : null,
          tabIndex: a ? 0 : -1,
          "aria-hidden": !a,
          className: "slider-refocus"
        }, c.createElement(s, {
          className: "boxart-size-16x9",
          title: y.title
        }, c.createElement("img", {
          className: "boxart-image boxart-image-in-padded-container",
          src: y.image,
          alt: ""
        })))), l && c.createElement(u, {
          model: E,
          playbackQueryParams: this.props.playbackQueryParams
        }), this.props.children), b && c.createElement(m, {
          runtime: y.episodeRuntime,
          bookmarkPosition: y.episodeBookmark,
          current: !0,
          showSummary: !1
        }))
      }
    });
  t.exports = h
});


C.r("2N", function (e, t, i) {
  "use strict";
  var a = e("4B"),
    s = (a.videoReactShape, e("0a")),
    n = e("7L"),
    o = e("9p"),
    r = e("aP"),
    l = e("p6"),
    d = e("1s"),
    c = e("2x"),
    m = e("2I"),
    u = e("19"),
    p = e("dP"),
    h = e("fE"),
    E = e("fw"),
    v = e("2M"),
    y = r({
      displayName: "TitleCard",
      contextTypes: {
        getModelData: p.func.isRequired
      },
      node: null,
      getAnimationStyle: function () {
        var e = this.props,
          t = e.videoModel.id,
          i = e.animateIn,
          a = t % 20 * 2.5 / 100 + .3;
        return i ? l.getAnimationStyle({
          keyframes: {
            delay: a + "s"
          }
        }) : {}
      },
      handleMouseEnter: function (e) {
        this.props.onMouseEnter && this.props.onMouseEnter(this.node, e)
      },
      handleMouseLeave: function (e) {
        this.props.onMouseLeave && this.props.onMouseLeave(this.node, e)
      },
      onAnchorClick: function (e) {
        var t = this.props.onClick;
        t && (e.preventDefault(), t())
      },
      render: function () {
        var e = this,
          t = this.props,
          i = t.isInvalid,
          a = t.itemTabbable,
          r = t.isDisliked,
          l = t.isFocused,
          p = t.isDimmed,
          y = t.isBobOpen,
          M = t.videoModel,
          b = t.watchURL,
          f = t.animateIn,
          g = t.model,
          k = t.rowNum,
          N = t.rankNum,
          x = o({
            "title-card": !0,
            "is-bob-open": y,
            "animate-in": f,
            "is-focused": l,
            "is-dimmed": p,
            "is-disliked": r
          }),
          D = this.context.getModelData("truths").shortformEpisodeDurationVisible,
          L = "title-card-" + (void 0 !== k ? k : -1) + "-" + (void 0 !== N ? N : -1);
        return i ? h.createElement(m, {
          className: o(x, "boxart-size-16x9")
        }) : h.createElement("div", {
          className: "title-card-container"
        }, h.createElement("div", {
          ref: function (t) {
            e.node = t
          },
          id: L,
          style: this.getAnimationStyle(),
          className: o(x, this.props.className),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, h.createElement(n, {
          videoId: M.id,
          imageKey: M.imageKey,
          maturityMisMatchEdgy: M.maturityMisMatchEdgy,
          maturityMisMatchNonEdgy: M.maturityMisMatchNonEdgy
        }, h.createElement("a", {
          href: b,
          onClick: this.onAnchorClick,
          "aria-label": M.title ? M.title : null,
          tabIndex: a ? 0 : -1,
          "aria-hidden": !a,
          className: "slider-refocus"
        }, h.createElement(s, {
          className: "boxart-size-16x9",
          title: M.title
        }, h.createElement("img", {
          className: "boxart-image boxart-image-in-padded-container",
          src: M.image,
          alt: ""
        })))), l && h.createElement(v, {
          model: g,
          playbackQueryParams: this.props.playbackQueryParams
        }), this.props.children && h.createElement(E, null, this.props.isBobOpen && this.props.children), D && h.createElement("div", {
          className: "title-card-duration"
        }, h.createElement(c, {
          runtime: M.episodeRuntime || 0
        }))), M.evidenceData && h.createElement(d, {
          evidenceData: M.evidenceData
        }), this.props.showProgress && h.createElement(u, {
          runtime: M.episodeRuntime,
          bookmarkPosition: M.episodeBookmark,
          current: !0,
          showSummary: !1
        }))
      }
    });
  t.exports = y
});



import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleCard extends Component{
  constructor(props){
    super(props)
  }
  getAnimationStyle() {
    var e = this.props,
      a = e.videoModel,
      t = e.animateIn,
      i = a && a.id % 20 * 2.5 / 100 + .3;
    return t ? d.getAnimationStyle({
      keyframes: {
        delay: i + "s"
      }
    }) : {}
  }
  handleMouseEnter(e) {
    this.props.onMouseEnter && this.props.onMouseEnter(this.node, e)
  }
  handleMouseLeave(e) {
    this.props.onMouseLeave && this.props.onMouseLeave(this.node, e)
  }
  onAnchorClick(e) {
    var a = this.props.onClick;
    a && (e.stopPropagation(), e.preventDefault(), a())
  }
  renderTallPanel() {
    var e = this.props.videoModel,
      a = s("boxart-size-1x2", "boxart-tall-panel"),
      t = e || {}, i = t.tallImage,
      o = t.tallImageFocalPoint;
    return i ? p.createElement(n, {
      className: a,
      title: e.title
    }, o ? p.createElement(l, {
      url: i,
      className: a,
      focalPoint: {
        x: o.x,
        containerWidth: 342,
        imageWidth: 848
      }
    }) : p.createElement("img", {
      className: "boxart-image-tall boxart-image-in-padded-container",
      src: i,
      alt: ""
    })) : null
  }
  render() {
    var e = this,
      a = this.props,
      t = a.isInvalid,
      i = a.itemTabbable,
      l = a.isDisliked,
      r = a.isFocused,
      d = a.isDimmed,
      h = a.isBobOpen,
      v = a.videoModel,
      b = a.watchURL,
      E = a.animateIn,
      g = a.model,
      k = a.showProgress,
      y = a.rowNum,
      f = a.rankNum,
      x = s({
        "title-card": !0,
        "slider-refocus": !0,
        "title-card-tall-panel": !0,
        "is-bob-open": h,
        "animate-in": E,
        "is-focused": r,
        "is-dimmed": d,
        "is-disliked": l
      }),
      M = "title-card-" + (void 0 !== y ? y : -1) + "-" + (void 0 !== f ? f : -1);
    return t ? p.createElement(c, {
      className: s(x, "boxart-size-16x9")
    }) : p.createElement("div", {
      className: "title-card-container"
    }, p.createElement("div", {
      ref: function (a) {
        e.node = a
      },
      id: M,
      style: this.getAnimationStyle(),
      className: s(x, this.props.className),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.props.onClick,
      onKeyDown: this.props.onKeyDown
    }, p.createElement(o, {
      videoId: v.id,
      imageKey: v.tallImageKey
    }, p.createElement("a", {
      href: b,
      onClick: this.onAnchorClick,
      tabIndex: i ? 0 : -1,
      role: i ? "link" : null,
      "aria-label": v.title ? v.title : null,
      "aria-hidden": !i
    }, p.createElement(n, {
      className: "boxart-size-16x9",
      title: v.title
    }, p.createElement("img", {
      className: "boxart-image boxart-image-in-padded-container",
      src: v.wideImage,
      alt: ""
    }))), this.renderTallPanel()), r && p.createElement(u, {
      model: g,
      playbackQueryParams: this.props.playbackQueryParams
    }), p.createElement("div", {
      className: "bob-container-tall-panel"
    }, this.props.children)), k && p.createElement(m, {
      runtime: v.episodeRuntime,
      bookmarkPosition: v.episodeBookmark,
      current: !0,
      showSummary: !1
    }))
  }
}