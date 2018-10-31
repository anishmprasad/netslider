// C.r("2M", function (t, e, s) {
//   "use strict";
//   var a = t("fE"),
//     n = t("eZ"),
//     i = t("aP"),
//     r = (t("dP"), t("ty")),
//     o = t("1l"),
//     d = i({
//       displayName: "TitleCardFocus",
//       getDefaultProps: function () {
//         return {

//         }
//       },
      

//     });
//   e.exports = d
// });


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class TitleCardFocus extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    r.show(ReactDOM.findDOMNode(this), Object.assign({}, r.presets.fadeIn, {
      duration: this.props.transitions.fadeIn
    }))
  }
  componentWillUnmount() {
    this.props.transitions.fadeOut && r.hide(ReactDOM.findDOMNode(this), Object.assign({}, r.presets.fadeOut, {
      duration: this.props.transitions.fadeOut
    }))
  }
  render() {
    return React.createElement("div", {
      className: "title-card-jawbone-focus"
    }, React.createElement("div", {
      className: "title-card-focus-ring"
    }), React.createElement(o, {
      ref: "playButton",
      model: this.props.model,
      className: "title-card-play",
      playbackQueryParams: this.props.playbackQueryParams
    }))
  }
}

TitleCardFocus.defaultProps = {
  transitions: {
    fadeIn: 300,
    fadeOut: 300
  }
 }