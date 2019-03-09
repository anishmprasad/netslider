// C.r("0f", function(t, s, r) {
//     "use strict";
//     var e = t("cC")
//       , o = t("eP")
//       , a = t("d3")
//       , i = t("a3")
//       , n = t("0d")
//       , p = t("7K")
//       , l = i({
//         displayName: "StoryArt",
//         contextTypes: {
//             models: a.object.isRequired
//         },
//         statics: {
//             getPaths: function(t, s, r) {
//                 var e = p.getExtensionForOpaqueImage(t);
//                 return [["storyArt", r.size, e]]
//             }
//         },
//         getImageFocalPoint: function(t) {
//             var s, r = t.focalPoint;
//             if (!this.props.focalPointData || !r)
//                 return null;
//             try {
//                 s = JSON.parse(r),
//                 s = s && s.x
//             } catch (t) {}
//             return s && e.assign({
//                 x: s
//             }, this.props.focalPointData)
//         },
//         getBackgroundImage: function() {
//             var t = []
//               , s = []
//               , r = this.props.model
//               , e = p.getExtensionForOpaqueImage(this.context.models)
//               , o = r.getValueSync(["storyArt", this.props.size, e]);
//             return o && o.url && (t.push(o.url),
//             s.push(this.getImageFocalPoint(o))),
//             {
//                 urls: t,
//                 focalPoints: s
//             }
//         },
//         render: function() {
//             var t = this.getBackgroundImage();
//             return o.createElement(n, {
//                 auto: this.props.auto,
//                 firstDelay: this.props.firstDelay,
//                 stop: this.props.stop,
//                 duration: this.props.duration,
//                 images: t.urls,
//                 focalPoints: this.props.focalPointData && t.focalPoints,
//                 preloadImage: this.props.preloadImage,
//                 setCurrentImgUrlCallback: this.props.setCurrentImgUrlCallback,
//                 style: this.props.style,
//                 className: this.props.className
//             }, this.props.children)
//         }
//     });
//     s.exports = l
// });

import React from 'react'
export default class StoryArt extends Component{
    getImageFocalPoint(t) {
            var s, r = t.focalPoint;
            if (!this.props.focalPointData || !r)
                return null;
            try {
                s = JSON.parse(r),
                s = s && s.x
            } catch (t) {}
            return s && e.assign({
                x: s
            }, this.props.focalPointData)
        }
        getBackgroundImage() {
            var t = []
              , s = []
              , r = this.props.model
              , e = p.getExtensionForOpaqueImage(this.context.models)
              , o = r.getValueSync(["storyArt", this.props.size, e]);
            return o && o.url && (t.push(o.url),
            s.push(this.getImageFocalPoint(o))),
            {
                urls: t,
                focalPoints: s
            }
        }
        render() {
            var t = this.getBackgroundImage();
            return React.createElement(n, {
                auto: this.props.auto,
                firstDelay: this.props.firstDelay,
                stop: this.props.stop,
                duration: this.props.duration,
                images: t.urls,
                focalPoints: this.props.focalPointData && t.focalPoints,
                preloadImage: this.props.preloadImage,
                setCurrentImgUrlCallback: this.props.setCurrentImgUrlCallback,
                style: this.props.style,
                className: this.props.className
            }, this.props.children)
        }
    });
}