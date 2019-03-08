C.r('1Y', function(e, t, a) {
	'use strict';
	var i = e('dm'),
		r = e('fE'),
		o = e('eZ'),
		n = e('dP'),
		l = e('9p'),
		s = e('j4'),
		c = e('aP'),
		d = e('4d'),
		p = e('1V'),
		f = e('1_'),
		m = e('1Z'),
		h = e('4R'),
		v = e('dl'),
		u = e('5u').TYPES,
		g = e('7H'),
		E = e('7V'),
		I = e('7s'),
		A = 'discovery/partials/profiles_gate',
		N = s.get('web.ui.profiles.max'),
		P = {
			NARROW: 4,
			MEDIUM: 6,
			WIDE: 8
		},
		S = {
			header: v(A, 'manageProfile.header'),
			chooseIcon: v(A, 'manageProfile.choose.icon')
		},
		k = c({
			displayName: 'Lolopi',
			contextTypes: {
				profileManager: n.object,
				discoveryApp: n.object.isRequired,
				getModelData: n.func.isRequired,
				getI18nString: n.func.isRequired,
				getProfileEditInProgress: n.func.isRequired,
				setProfileEditInProgress: n.func,
				routeHandler: n.object.isRequired,
				columnsInRow: n.number,
				isRtl: n.bool,
				models: n.object,
				formatString: n.func.isRequired
			},
			getDefaultProps: function() {
				return {
					lolopiData: {},
					deeplink: !1
				};
			},
			_preSelectedAvatar: null,
			endCommand: void 0,
			endFocus: void 0,
			logNavigationLevelEnd: void 0,
			getInitialState: function() {
				var e = this.context.getProfileEditInProgress();
				return {
					profileInEditProfileName: i.get(e, 'profileName', null),
					profileInEditProfileGuid: i.get(e, 'profileGuid', null),
					profileInEditAvatar: {
						src: i.get(e, 'avatarSrc', null),
						name: i.get(e, 'avatarName', null),
						trackingInfo: i.get(e, 'trackingInfo', null)
					},
					currentAvatar: {
						src: i.get(e, 'avatarSrc', null),
						name: i.get(e, 'avatarName', null),
						trackingInfo: i.get(e, 'trackingInfo', null)
					},
					avatarHasChanged: !1,
					avatarId: this.context.routeHandler.query.iconId || this.context.routeHandler.params.iconId || ''
				};
			},
			componentDidMount: function() {
				this.logNavigationLevelEnd = this.props.logNavigationLevel('editProfileAvatar');
				var e = o.findDOMNode(this.refs.lolopi);
				e && e.addEventListener('scroll', this.onScroll),
					this._preSelectedAvatar && this.selectAvatar(this._preSelectedAvatar);
			},
			componentWillUnmount: function() {
				var e = o.findDOMNode(this.refs.lolopi);
				e && e.removeEventListener('scroll', this.onScroll), this.endLogging();
			},
			onScroll: function() {
				I.requestScan();
			},
			endLogging: function() {
				this.endCommand && (this.endCommand(), delete this.endCommand),
					this.endFocus && (this.endFocus(), delete this.endFocus),
					this.logNavigationLevelEnd && (this.logNavigationLevelEnd(), delete this.logNavigationLevelEnd);
			},
			saveFromDeeplink: function() {
				var e = this,
					t = this.state.profileInEditAvatar.name,
					a = this.state.profileInEditProfileGuid;
				h(this.context.discoveryApp.getActionCreators(), {
					start: u.editProfile,
					success: u.editProfileSuccess,
					failure: u.editProfileFailed
				})
					.dispatchStartAction({
						profileGuid: a,
						desiredSettings: {
							avatarName: t
						}
					})
					.wrapObservable(
						this.props.newProfile.call(
							['edit'],
							[null, null, null, t, null],
							[],
							[
								['profilesList', 'summary'],
								[
									'profilesList',
									{
										to: N
									},
									'summary'
								],
								[
									'profilesList',
									{
										to: N
									},
									'avatar',
									'images',
									'byWidth',
									320
								]
							]
						)
					)
					.subscribe(function() {
						e.context.profileManager.openProfileList();
					});
			},
			goBack: function(e) {
				e.preventDefault(),
					(this.endCommand = this.props.logCommand('BackCommand')),
					this.props.deeplink
						? this.context.profileManager.closeGate()
						: this.context.profileManager.openEditProfile(this.props.newProfile),
					this.endLogging();
			},
			selectAvatar: function(e) {
				(this.endFocus = this.props.logFocus('profileAvatar', e.trackingInfo)),
					this.setState({
						profileInEditAvatar: {
							name: e.id,
							src: e.url,
							trackingInfo: e.trackingInfo
						},
						avatarHasChanged: !0
					}),
					this.endLogging();
			},
			cancelProfileConfirm: function() {
				this.setState({
					profileInEditAvatar: {
						name: this.state.currentAvatar.name,
						src: this.state.currentAvatar.src,
						trackingInfo: null
					},
					avatarHasChanged: !1
				});
			},
			saveAvatar: function(e) {
				var t = this.context.getProfileEditInProgress();
				(t.avatarName = this.state.profileInEditAvatar.name),
					(t.avatarSrc = this.state.profileInEditAvatar.src),
					(t.trackingInfo = this.state.profileInEditAvatar.trackingInfo),
					(this.endCommand = this.props.logCommand('ChangeValueCommand', {
						desiredValue: t.avatarName
					})),
					this.context.discoveryApp.getActionCreators().confirmAvatar({
						trackingInfo: t.trackingInfo
					}),
					this.context.setProfileEditInProgress(t),
					this.props.deeplink
						? (this.context.discoveryApp.getActionCreators().avatarDeeplink(), this.saveFromDeeplink())
						: this.context.profileManager.openEditProfile(this.props.newProfile),
					this.endLogging();
			},
			getSliderInfo: function() {
				return this.context.columnsInRow < 3
					? {
							items: P.NARROW,
							clazz: 'lolopi-row-narrow'
					  }
					: this.context.columnsInRow < 5
					? {
							items: P.MEDIUM,
							clazz: 'lolopi-row-medium'
					  }
					: {
							items: P.WIDE,
							clazz: 'lolopi-row-wide'
					  };
			},
			getAvatarRow: function(e, t) {
				for (var a = [], i = this.getSliderInfo(), o = 0; o < e.icons.length; o++) {
					var n = this.state.avatarId,
						l = n,
						s = n.length > 35,
						c = e.icons[o].id.indexOf(n) >= 0;
					l && s && c && (this._preSelectedAvatar = e.icons[o]),
						a.push(
							r.createElement(f, {
								onClick: this.selectAvatar,
								icon: e.icons[o],
								key: e.icons[o].id,
								currentAvatar: this.state.currentAvatar
							})
						);
				}
				return r.createElement(
					'li',
					{
						className: 'lolopi-row slider-hover-trigger-layer ' + i.clazz,
						key: 'lolopi-row-' + t
					},
					r.createElement(
						g,
						null,
						r.createElement(
							'h2',
							{
								className: 'row-header'
							},
							e.rowIcon
								? r.createElement('div', {
										className: 'lolopi-row-icon',
										style: {
											backgroundImage: "url('" + e.rowIcon + "')"
										},
										'aria-label': e.rowTitle
								  })
								: r.createElement(
										'div',
										{
											className: 'lolopi-row-text'
										},
										e.rowTitle
								  )
						),
						r.createElement(
							d,
							{
								itemsInRow: i.items,
								totalItems: a.length,
								enableLooping: !0,
								enablePeek: !0,
								showEmptyHandles: !0,
								sliderHandleNextString: 'See more icons',
								sliderHandlePrevString: 'See previous icons'
							},
							a
						)
					)
				);
			},
			renderLolopi: function(e) {
				var t = this.state,
					a = t.profileInEditAvatar,
					i = t.profileInEditProfileName,
					o = this.context.isRtl,
					n = l({
						'close-button': !0,
						'icon-back': !0,
						'icon-reverse': o
					});
				return r.createElement(
					'div',
					{
						className: l('centered-div', 'list-profiles-container'),
						ref: 'centeredDiv',
						style: {
							opacity: 0
						}
					},
					r.createElement(
						'div',
						{
							className: 'profile-lolopi-header',
							ref: 'lolopi'
						},
						r.createElement(
							'div',
							{
								className: 'lolopi-go-back'
							},
							r.createElement(
								'button',
								{
									className: 'nf-modal-dismiss-btn',
									onClick: this.goBack,
									'aria-label': 'close',
									tabIndex: '1'
								},
								r.createElement('span', {
									className: n
								})
							),
							r.createElement(
								'div',
								{
									className: 'lolopi-header'
								},
								r.createElement(
									'h1',
									{
										className: 'header-text'
									},
									this.context.formatString(S.header)
								),
								r.createElement(
									'h2',
									{
										className: 'sub-header-text'
									},
									this.context.formatString(S.chooseIcon)
								)
							)
						),
						r.createElement(
							'div',
							{
								className: 'lolopi-profile'
							},
							r.createElement(
								'span',
								{
									className: 'lolopi-profile-name'
								},
								i
							),
							r.createElement(p, {
								profileAvatarSrc: a.src
							})
						)
					),
					r.createElement(
						'div',
						{
							className: 'profile-lolopi-container',
							ref: 'lolopi'
						},
						r.createElement(
							'ul',
							{
								className: 'list-container'
							},
							e
						)
					)
				);
			},
			renderConfirm: function() {
				var e = this._preSelectedAvatar ? this._preSelectedAvatar : this.state.profileInEditAvatar;
				return r.createElement(m, {
					currentAvatar: this.state.currentAvatar,
					selectedAvatar: e,
					cancelHandler: this.cancelProfileConfirm,
					saveHandler: this.saveAvatar
				});
			},
			render: function() {
				var e = this.props.lolopiData,
					t = this.state.avatarHasChanged;
				if (!this.context.getModelData('truths', 'showLolopi')) return null;
				for (var a = [], i = 0; i < e.length; i++) a.push(this.getAvatarRow(e[i], i));
				return this._preSelectedAvatar || t ? this.renderConfirm() : this.renderLolopi(a);
			}
		});
	t.exports = E(k);
});
