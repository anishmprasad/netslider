/* eslint-disable */

import lodash from 'lodash';
// import { l } from './constants';
const l = {};

function GlobalFunction() {
	this._viewportRegion = null;
	this._onScreen = {};
	this._onScreenElems = {};
	this._headerEl = null;
	this._initialized = !1;
	this._verticalScrollPosition = 0;
	this._trackedElements = [];
	this._isPaused = !1;
}
GlobalFunction.prototype._isElementInRegion = function(e, t) {
	var n = e.left + (e.right - e.left) / 2,
		i = e.top + (e.bottom - e.top) / 2;
	return e.left !== e.right && t.left !== t.right && (n >= t.left && n <= t.right && i >= t.top && i <= t.bottom);
};
GlobalFunction.prototype._calcWindowActiveRegion = function() {
	if (!this._headerEl) {
		var e = document.querySelector(l.GLOBAL_HEADER_SELECTOR);
		this._headerEl = e;
	}
	var t = o.getWindowRect();
	return {
		left: 0,
		top:
			this._headerEl && 'fixed' === window.getComputedStyle(this._headerEl).getPropertyValue('position')
				? this._headerEl.getBoundingClientRect().height
				: 0,
		right: t.right,
		bottom: t.bottom
	};
};
GlobalFunction.prototype._scanElement = function(e) {
	return !!e && this._isElementInRegion(o.getRect(e), this._viewportRegion);
};
GlobalFunction.prototype._extractTrackingData = function(e) {
	return JSON.parse(decodeURI(e.getAttribute('data-ui-tracking-context')));
};
GlobalFunction.prototype._findAllVisibleElements = function(e, t) {
	var n = this,
		r = e
			.filter(function(e) {
				return -1 === t.indexOf(e) && n._scanElement(e);
			})
			.map(function(e) {
				return e.getElementsByClassName(l.ELEMENT_SELECTOR_CLASS);
			})
			.reduce(function(e, t) {
				return Object.assign(
					e,
					i.mapKeys(t, function(e) {
						return e ? e.getAttribute('data-tracking-uuid') : void 0;
					})
				);
			}, {});
	return i.pick(r, function(e) {
		return n._scanElement(e);
	});
};
GlobalFunction.prototype._fullScan = (function(e, t) {
	return function() {
		return t.apply(this, arguments);
	};
})('fullScan', function() {
	var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
		t = this,
		n = this._onScreen,
		r = Array.prototype.slice.call(document.getElementsByClassName(l.CONTAINER_SELECTOR_CLASS)),
		o = Array.prototype.slice.call(
			document.querySelectorAll('.' + l.DISABLED_SECTION_SELECTOR_CLASS + ' .' + l.CONTAINER_SELECTOR_CLASS)
		),
		c = new Date().getTime();
	t._viewportRegion = t._calcWindowActiveRegion();
	var a = window.scrollY;
	t._verticalScrollPosition !== a &&
		(e.yScrollDirection = t._verticalScrollPosition < a ? l.Y_SCROLL_DIRECTION.DOWN : l.Y_SCROLL_DIRECTION.UP);
	var s = t._findAllVisibleElements(r, o),
		u = i.mapValues(s, function(e) {
			var n = t._extractTrackingData(e);
			return (n.time = n.time || c), n;
		}),
		d = Object.keys(s).filter(function(e) {
			return !n[e];
		}),
		_ = Object.keys(n).filter(function(e) {
			return !s[e];
		});
	return (
		(e.data = {
			elements: u,
			added: d,
			removed: _
		}),
		(t._verticalScrollPosition = a),
		(t._onScreen = u),
		(t._onScreenElems = s),
		e
	);
});
GlobalFunction.prototype.requestScan = function() {
	lodash.debounce(function(e) {
		s._initialized && !s._isPaused && lodash.emit('pt:fullscan', s._fullScan(e));
	});
};
GlobalFunction.prototype.init = function(e) {
	if (!this._initialized && !l.IN_NODE && a(l.FAST_PROPS.ACTIVE)) {
		var t = this,
			n = function() {
				window.addEventListener('scroll', function() {
					t.requestScan({
						event: l.SCAN_EVENTS.SCROLL
					});
				}),
					window.addEventListener('resize', function() {
						t.requestScan({
							isResize: !0,
							event: l.SCAN_EVENTS.RESIZE
						});
					});
			};
		'complete' === document.readyState || 'loaded' === document.readyState || 'interactive' === document.readyState
			? n()
			: document.addEventListener('DOMContentLoaded', n, !1),
			(this._verticalScrollPosition = window.scrollY),
			(this._initialized = !0);
	}
};
GlobalFunction.prototype.pauseScanning = function() {
	this._isPaused = !0;
};
GlobalFunction.prototype.resumeScanning = function() {
	this._isPaused = !1;
};
GlobalFunction.prototype.registerElement = function(e, t) {
	this._trackedElements[t] = e;
};
GlobalFunction.prototype.unregisterElement = function(e) {
	delete this._trackedElements[e];
};
var GlobalFunctions = new GlobalFunction();
export default GlobalFunctions;

function bt(r, t, e) {
	// var s = aZ()
	//   , a = s.getWithPathsAsJSONGraph
	//   , o = s.getWithPathsAsPathMap;
	return function(r, t, e, s, n, h, i) {
		// var l = n ? a(r, t, h) : o(r, t, h)
		var u = l.values && l.values[0],
			c = !l.requestedMissingPaths || !l.requestedMissingPaths.length || !r._source;
		if (l.errors) for (var g = l.errors, v = i.length, f = 0, P = g.length; f < P; ++f, ++v) i[v] = g[f];
		if (s || (((s && l.hasValues) || !s) && c && void 0 !== u))
			try {
				// x.onNext(u)
			} catch (r) {
				throw r;
			}
		return l.criticalError
			? (e.onError(l.criticalError), null)
			: c
			? (i.length ? e.onError(i) : e.onCompleted(), null)
			: l;
	};
}

function aZ(a, t, e) {
	// var h = a("aS")
	//   , s = a("b7")
	//   , g = h(s, !1)
	//   , n = h(s, !0);
	return {
		getValueSync: a('aX'),
		getBoundValue: a('aT'),
		getWithPathsAsPathMap: g,
		getWithPathsAsJSONGraph: n
	};
}

function x(o, n, t) {
	this._observer =
		o && 'object' == typeof o
			? {
					onNext:
						'function' == typeof o.onNext
							? function(n) {
									o.onNext(n);
							  }
							: r,
					onError:
						'function' == typeof o.onError
							? function(n) {
									o.onError(n);
							  }
							: r,
					onCompleted:
						'function' == typeof o.onCompleted
							? function() {
									o.onCompleted();
							  }
							: r
			  }
			: {
					onNext: 'function' == typeof o ? o : r,
					onError: 'function' == typeof n ? n : r,
					onCompleted: 'function' == typeof t ? t : r
			  };
}
// var r = o("ca");
x.prototype = {
	onNext: function(o) {
		this._closed || this._observer.onNext(o);
	},
	onError: function(o) {
		this._closed || ((this._closed = !0), this._observer.onError(o));
	},
	onCompleted: function() {
		this._closed || ((this._closed = !0), this._observer.onCompleted());
	}
};
