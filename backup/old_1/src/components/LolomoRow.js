/**eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import TitleCardContainer from './TitleCardContainer';
import aclass from './ModalGlobalFunctions';

const constant = {
	LIST_CONTEXTS: {
		CONTINUE_WATCHING: 'continueWatching',
		SUGGESTION_GALLERY: 'suggestionsForYouGallery',
		SUGGESTION_ROW: 'galleryDisplayAsRow',
		BILLBOARD: 'billboard',
		SOCIAL_POPULAR: 'socialPopular',
		RATE_MOVIES: 'rateMovies',
		BIG_ROW: 'bigRow',
		NETFLIX_ORIGINALS: 'netflixOriginals',
		SIMILIARS: 'similars',
		MY_LIST: 'queue',
		CHARACTER_ROW: 'character',
		WATCHLIST: 'watchlist',
		SHORT_FORM: 'shortForm'
	},
	LIST_TYPES: {
		FLAT: 'flat',
		COMPOSITE: 'composite'
	},
	LAZY_LOADING: {
		IMAGES: 6
	}
};
function queue(e, t) {
	return (
		(t = t || 10),
		setTimeout(function() {
			e();
		}, t)
	);
}
function cancelQueuedItem(e) {
	clearTimeout(e);
}

export default class LolomoRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullDataLoaded: !1
		};
		this.getLoadedItemModelsx = [
			{ model: { $type: 'ref', value: ['lolomo', 9, 0] }, id: 60020549 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 1] }, id: 80084088 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 2] }, id: 70065124 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 3] }, id: 80023638 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 4] }, id: 70108778 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 5] }, id: 70058021 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 6] }, id: 70054920 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 7] }, id: 70128681 },
			{ model: { $type: 'ref', value: ['lolomo', 9, 7] }, id: 80115328 }
		];
	}
	getChildContext() {
		var e = this.getTrackIds();
		return {
			requestId: 'c7cbdd2c-10df-43e9-a73b-f46c056c17e4-373134675  ',
			trackId: e.trackId,
			jawBoneTrackId: e.trackId_jaw,
			jawBoneEpisodeTrackId: e.trackId_jawEpisode,
			jawBoneTrailerTrackId: e.trackId_jawTrailer,
			listContext: 'similars',
			listId: 'e85b5860-e170-47d7-a5c0-4d3b06d6c556_46833015X29X70099790X1541349833938',
			listType: 'flat',
			isTallRow: false,
			impressionToken: this.props.model.getValueSync(['impressionToken'])
		};
	}
	componentDidMount() {
		var e = this.context.renderTracker;
		if (e) {
			var t = e.startSession('lolomoRow' + this.props.rowNum);
			u.trackBySelectors(['.boxart-image'])
				.then(function() {
					e.endSession(t);
				})
				.catch(function(o) {
					e.endSession(t, o);
				});
		}
	}
	getVideoPath(e) {
		return this.props.videoRoot ? [this.props.videoRoot].concat(e) : e;
	}
	getId() {
		var e = this.props.model,
			t = e.getValueSync(['genreId']),
			o = e.getValueSync(['videoId']);
		return t || (o || null);
	}
	getTrackIds() {
		return {
			trackId: 14232618,
			trackId_jaw: 14232467,
			trackId_jawEpisode: 14232620,
			trackId_jawTrailer: 14232622
		};
	}
	getTitles() {
		var e = this,
			// t = this.props.model,
			// o = !!t.getValueSync(["isTallRow"]),
			i = false,
			r = this.props.rowNum,
			s = {};
		return {
			titleList: this.getLoadedItemModelsx.map(function(t, o) {
				var a = t.id,
					l = 'title_' + a + '_' + r + '_' + o;
				s[a] = o;
				try {
					return React.createElement(TitleCardContainer, {
						key: l,
						model: t.model,
						rowNum: r,
						rankNum: o,
						videoId: a,
						isTallPanel: i,
						videoRoot: e.props.videoRoot
					});
				} catch (e) {
					console.log('slider render error: ', o, e);
				}
				return null;
			}),
			orderedItemList: s
		};
	}
	getLoadedItemModels() {
		for (var e = this.props.model, t = e.getValueSync('length'), o = [], i = void 0, r = void 0, s = 0; s < t; s++)
			(i = e.bind([s])),
				(r = i.getValueSync(this.getVideoPath(['summary']))) &&
					r.id &&
					o.push({
						model: i,
						id: r.id
					});
		return o;
	}
	getRowItems() {
		var e = [],
			t = this.getTitles();
		var orderedItemList = {
			70142436: 5,
			70254851: 4,
			70264888: 6,
			80002479: 0,
			80074249: 2,
			80130521: 3,
			80213025: 7,
			80235864: 1
		};
		// console.log(this.getTitles())
		return {
			rowItems: e.concat(t.titleList).slice(0, 100),
			orderedItemList: t.orderedItemList || {}
		};
	}
	getTotalItemsInRow() {
		var e = this.props.model,
			t = e.getValueSync(['length']);
		return t > 100 && (t = 100), t;
	}
	sliderMovePqls() {
		if (this.props.sliderMovePqls) return this.props.sliderMovePqls;
		var e = this.context.models,
			t = {},
			o = L.defaultSliderMoveStrategy;
		return (
			m.isRichOriginalsRow(this.props.model.getValueSync(['isTallRow']), this.context.models.truths) &&
				(t.tallPanelBoxart = !0),
			j(e, o, t)
		);
	}
	handleSliderMove = () => {
		var e = this;
		this.state.fullDataLoaded ||
			((this.state.fullDataLoaded = !0),
			queue(function() {
				var t;
				return aclass.subscribe(
					function() {},
					function() {
						return e.forceUpdate();
					},
					function() {
						return e.forceUpdate();
					}
				);
			}));
	};
	render() {
		var e = this.props.model,
			t = false,
			o = false,
			i = {
				lolomoRow: !0,
				lolomoRow_title_card: !0,
				jawBoneOpen: this.props.showJawBone,
				'originals-panels-row': o
			},
			r = this.props.jawBoneRankNum,
			s = this.props.listContext === constant.LIST_CONTEXTS.MY_LIST,
			a = this.getRowItems() || {},
			l = a.rowItems || [],
			u = s && a.orderedItemList,
			c = 40;
		console.log(this.getRowItems());
		return 0 === c || 0 === l.length
			? null
			: React.createElement(
					'div',
					{
						key: this.props.listContext + this.props.rowNum,
						className: this.props.className,
						'data-list-context': this.props.listContext
					},
					this.props.hideRowHeader
						? null
						: React.createElement(RowHeader, {
								id: this.getId(),
								title: this.props.title ? this.props.title : e.getValueSync(['displayName'])
						  }),
					React.createElement(
						Row,
						{
							model: e,
							videoRoot: this.props.videoRoot,
							totalItems: 40,
							rowNum: 1,
							jawBoneRankNum: null,
							showJawBone: false,
							disableJawClose: this.props.disableJawClose,
							handleSliderMove: this.handleSliderMove,
							jawBoneModelIndex: r,
							columnsInRow: 6,
							enablePaginationIndicator: !0,
							isMyListRow: false,
							orderedItemList: u || null
						},
						l
					)
			  );
	}
}

LolomoRow.defaultProps = {
	hideRowHeader: true,
	videoRoot: 'reference',
	modal: {
		isSoftBound: true,
		setCache: undefined,
		_ID: 3077,
		_allowFromWhenceYouCame: false,
		_boxed: false,
		_collectRatio: 0.75,
		_materialized: false,
		_maxRetries: 3,
		_maxSize: 5000000,
		_path: ['genres', '83', 'rw', 1],
		_request: '',
		_root: '',
		_scheduler: '',
		_source: {},
		_treatDataSourceErrorsAsJSONGraphErrors: false,
		_treatErrorsAsValues: false,
		_useServerPaths: false
	}
};
