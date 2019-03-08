C.r('1Z', function(e, t, n) {
	'use strict';
	var a = e('fE'),
		r = e('aP'),
		o = e('dP'),
		i = e('9p'),
		l = e('dl'),
		c = 'discovery/partials/profiles_gate',
		s = {
			changeIcon: l(c, 'manageProfile.change.icon'),
			iconCurrent: l(c, 'manageProfile.icon.current'),
			iconNew: l(c, 'manageProfile.icon.new'),
			buttonDoit: l(c, 'manageProfile.button.doit'),
			buttonNotyet: l(c, 'manageProfile.button.notyet')
		},
		m = r({
			displayName: 'LolopiConfirm',
			contextTypes: {
				getI18nString: o.func.isRequired,
				isRtl: o.bool,
				formatString: o.func.isRequired
			},
			render: function() {
				var e = this.props,
					t = e.currentAvatar,
					n = e.selectedAvatar,
					r = this.context.isRtl,
					o = i('indicator-icon', {
						'icon-leftCaret': r,
						'icon-rightCaret': !r
					}),
					l = i({
						'profile-button': !0,
						'preferred-action': !0
					});
				return a.createElement(
					'div',
					{
						className: i('centered-div', 'list-profiles-container'),
						ref: 'centeredDiv',
						style: {
							opacity: 0
						}
					},
					a.createElement(
						'div',
						{
							className: 'profile-lolopi-confirm',
							ref: 'confirm-avatar'
						},
						a.createElement('h1', null, this.context.formatString(s.changeIcon)),
						a.createElement(
							'div',
							{
								className: 'lolopi-confirm-icons'
							},
							a.createElement(
								'div',
								null,
								a.createElement('span', {
									className: 'lolopi-icon',
									style: {
										backgroundImage: "url('" + t.src + "')"
									}
								}),
								a.createElement('span', null, this.context.formatString(s.iconCurrent))
							),
							a.createElement('span', {
								className: o
							}),
							a.createElement(
								'div',
								null,
								a.createElement('span', {
									className: 'lolopi-icon',
									style: {
										backgroundImage: "url('" + n.src + "')"
									}
								}),
								a.createElement('span', null, this.context.formatString(s.iconNew))
							)
						),
						a.createElement(
							'div',
							{
								className: 'lolopi-confirm-buttons'
							},
							a.createElement(
								'span',
								{
									className: l,
									onClick: this.props.saveHandler
								},
								a.createElement('span', null, this.context.formatString(s.buttonDoit))
							),
							a.createElement(
								'span',
								{
									className: 'profile-button',
									onClick: this.props.cancelHandler
								},
								a.createElement('span', null, this.context.formatString(s.buttonNotyet))
							)
						)
					)
				);
			}
		});
	t.exports = m;
});
