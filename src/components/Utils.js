export function onBinding() {
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

export function getModelData(t, e, o) {
  if (u) return u.getModelData(t, e, o);
  var a = n.get(r, ["reactContext", "models", t, "data"]);
  return e ? n.get(a, e, o) : a
}
export function getModels() {
  return u ? u.getModels() : n.get(r, ["reactContext", "models"])
}
export function getAB() {
  return u ? u.getAB() : a.evaluate(this.getModelData("ab") || {})
}
export function getCookieDough() {
  return u ? u.getCookieDough() : new g
}

class sharedUtils {
  constructor(){
    this.addedPlaybackHooks = !1;
    this.currentTab = !1;
    this.profileTimeout = null;
    this.profileIntervalPlayback = null;
    this.updateProfileGateAppStateInReact = null;
    this.context = null;
    // this.redirectPageAfterSwitch = d.browse.makePath(),
  }


  resetProfileGateCookieExpiry() {
    var e = this,
      t = f.get(h.getModelData("userInfo"), "numProfiles"),
      i = f.get(h.getModelData("userInfo"), "isKids"),
      o = t >= y && !i,
      a = f.get(window, "netflix.reactContext.models.truths.data", !1);
    clearTimeout(this.profileTimeout), r(this.profileIdleTimeout("s")), this.profileTimeout = setTimeout(function () {
      o && (m.closeOpenModal(), e.setActiveView(_.LIST), a.inAppNotificationsPollingEnabled && w.fetchNew())
    }, this.profileIdleTimeout("ms"))
  }
  setProfileEditStorageData() {
    try {
      localStorage.setItem(O, Math.random())
    } catch (e) { }
    return this.currentTab = !0, !0
  }
  enableProfileGateSessionTracking() {
    this.profileGateSessionTrackingIsEnabled || (this.throttledResetProfileGateCookieExpiry || (this.throttledResetProfileGateCookieExpiry = f.throttle(this.resetProfileGateCookieExpiry.bind(this), k)), this.resetProfileGateCookieExpiry(), clearTimeout(this.profileIntervalPlayback), window.addEventListener("keydown", this.throttledResetProfileGateCookieExpiry, !1), window.addEventListener("mousemove", this.throttledResetProfileGateCookieExpiry, !1), this.profileGateSessionTrackingIsEnabled = !0)
  }
  disableProfileGateSessionTracking() {
    this.profileGateSessionTrackingIsEnabled && (clearTimeout(this.profileTimeout), clearTimeout(this.profileIntervalPlayback), a(), this.throttledResetProfileGateCookieExpiry.cancel(), window.removeEventListener("keydown", this.throttledResetProfileGateCookieExpiry, !1), window.removeEventListener("mousemove", this.throttledResetProfileGateCookieExpiry, !1), this.profileGateSessionTrackingIsEnabled = !1)
  }
  pauseProfileGateSessionTracking() {
    clearTimeout(this.profileTimeout), window.removeEventListener("keydown", this.throttledResetProfileGateCookieExpiry, !1), window.removeEventListener("mousemove", this.throttledResetProfileGateCookieExpiry, !1), this.profileIntervalPlayback = setInterval(this.resetProfileGateCookieExpiry.bind(this), g)
  }
  updateProfileGateAppState(e) {
    var t = e && e.activeView;
    void 0 !== t && (s({
      activeView: t
    }) ? this.disableProfileGateSessionTracking() : this.enableProfileGateSessionTracking()), "function" == typeof this.updateProfileGateAppStateInReact && e && this.updateProfileGateAppStateInReact(e)
  }
  switchProfile(i, a) {
    var n = this,
      s = i.getValueSync(["summary"]) || null;
    if (s && !s.isActive) this.updateProfileGateAppState({
      activeView: _.LOAD_PROFILE,
      newProfile: i
    }), A(t.getActionCreators(), {
      start: T.switchProfile,
      success: T.switchProfileSuccess,
      failure: T.switchProfileFailed
    }).dispatchStartAction(s).wrapObservable(o(e, i)).subscribe(function (e) {
      return n.onProfileSwitchSuccess(i, a, e)
    }, function () {
      return n.onProfileSwitchFailure(i)
    });
    else if (a) this.closeGate(), r(this.profileIdleTimeout("s")), E.pushState(a);
    else if (s && s.showOnRamp) {
      r(this.profileIdleTimeout("s"));
      var l = f.get(window, "netflix.reactContext.models.truths.data", {});
      l.inProfileOnrampAATest ? window.document.location = d.profilesSetup.makePath() : window.document.location = d.onRamp.makePath()
    } else this.redirectPageAfterSwitch = d.browse.makePath(), this.closeGate()
  }
  onProfileSwitchSuccess(e, t, o) {
    var a = e.getValueSync(["summary"]);
    if (i.getActionCreators().clearPinSessions(), this.setProfileEditStorageData(), r(this.profileIdleTimeout("s")), t) document.location.href = t;
    else {
      if (o.showOnRamp) return f.get(window, "netflix.reactContext.models.truths.data", {}).inProfileOnrampAATest ? window.document.location = d.profilesSetup.makePath() : window.document.location = d.onRamp.makePath(), !0;
      if (a.isKids) return location.href = d.kidsHome.makePath(), !0;
      document.location.href = this.redirectPageAfterSwitch
    }
    return !0
  }
  onProfileSwitchFailure(e) {
    this.updateProfileGateAppState({
      activeView: _.LOAD_PROFILE_ERROR,
      newProfile: e
    })
  }
  setActiveView(e) {
    this.updateProfileGateAppState({
      activeView: e
    })
  }
  openProfileList() {
    this.setActiveView(_.LIST)
  }
  openEditList() {
    this.setActiveView(_.MANAGE_PROFILES)
  }
  openCreateProfile(e, t) {
    t = t || {}, this.updateProfileGateAppState({
      activeView: _.CREATE_PROFILE,
      previousView: e,
      createKidsProfile: t.createKidsProfile,
      nextView: t.nextView,
      copyViewingHistory: t.copyViewingHistory,
      deleteViewingHistory: t.deleteViewingHistory,
      forceProfileGate: !0
    })
  }
  openEditProfile(e) {
    this.updateProfileGateAppState({
      activeView: _.UPDATE_PROFILE,
      newProfile: e
    })
  }
  openSelectAvatar(e) {
    this.updateProfileGateAppState({
      activeView: _.SELECT_AVATAR,
      newProfile: e
    })
  }
  openDeleteProfile(e) {
    this.updateProfileGateAppState({
      activeView: _.DELETE_PROFILE,
      newProfile: e
    })
  }
  closeGate() {
    v.closedProfileGate(), this.setActiveView(_.CLOSED)
  }
  profileIdleTimeout(e) {
    var t = I;
    switch (e) {
      case "s":
        return t * G;
      case "ms":
        return t * g;
      case "m":
      default:
        return t
    }
  }
  startEventListeners(e, i, o) {
    var r = u.get("netflix.ui.akira.enable.crossTab.profile.updation") || !1,
      a = this;
    this.updateProfileGateAppStateInReact = e, this.models = o, P || (r && window.addEventListener("storage", function (e) {
      "profile-edit" !== e.key || a.currentTab ? "profile-edit" === e.key && (a.currentTab = !1) : window.location.reload()
    }), p.on(R.PLAYBACK_START, this.pauseProfileGateSessionTracking.bind(this)), p.on(R.PLAYBACK_END, this.enableProfileGateSessionTracking.bind(this)), s(i) ? this.redirectPageAfterSwitch = window.location.pathname + window.location.search : this.enableProfileGateSessionTracking(), window.addEventListener("beforeunload", function () {
      var e = t.getActionCreators();
      e && e.receivePageUnloading && e.receivePageUnloading()
    }))
  }
}

export const profileManager = new sharedUtils();
