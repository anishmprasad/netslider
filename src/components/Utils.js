export function onBinding(arguments) {
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