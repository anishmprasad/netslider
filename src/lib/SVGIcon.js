// C.r("7W", function(e, a, r) {
//     "use strict";
//     var t = e("9I")
//       , l = t(e("9E"))
//       , o = e("a0")
//       , n = e("eQ")
//       , i = e("a4")
//       , s = ["chevron-down", "chevron-left", "add", "check", "check-mark", "episodes", "play", "play-with-ring", "thumb-up", "thumb-down", "thumb-up-filled", "thumb-down-filled", "edit", "info", "grips", "moveToTop", "close", "down-arrow-small", "mylist-add", "mylist-added", "nmodp-play-button", "n-logo", "expand", "audio-off", "audio-on", "restart-playback", "audio-description", "info-circle", "facebook-logo", "instagram-logo", "twitter-logo", "youtube-logo", "rows", "grid", "uma-plan-selector-selected", "uma-plan-selector-not-selected", "maturity-rating-KR-KMRB-35", "maturity-rating-KR-KMRB-70", "maturity-rating-KR-KMRB-95", "maturity-rating-KR-KMRB-124", "maturity-advisory-KR-KMRB-lewdness", "maturity-advisory-KR-KMRB-harmful-themes", "maturity-advisory-KR-KMRB-profanity", "maturity-advisory-KR-KMRB-violence", "maturity-advisory-KR-KMRB-immatatable-behaviors", "maturity-advisory-KR-KMRB-fear", "maturity-advisory-KR-KMRB-drugs", "bvuiExit", "bvuiFullScreenOff", "bvuiFullScreenOn", "nfplayerReplay", "nfplayerCheck", "nfplayerExit", "nfplayerBack", "nfplayerFullscreen", "nfplayerNextEpisode", "nfplayerPause", "nfplayerPauser", "nfplayerPictureInPicture", "nfplayerPictureInPictureClose", "nfplayerPlay", "nfplayerStop", "nfplayerReportAProblem", "nfplayerMdx", "nfplayerMdxFull", "nfplayerOpticalCenterPause", "nfplayerOpticalCenterPlay", "nfplayerSubtitles", "nfplayerWindowed", "nfplayerEpisodes", "nfplayerBackTen", "nfplayerFastForward", "volumeMuted", "volumeLow", "volumeMedium", "volumeMax", "netflixLogo", "playerShare", "dolby-vision-atmos", "dolby-atmos", "dolby-vision"]
//       , u = i({
        
        
//     });
//     a.exports = u
// });

import React,{Component} from 'react';
import classnames from 'classnames'

const s = ["chevron-down", "chevron-left", "add", "check", "check-mark", "episodes", "play", "play-with-ring", "thumb-up", "thumb-down", "thumb-up-filled", "thumb-down-filled", "edit", "info", "grips", "moveToTop", "close", "down-arrow-small", "mylist-add", "mylist-added", "nmodp-play-button", "n-logo", "expand", "audio-off", "audio-on", "restart-playback", "audio-description", "info-circle", "facebook-logo", "instagram-logo", "twitter-logo", "youtube-logo", "rows", "grid", "uma-plan-selector-selected", "uma-plan-selector-not-selected", "maturity-rating-KR-KMRB-35", "maturity-rating-KR-KMRB-70", "maturity-rating-KR-KMRB-95", "maturity-rating-KR-KMRB-124", "maturity-advisory-KR-KMRB-lewdness", "maturity-advisory-KR-KMRB-harmful-themes", "maturity-advisory-KR-KMRB-profanity", "maturity-advisory-KR-KMRB-violence", "maturity-advisory-KR-KMRB-immatatable-behaviors", "maturity-advisory-KR-KMRB-fear", "maturity-advisory-KR-KMRB-drugs", "bvuiExit", "bvuiFullScreenOff", "bvuiFullScreenOn", "nfplayerReplay", "nfplayerCheck", "nfplayerExit", "nfplayerBack", "nfplayerFullscreen", "nfplayerNextEpisode", "nfplayerPause", "nfplayerPauser", "nfplayerPictureInPicture", "nfplayerPictureInPictureClose", "nfplayerPlay", "nfplayerStop", "nfplayerReportAProblem", "nfplayerMdx", "nfplayerMdxFull", "nfplayerOpticalCenterPause", "nfplayerOpticalCenterPlay", "nfplayerSubtitles", "nfplayerWindowed", "nfplayerEpisodes", "nfplayerBackTen", "nfplayerFastForward", "volumeMuted", "volumeLow", "volumeMedium", "volumeMax", "netflixLogo", "playerShare", "dolby-vision-atmos", "dolby-atmos", "dolby-vision"]

export default class SVGIcon extends Component{
    render(){
            var e = this.props
              , a = this.props.attributes
              , r = this.props.classes
              , t = this.props.filter
              , i = this.props.name
              , u = this.props.preventFocus;
            return s.indexOf(i) > -1 && React.createElement("svg", Object.assign({}, a, {
                className: classnames("svg-icon", "svg-icon-".concat(i), r),
                focusable: !u,
                key: i
            }), React.createElement("use", {
                filter: t ? "url(".concat(t, ")") : "",
                xlinkHref: "#".concat(i)
            }))
        }
}
SVGIcon.defaultProps = {
    classes: {},
    attributes: {},
    preventFocus: !1
}