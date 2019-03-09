import lodash from 'lodash'
    function GlobalFunction(){
        this._viewportRegion= null
        this._onScreen= {}
        this._onScreenElems= {}
        this._headerEl= null
        this._initialized= !1
        this._verticalScrollPosition= 0
        this._trackedElements= []
        this._isPaused= !1
    }
    GlobalFunction.prototype._isElementInRegion = function(e, t) {
            var n = e.left + (e.right - e.left) / 2
              , i = e.top + (e.bottom - e.top) / 2;
            return e.left !== e.right && t.left !== t.right && (n >= t.left && n <= t.right && i >= t.top && i <= t.bottom)
        }
    GlobalFunction.prototype._calcWindowActiveRegion = function() {
            if (!this._headerEl) {
                var e = document.querySelector(l.GLOBAL_HEADER_SELECTOR);
                this._headerEl = e
            }
            var t = o.getWindowRect();
            return {
                left: 0,
                top: this._headerEl && "fixed" === window.getComputedStyle(this._headerEl).getPropertyValue("position") ? this._headerEl.getBoundingClientRect().height : 0,
                right: t.right,
                bottom: t.bottom
            }
        }
    GlobalFunction.prototype._scanElement = function(e) {
            return !!e && this._isElementInRegion(o.getRect(e), this._viewportRegion)
        }
    GlobalFunction.prototype._extractTrackingData = function(e) {
            return JSON.parse(decodeURI(e.getAttribute("data-ui-tracking-context")))
        }
    GlobalFunction.prototype._findAllVisibleElements = function(e, t) {
            var n = this
              , r = e.filter(function(e) {
                return -1 === t.indexOf(e) && n._scanElement(e)
            }).map(function(e) {
                return e.getElementsByClassName(l.ELEMENT_SELECTOR_CLASS)
            }).reduce(function(e, t) {
                return Object.assign(e, i.mapKeys(t, function(e) {
                    return e ? e.getAttribute("data-tracking-uuid") : void 0
                }))
            }, {});
            return i.pick(r, function(e) {
                return n._scanElement(e)
            })
        }
    GlobalFunction.prototype._fullScan = function(e, t) {
            return function() {
                return t.apply(this, arguments)
            }
        }("fullScan", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = this
              , n = this._onScreen
              , r = Array.prototype.slice.call(document.getElementsByClassName(l.CONTAINER_SELECTOR_CLASS))
              , o = Array.prototype.slice.call(document.querySelectorAll("." + l.DISABLED_SECTION_SELECTOR_CLASS + " ." + l.CONTAINER_SELECTOR_CLASS))
              , c = (new Date).getTime();
            t._viewportRegion = t._calcWindowActiveRegion();
            var a = window.scrollY;
            t._verticalScrollPosition !== a && (e.yScrollDirection = t._verticalScrollPosition < a ? l.Y_SCROLL_DIRECTION.DOWN : l.Y_SCROLL_DIRECTION.UP);
            var s = t._findAllVisibleElements(r, o)
              , u = i.mapValues(s, function(e) {
                var n = t._extractTrackingData(e);
                return n.time = n.time || c,
                n
            })
              , d = Object.keys(s).filter(function(e) {
                return !n[e]
            })
              , _ = Object.keys(n).filter(function(e) {
                return !s[e]
            });
            return e.data = {
                elements: u,
                added: d,
                removed: _
            },
            t._verticalScrollPosition = a,
            t._onScreen = u,
            t._onScreenElems = s,
            e
        })
    GlobalFunction.prototype.requestScan = function(){ 
            lodash.debounce(function(e) {
                s._initialized && !s._isPaused && lodash.emit(l.FULL_SCAN, s._fullScan(e))
            }, a(l.FAST_PROPS.DEBOUNCE_MS))}
    GlobalFunction.prototype.init = function(e) {
            if (!this._initialized && !l.IN_NODE && a(l.FAST_PROPS.ACTIVE)) {
                var t = this
                  , n = function() {
                    window.addEventListener("scroll", function() {
                        t.requestScan({
                            event: l.SCAN_EVENTS.SCROLL
                        })
                    }),
                    window.addEventListener("resize", function() {
                        t.requestScan({
                            isResize: !0,
                            event: l.SCAN_EVENTS.RESIZE
                        })
                    })
                };
                "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? n() : document.addEventListener("DOMContentLoaded", n, !1),
                this._verticalScrollPosition = window.scrollY,
                this._initialized = !0
            }
        }
    GlobalFunction.prototype.pauseScanning = function() {
            this._isPaused = !0
        }
    GlobalFunction.prototype.resumeScanning = function() {
            this._isPaused = !1
        }
    GlobalFunction.prototype.registerElement = function(e, t) {
            this._trackedElements[t] = e
        }
    GlobalFunction.prototype.unregisterElement = function(e) {
            delete this._trackedElements[e]
        }
var GlobalFunctions = new GlobalFunction()
export default GlobalFunctions
    