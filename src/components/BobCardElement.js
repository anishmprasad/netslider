// C.r("0_", function(e, t, a) {
//     "use strict";
//     var n = e("9H")
//       , o = n(e("9z"))
//       , i = n(e("9B"))
//       , r = n(e("9Q"))
//       , l = n(e("9E"))
//       , s = n(e("9F"))
//       , d = n(e("9y"))
//       , u = n(e("9C"))
//       , f = e("eP")
//       , c = e("ef")
//       , p = e("9-")
//       , h = e("oE")
//       , m = e("eH")
//       , b = e("4p")
//       , v = 400
//       , g = 1.95
//       , y = .51282051282051
//       , x = 1.2
//       , I = .8333333333
//       , O = 4
//       , S = function(e) {
//         function t(e) {
//             var a;
//             return (0,
//             o.default)(this, t),
//             a = (0,
//             r.default)(this, (0,
//             l.default)(t).call(this, e)),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "containerNode", void 0),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "onGrowOverlayImage", void 0),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "preExpandScale", void 0),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "scale", void 0),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "openBOB", function() {
               
//             }),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "getParentSliderItem", function(e) {
//                 for (; e && (e = e.parentNode); )
//                     if (e instanceof HTMLElement && e.classList.contains(b.className))
//                         return e;
//                 return null
//             }),
//             (0,
//             u.default)((0,
//             d.default)((0,
//             d.default)(a)), "setParentZIndex", function(e) {
//                 var t = a.getParentSliderItem(a.containerNode);
//                 t && h.css({
//                     target: t,
//                     zIndex: e
//                 })
//             }),
//             a.preExpandScale = "1x2" === e.boxShape ? I : y,
//             a.scale = "1x2" === e.boxShape ? x : g,
//             a
//         }
//         return (0,
//         s.default)(t, e),
//         (0,
        // i.default)(t, [{
        //     key: "componentDidMount",
        //     value: function() {
        //         this.openBOB()
        //     }
        // }, {
        //     key: "componentWillLeave",
        //     value: function(e) {
        //         var t = this
        //           , a = this.props.onBobClose
        //           , n = !1
        //           , o = v;
        //         h.animate({
        //             target: c.findDOMNode(this),
        //             before: {
        //                 transformOrigin: "50% 50% 0",
        //                 duration: 0
        //             },
        //             scale: this.preExpandScale,
        //             duration: o,
        //             easing: "cubic-bezier(0.5, 0, 0.1, 1)",
        //             callback: function() {
        //                 n || (n = !0,
        //                 t.setParentZIndex(null),
        //                 "function" == typeof e && e())
        //             }
        //         }),
        //         h.animate({
        //             target: this.onGrowOverlayImage,
        //             before: {
        //                 display: "block"
        //             },
        //             opacity: 1,
        //             duration: o
        //         }),
        //         "function" == typeof a && a(o),
        //         this.setParentZIndex(2),
        //         setTimeout(function() {
        //             n || (n = !0,
        //             t.setParentZIndex(null),
        //             "function" == typeof e && e())
        //         }, o + 20)
        //     }
        // }, {
        //     key: "render",
        //     value: function() {
        //         var e = this
        //           , t = this.props
        //           , a = t.videoModel.id
        //           , n = t.titleCardImage
        //           , o = t.className;
        //         return f.createElement("div", {
        //             className: p("bob-card", o),
        //             key: "bob-" + a.toString(),
        //             ref: function(t) {
        //                 e.containerNode = t
        //             }
        //         }, this.props.children, f.createElement("img", {
        //             alt: "",
        //             src: n,
        //             className: "bob-title-art",
        //             ref: function(t) {
        //                 e.onGrowOverlayImage = t
        //             }
        //         }))
        //     }
        // }]),
        // t
    // }(f.Component)
    //   , B = function(e) {
    //     function t() {
    //         return (0,
    //         o.default)(this, t),
    //         (0,
    //         r.default)(this, (0,
    //         l.default)(t).apply(this, arguments))
    //     }
    //     return (0,
    //     s.default)(t, e),
    //     (0,
    //     i.default)(t, [{
            
    //     }]),
    //     t
    // }(f.Component);
    // t.exports = B
// });

import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class S extends Component{
    getParentSliderItem(e) {
        for (; e && (e = e.parentNode); )
            if (e instanceof HTMLElement && e.classList.contains(b.className))
                return e;
        return null
    }
    setParentZIndex(e) {
        var t = this.getParentSliderItem(this.containerNode);
        t && h.css({
            target: t,
            zIndex: e
        })
    }
    preExpandScale = "1x2" === e.boxShape ? I : y
    scale = "1x2" === e.boxShape ? x : g
    openBOB(){
         var e = this.props.onBobOpen
            , t = this.scale
            , n = 100 * t
            , o = (n - 100) / -2;
        a.setParentZIndex(O),
        h.animate({
            target: c.findDOMNode((0,
            d.default)((0,
            d.default)(a))),
            before: {
                transformOrigin: "",
                scale: this.preExpandScale,
                visibility: "visible",
                width: n + "%",
                height: n + "%",
                top: o + "%",
                left: o + "%"
            },
            scale: .99999,
            easing: "cubic-bezier(0.5, 0, 0.1, 1)",
            duration: v
        }),
        h.animate({
            target: this.onGrowOverlayImage,
            opacity: 0,
            duration: 1.5 * v,
            easing: "linear",
            after: {
                display: "none"
            }
        }),
        "function" == typeof e && e(t, v)
    }
    componentDidMount() {
        this.openBOB()
    }
    componentWillLeave(e) {
        var t = this
            , a = this.props.onBobClose
            , n = !1
            , o = v;
        h.animate({
            target: ReactDOM.findDOMNode(this),
            before: {
                transformOrigin: "50% 50% 0",
                duration: 0
            },
            scale: this.preExpandScale,
            duration: o,
            easing: "cubic-bezier(0.5, 0, 0.1, 1)",
            callback: function() {
                n || (n = !0,
                t.setParentZIndex(null),
                "function" == typeof e && e())
            }
        }),
        h.animate({
            target: this.onGrowOverlayImage,
            before: {
                display: "block"
            },
            opacity: 1,
            duration: o
        }),
        "function" == typeof a && a(o),
        this.setParentZIndex(2),
        setTimeout(function() {
            n || (n = !0,
            t.setParentZIndex(null),
            "function" == typeof e && e())
        }, o + 20)
    }
    render() {
        var e = this
            , t = this.props
            , a = t.videoModel.id
            , n = t.titleCardImage
            , o = t.className;
        return f.createElement("div", {
            className: p("bob-card", o),
            key: "bob-" + a.toString(),
            ref: function(t) {
                e.containerNode = t
            }
        }, this.props.children, f.createElement("img", {
            alt: "",
            src: n,
            className: "bob-title-art",
            ref: function(t) {
                e.onGrowOverlayImage = t
            }
        }))
    }
}

export default class BobCardElement extends Component{
    render() {
        var e = this.props.isBobOpen;
        return React.createElement(TransitionGroup, null, e && React.createElement(S, {
            boxShape: this.props.boxShape,
            className: this.props.className,
            videoModel: this.props.videoModel,
            titleCardImage: this.props.titleCardImage,
            getParentSliderItem: this.props.getParentSliderItem,
            onBobOpen: this.props.onBobOpen,
            onBobClose: this.props.onBobClose
        }, this.props.children))
    }
}