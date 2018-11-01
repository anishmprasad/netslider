import React,{ Component }  from 'react';
import LolomoRow from './LolomoRow'
import Row from './Row'

class FalcorPureRender extends Component{
  constructor(props){
    super(props)
    this.prevGeneration = -1;
    this.prevKey = "";
    this.customModelChangeDetector = 0;
  }
  hasFalcorPropChanged(e) {
    if (this.customModelChangeDetector) return this.customModelChangeDetector.didChange();
    var t = e.getBoundValue(),
      r = t.__generation || t.$_version,
      n = t.__key || t.$_key;
    return this.prevGeneration !== r || this.prevKey !== n
  }
  updateUniqueModelKey(e) {
    if (this.customModelChangeDetector) return this.customModelChangeDetector.updateUniqueKey();
    var t = e.getBoundValue();
    this.prevGeneration = t.__generation || t.$_version, this.prevKey = t.__key || t.$_key
  }
  isFalcorProp(e) {
    var t = e && e.getBoundValue && e.getBoundValue();
    return !!t && !(!t.__generation && !t.$_version)
  }
  haveChildrenChanged(e, t) {
    return e && t ? e.length !== t.length : e && !t || !e && t
  }
  componentDidMount() {
    r && (this.customModelChangeDetector = r(this.props));
    var e = 0;
    for (e in this.props)
      if (this.props.hasOwnProperty(e) && this.isFalcorProp(this.props[e])) return this.updateUniqueModelKey(this.props[e])
  }
  shouldComponentUpdate(e, t) {
    var r = {}, n = {}, o =  0,
      s = !1,
      h =  0,
      u =  0,
      p =  0;
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
  }
  render() {
    console.log('falcorpure',e)
    return React.createElement(e, this.props)
    // return <Row { ...this.props} />
  }
}