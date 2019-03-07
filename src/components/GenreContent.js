// C.r("6N", function(e, t, r) {
//     "use strict";
//     var a = e("9s")
//       , n = function(e) {
//         return e && e.__esModule ? e : {
//             default: e
//         }
//     }(a)
//       , s = e("dw")
//       , d = e("dW")
//       , o = e("fD")
//       , i = e("aZ")
//       , l = e("32")
//       , u = e("33")
//       , c = e("6z")
//       , h = e("2R")
//       , O = e("2S")
//       , 
//       , m = i({
//         displayName: "GenreContent",
//         contextTypes: {
//             getModelData: d.func.isRequired,
//             models: d.object.isRequired,
//             routeHandler: d.object.isRequired
//         },
        
        
        
//     });
//     t.exports = m
// });


import React,{ Component } from 'react'
import { genreConstant } from './Utils'

function R(e, t, r) {
  var a = ["genres", r.id]
    , n = 0
    , d = 0
    , o = false;
  return n = o ? O.getPaths(e, t, {
    id: r.id,
    breadCrumbs: r.breadCrumbs,
    sortOrder: r.sortOrder
  }) : u.getPaths(e, t, {
    id: r.id,
    breadCrumbs: r.breadCrumbs,
    sortOrder: r.sortOrder
  }),
    d = o && r.sortOrder === genreConstant.ARO_DEFAULT_SORT_ORDER ? h.getPaths(e, null, {
      id: r.id
    }).map(function (e) {
      return ["genres", r.id, genreConstant.ARO_DEFAULT_SORT_ORDER].concat(e)
    }) : l.getPaths(e, t, {
      sortOrder: r.sortOrder
    }).map(function (e) {
      return a.concat(e)
    }),
    d.concat(n)
}

export default class GenreContent extends Component{
  constructor(){
    super()
    this.filter = function () {
      return !0
    }
    this.statics = {
      getPaths: R,
      getBreadCrumbs: function(e) {
        var t = [];
        return e && e.bc && (t = e.bc.split(",")),
          t
      }
    }
  }

  setFilter(e) {
    this.setState({
      filter: e
    })
  }
  getFalcorModel() {
    return this.props.model.pathEvaluator
  }
  renderHeader(e, t, r) {
    if (this.context.getModelData("truths", "hasAROGallery"))
      return React.createElement("div", null);
    var a = m.getBreadCrumbs(this.context.routeHandler.query);
    return this.context.getModelData("truths", "hasAROGallery") ? React.createElement(O, {
      sortOrder: t,
      breadCrumbs: a,
      model: this.props.model.pathEvaluator,
      id: e,
      onFilterChange: this.setFilter
    }) : React.createElement(u, {
      sortOrder: t,
      breadCrumbs: a,
      model: this.props.model.pathEvaluator,
      id: e,
      onFilterChange: this.setFilter
    })
  }
  render() {
    var e = this.context.routeHandler.params.id
      , t = this.context.getModelData("truths", "hasAROGallery", !1)
      , r = t ? genreConstant.ARO_DEFAULT_SORT_ORDER : null
      , a = genreConstant.getSortOrder(this.context.routeHandler.query, r)
      , s = this.props.model.pathEvaluator.bind(["genres", e]);
    return t && a === genreConstant.ARO_DEFAULT_SORT_ORDER ? React.createElement("div", null, this.renderHeader(e, a, s), React.createElement(h, Object.assign({}, this.props, {
        genreId: e,
        model: s.bind([genreConstant.ARO_DEFAULT_SORT_ORDER]),
        sortOrder: a,
        id: e
    }))) : React.createElement(l, Object.assign({}, this.props, {
        keyPrefix: "genre",
        key: "genre-" + e,
        model: s,
        header: this.renderHeader(e, a, s),
        filter: this.state.filter,
        sortOrder: a
    }))
  }
}