
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
        }
    };