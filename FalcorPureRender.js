C.r("6m", function (e, t, r) {
  "use strict";

  function n(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.modelChangeDetector,
      n = u({
        displayName: "FalcorPureRender(" + (e.displayName || "") + ")",
        prevGeneration: -1,
        prevKey: "",
        customModelChangeDetector: void 0,
        statics: {
          Component: e
        },
        hasFalcorPropChanged: function (e) {
          if (this.customModelChangeDetector) return this.customModelChangeDetector.didChange();
          var t = e.getBoundValue(),
            r = t.__generation || t.$_version,
            n = t.__key || t.$_key;
          return this.prevGeneration !== r || this.prevKey !== n
        },
        updateUniqueModelKey: function (e) {
          if (this.customModelChangeDetector) return void this.customModelChangeDetector.updateUniqueKey();
          var t = e.getBoundValue();
          this.prevGeneration = t.__generation || t.$_version, this.prevKey = t.__key || t.$_key
        },
        isFalcorProp: function (e) {
          var t = e && e.getBoundValue && e.getBoundValue();
          return !!t && !(!t.__generation && !t.$_version)
        },
        haveChildrenChanged: function (e, t) {
          return e && t ? e.length !== t.length : e && !t || !e && t
        },
        componentDidMount: function () {
          r && (this.customModelChangeDetector = r(this.props));
          var e = void 0;
          for (e in this.props)
            if (this.props.hasOwnProperty(e) && this.isFalcorProp(this.props[e])) return void this.updateUniqueModelKey(this.props[e])
        },
        shouldComponentUpdate: function (e, t) {
          var r = {}, n = {}, o = void 0,
            s = !1,
            h = void 0,
            u = void 0,
            p = void 0;
          for (o in e)
            if (e.hasOwnProperty(o))
              if (this.isFalcorProp(e[o])) {
                if (this.hasFalcorPropChanged(this.props[o])) return this.updateUniqueModelKey(this.props[o]), !0
              } else if ("children" === o) {
                if (this.haveChildrenChanged(this.props.children, e.children)) return !0
              } else if ("object" === (0, i.
                default)(e[o]) && "object" === (0, i.
                  default)(this.props[o])) {
                u = e[o], p = this.props[o];
                for (h in u)
                  if (u.hasOwnProperty(h) && (!p.hasOwnProperty(h) || u[h] !== p[h])) return !0;
                for (h in p)
                  if (p.hasOwnProperty(h) && !u.hasOwnProperty(h)) return !0
              } else r[o] = this.props[o], n[o] = e[o];
          return (Object.keys(r).length > 0 || Object.keys(this.state).length > 0) && (s = !a(r, n) || !a(this.state, t)), s
        },
        render: function () {
          return s.createElement(e, this.props)
        }
      });
    return h(n, e, {
      Component: !0
    }), n
  }
  var o = e("9n"),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(o),
    s = e("fE"),
    h = (e("dP"), e("dh")),
    a = e("dg"),
    u = e("aP");
  t.exports = n
});