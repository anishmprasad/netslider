C.r('bo', function(t, e, r) {
	'use strict';
	var o = t('bV'),
		n = t('b2'),
		a = t('bG'),
		i = t('bP'),
		h = o.Model.prototype._getOptimizedBoundPath;
	(o.Model.prototype._getOptimizedBoundPath = function() {
		var t = this._root.cache,
			e = this._path;
		if (!this.isSoftBound) return h.call(this);
		for (var r = [], o = t, n = void 0, a = 0; a < e.length; a++) {
			if (((n = e[a]), void 0 === (o = o[n]))) return e.slice();
			if (o.$type) {
				if ('ref' !== o.$type) return (r[r.length] = n), r;
				(r = []), (e = o.value.concat(e.slice(a + 1))), (o = t), (a = -1);
			} else r[r.length] = n;
		}
		return r;
	}),
		(o.Model.prototype.bind = function(t) {
			return this._clone({
				_path: this._path.concat(t),
				isSoftBound: !0
			});
		}),
		(o.Model.prototype.hardBind = function(t) {
			var e = this._getOptimizedBoundPath(),
				r = e.concat(t),
				o = a(this, r);
			return o && 'ref' === o.$type
				? this.deref({
						$__path: o.value,
						$__toReference: r,
						$__refPath: o.value
				  })
				: this.deref({
						$__path: r
				  });
		}),
		(o.Model.prototype.getValueSync = function(t) {
			if (!t && this._referenceContainer) return this.getBoundValue(t);
			try {
				return i.call(this, t);
			} catch (t) {
				return {
					$type: 'error',
					value: t
				};
			}
		}),
		(o.Model.prototype.setValueSync = function(t, e) {
			var r = void 0;
			(r = Array.isArray(e)
				? {
						$type: 'ref',
						value: e
				  }
				: e),
				this._setValueSync(t, r);
		}),
		(o.Model.prototype.getBoundValue = function(t, e) {
			var r = n.fromPath(t),
				o = void 0;
			o = this._path && this._path.length ? (r && r.length ? this._path.concat(r) : this._path) : r;
			try {
				return this._getBoundValue(this, o, e).value;
			} catch (t) {
				console.error(
					'getBoundValue Error: ' +
						t.message +
						' - BoundPath: [' +
						t.boundPath +
						'] - ShortedPath:' +
						t.shortedPath
				);
			}
		}),
		(e.exports = o);
});
