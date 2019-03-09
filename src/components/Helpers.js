
export const Helpers = {
        getRect: function(t) {
            return t && t.getBoundingClientRect()
        },
        getWindowRect: function() {
            var t = window
              , e = t.innerWidth
              , n = t.innerHeight;
            return {
                top: 0,
                bottom: n,
                left: 0,
                right: e,
                width: e,
                height: n
            }
        },
        isElementInViewport: function(t) {
            return this.isElementInRegion(this.getRect(t), this.getWindowRect())
        },
        isElementInViewportIgnoreNoDimensions: function(t) {
            var e = this.getRect(t);
            return 0 === e.width && 0 === e.height || this.isElementInRegion(e, this.getWindowRect())
        },
        isElementInRegion: function(t, e) {
            var n = t.left + (t.right - t.left) / 2
              , i = t.top + (t.bottom - t.top) / 2;
            return t.left !== t.right && e.left !== e.right && (n >= e.left && n <= e.right && i >= e.top && i <= e.bottom)
        },
        getScrollTop: function() {
            return window.pageYOffset
        },
        getDistanceToTopOfElement: function(t) {
            var e = this.getScrollTop()
              , n = this.getWindowRect()
              , i = this.getRect(t)
              , o = e + n.height;
            return i.top + e - o
        },
        getDistanceToBottomOfElement: function(t) {
            var e = this.getScrollTop()
              , n = this.getWindowRect()
              , i = this.getRect(t)
              , o = e + n.height;
            return i.top + e + i.height - o
        },
        getTotalDocumentSize: function() {
            var t = document.documentElement ? document.documentElement.clientHeight : 0
              , e = document.documentElement ? document.documentElement.clientWidth : 0;
            return {
                height: document.body ? document.body.clientHeight : t,
                width: document.body ? document.body.clientWidth : e
            }
        },
        MIN_HORZ_SWIPE_THRESHOLD_IN_PX: 65,
        MIN_VERT_SWIPE_THRESHOLD_IN_PX: 30,
        ADVANCE_NEXT: "next",
        ADVANCE_PREV: "prev",
        deltaIndicatesAdvancement: function(t, e, _) {
            var n = (_ ? -1 : 1) * t;
            if (Math.abs(e) <= this.MIN_VERT_SWIPE_THRESHOLD_IN_PX) {
                if (n >= this.MIN_HORZ_SWIPE_THRESHOLD_IN_PX)
                    return this.ADVANCE_NEXT;
                if (n <= -this.MIN_HORZ_SWIPE_THRESHOLD_IN_PX)
                    return this.ADVANCE_PREV
            }
            return null
        },
        wheelAdvanceDirection: function(t, e) {
            var _ = Math.abs(t.deltaY);
            return "wheel" === t.type && _ <= this.MIN_VERT_SWIPE_THRESHOLD_IN_PX ? (t.stopPropagation(),
            this.deltaIndicatesAdvancement(t.deltaX, t.deltaY, e)) : null
        },
        touchAdvanceDirection: function(t, e, _) {
            var i = n.getTouchObject(t)
              , a = e ? e.x - i.clientX : 0
              , E = e ? e.y - i.clientY : 0;
            return {
                deltaX: a,
                deltaY: E,
                direction: this.deltaIndicatesAdvancement(a, E, _)
            }
        }
    };