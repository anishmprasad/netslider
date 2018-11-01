export function onBinding() {
  for (var n = [], i = 0; i < arguments.length; i++) {
    var t = arguments[i];
    if (t) {
      var f = typeof t;
      if ("string" === f || "number" === f) n.push(t);
      else if (Array.isArray(t)) n.push(e.apply(null, t));
      else if ("object" === f)
        for (var o in t) r.call(t, o) && t[o] && n.push(o)
    }
  }
  return n.join(" ")
}

export function getModelData(t, e, o) {
  if (u) return u.getModelData(t, e, o);
  var a = n.get(r, ["reactContext", "models", t, "data"]);
  return e ? n.get(a, e, o) : a
}
export function getModels() {
  return u ? u.getModels() : n.get(r, ["reactContext", "models"])
}
export function getAB() {
  return u ? u.getAB() : a.evaluate(this.getModelData("ab") || {})
}
export function getCookieDough() {
  return u ? u.getCookieDough() : new g
}