C.r('1_', function(a, n, i) {
	'use strict';
	var r = a('fE'),
		e = a('aP'),
		t = (a('dP'), a('9p')),
		l = a('7W'),
		c = e({
			displayName: 'LolopiIcon',
			clickAvatarClickHandler: function(a) {
				var n = this;
				return function() {
					n.props.onClick(a);
				};
			},
			render: function() {
				var a = this.props,
					n = a.icon,
					i = a.itemTabbable,
					e = a.currentAvatar,
					c = e.name === n.id,
					o = t({
						'lolopi-icon': !0,
						'lolopi-icon-disabled': c
					});
				return r.createElement(
					l,
					{
						trackingInfo: n.trackingInfo
					},
					r.createElement('button', {
						className: o,
						tabIndex: i && !c ? 0 : -1,
						'aria-hidden': !(i && !c),
						onClick: c ? null : this.clickAvatarClickHandler(n),
						style: {
							backgroundImage: "url('" + n.url + "')"
						},
						'aria-label': n.title
					})
				);
			}
		});
	n.exports = c;
});
