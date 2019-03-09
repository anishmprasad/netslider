function r(t) {
        var e = function(e) {
            function o() {
                var t, e;
                (0,
                i.default)(this, o);
                for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
                    a[n] = arguments[n];
                return e = (0,
                l.default)(this, (t = (0,
                u.default)(o)).call.apply(t, [this].concat(a))),
                (0,
                p.default)((0,
                c.default)((0,
                c.default)(e)), "navigateToPlayer", function(t, o) {
                    var r = e.context.getModelData("truths")
                      , a = r.usePiPPlayer
                      , n = r.newPlaybackInPiP
                      , i = e.props.videoModel;
                    i.isPlayable && (P.navigateToPlayer({
                        videoId: i.episodeId || i.id,
                        videoModel: i,
                        history: e.context.history,
                        videoTrackingInfo: {
                            trackId: e.context.trackId,
                            rowNum: e.context.rowNum,
                            rankNum: e.context.rankNum,
                            requestId: e.context.requestId,
                            listId: e.context.listId,
                            lolomoId: e.context.lolomoId
                        },
                        startTime: o,
                        playerApp: e.context.playerApp,
                        discoveryApp: e.context.discoveryApp,
                        startWithAudioDescription: e.context.startWithAudioDescription,
                        event: t,
                        usePiPPlayer: a,
                        newPlaybackInPiP: n
                    }),
                    t.stopPropagation())
                }),
                e
            }
            return (0,
            s.default)(o, e),
            (0,
            d.default)(o, [{
                key: "render",
                value: function() {
                    return y.createElement(t, (0,
                    n.default)({
                        navigateToPlayer: this.navigateToPlayer
                    }, this.props))
                }
            }]),
            o
        }(y.Component);
        return (0,
        p.default)(e, "contextTypes", {
            rowNum: f.number,
            rankNum: f.number,
            trackId: f.number,
            requestId: f.string,
            listId: f.string,
            lolomoId: f.string,
            history: f.object.isRequired,
            getModelData: f.func.isRequired,
            playerApp: f.object,
            discoveryApp: f.object,
            startWithAudioDescription: f.bool
        }),
        e
    }