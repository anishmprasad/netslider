C.r("4C", function(i, t, n) {
    "use strict";
    function e() {
        return 0 !== u.length
    }
    var s = i("eP")
      , o = i("a3")
      , a = i("ef")
      , r = i("iH")
      , p = {
        transitionend: {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "mozTransitionEnd",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd"
        },
        animationend: {
            animation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "mozAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd"
        }
    }
      , u = [];
    !function() {
        if (!r) {
            var i = document.createElement("div")
              , t = i.style;
            "AnimationEvent"in window || delete p.animationend.animation,
            "TransitionEvent"in window || delete p.transitionend.transition;
            for (var n in p)
                if (p.hasOwnProperty(n)) {
                    var e = p[n];
                    for (var s in e)
                        if (s in t) {
                            u.push(e[s]);
                            break
                        }
                }
        }
    }();
    var m = o({
        displayName: "TimeoutTransitionGroupChild",
        transition: function(i, t) {
            var n = a.findDOMNode(this);
            if (!this.isMounted() || !n)
                return void ("function" == typeof t && t());
            var s = this
              , o = this.props.name + "-" + i
              , r = o + "-active"
              , p = (this.props.leaveDelayMs || 0) + this.props.leaveTimeout
              , u = (this.props.enterDelayMs || 0) + this.props.enterTimeout
              , m = function() {
                n.classList.remove(o),
                n.classList.remove(r),
                "enter" !== i && "appear" !== i || !s.props.afterTransitionEnter ? "leave" === i && s.props.afterTransitionLeave && s.props.afterTransitionLeave(n) : s.props.afterTransitionEnter(n),
                "function" == typeof t && t()
            };
            e() ? "enter" === i || "appear" === i ? (this.props.beforeTransitionEnter && this.props.beforeTransitionEnter(n),
            this.animationTimeout = setTimeout(m, u)) : "leave" === i && (this.props.beforeTransitionLeave && this.props.beforeTransitionLeave(n),
            this.animationTimeout = setTimeout(m, p)) : m(),
            n.classList.add(o),
            "enter" !== i && "appear" !== i || !this.props.enterDelayMs ? "leave" === i && this.props.leaveDelayMs ? this.transitionLeaveTimeout = setTimeout(function() {
                s.queueClass(r)
            }, this.props.leaveDelayMs) : this.queueClass(r) : this.transitionEnterTimeout = setTimeout(function() {
                s.queueClass(r)
            }, this.props.enterDelayMs)
        },
        queueClass: function(i) {
            this.classNameQueue.push(i),
            this.timeout || (this.timeout = setTimeout(this.flushClassNameQueue, 17))
        },
        flushClassNameQueue: function() {
            this.isMounted() && this.classNameQueue.forEach(function(i) {
                a.findDOMNode(this).classList.add(i)
            }
            .bind(this)),
            this.classNameQueue.length = 0,
            this.timeout = null
        },
        componentWillMount: function() {
            this.classNameQueue = []
        },
        componentWillUnmount: function() {
            this.timeout && clearTimeout(this.timeout),
            this.animationTimeout && clearTimeout(this.animationTimeout),
            this.transitionEnterTimeout && clearTimeout(this.transitionEnterTimeout),
            this.transitionLeaveTimeout && clearTimeout(this.transitionLeaveTimeout)
        },
        componentWillAppear: function(i) {
            this.props.appear ? this.transition("appear", i) : i()
        },
        componentWillEnter: function(i) {
            this.props.enter ? this.transition("enter", i) : (this.props.beforeTransitionEnter && this.props.beforeTransitionEnter(),
            i(),
            this.props.afterTransitionEnter && this.props.afterTransitionEnter())
        },
        componentWillLeave: function(i) {
            this.props.leave ? this.transition("leave", i) : (this.props.beforeTransitionLeave && this.props.beforeTransitionLeave(),
            "function" == typeof i && i(),
            this.props.afterTransitionLeave && this.props.afterTransitionLeave())
        },
        render: function() {
            return s.Children.only(this.props.children)
        }
    });
    t.exports = m
});