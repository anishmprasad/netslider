/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import TitleCardContainer from './TitleCardContainer';
import aclass from './ModalGlobalFunctions';
import { listContexts } from './constants';

import './index.css';

function queue(e, t) {
	return (
		(t = t || 10),
		setTimeout(function() {
			e();
		}, t)
	);
}
var noop = function() {};
// function cancelQueuedItem(e) {
// 	clearTimeout(e);
// }

export default class NetSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullDataLoaded: !1
		};
	}

	componentDidMount() {
		// var e = this.context.renderTracker;
		// if (e) {
		// 	var t = e.startSession('lolomoRow' + this.props.rowNum);
		// 	u.trackBySelectors(['.boxart-image'])
		// 		.then(function() {
		// 			e.endSession(t);
		// 		})
		// 		.catch(function(o) {
		// 			e.endSession(t, o);
		// 		});
		// }
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
	getTitles = () => {
		var s = {};
		return {
			titleList: this.props.getLoadedItemModels.map((t, o) => {
				s[t.id] = o;

				try {
					return (
						<TitleCardContainer
							key={`${'title_' + t.id + '_' + this.props.rowNum + '_' + o}`}
							model={t.model}
							rowNum={this.props.rowNum}
							rankNum={o}
							videoId={t.id}
							isTallPanel={false}
							videoRoot={this.props.videoRoot}
							data={this.props.data}
							listContexts={listContexts}
						/>
					);
				} catch (e) {
					console.log('slider render error: ', o, e);
				}
				return null;
			}),
			orderedItemList: s
		};
	};
	// getLoadedItemModels() {
	// 	for (var e = this.props.model, t = e.getValueSync('length'), o = [], i = void 0, r = void 0, s = 0; s < t; s++)
	// 		(i = e.bind([s])),
	// 			(r = i.getValueSync(this.getVideoPath(['summary']))) &&
	// 				r.id &&
	// 				o.push({
	// 					model: i,
	// 					id: r.id
	// 				});
	// 	return o;
	// }
	getRowItems() {
		var e = [],
			t = this.getTitles();
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
		this.state.fullDataLoaded ||
			((this.state.fullDataLoaded = !0),
			queue(function() {
				return aclass.subscribe(
					noop,
					() => {
						return this.forceUpdate();
					},
					() => {
						return this.forceUpdate();
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
			s = this.props.listContext === listContexts.LIST_CONTEXTS.MY_LIST,
			a = this.getRowItems() || {},
			l = a.rowItems || [],
			u = s && a.orderedItemList,
			c = 40;
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

NetSlider.defaultProps = {
	hideRowHeader: true,
	videoRoot: 'reference',
	className: 'netslider',
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
	},
	getLoadedItemModels: [
		{ model: { value: ['lolomo', 9, 0] }, id: 60020549 },
		{ model: { value: ['lolomo', 9, 1] }, id: 80084088 },
		{ model: { value: ['lolomo', 9, 2] }, id: 70065124 },
		{ model: { value: ['lolomo', 9, 3] }, id: 80023638 },
		{ model: { value: ['lolomo', 9, 4] }, id: 70108778 },
		{ model: { value: ['lolomo', 9, 5] }, id: 70058021 },
		{ model: { value: ['lolomo', 9, 6] }, id: 70054920 },
		{ model: { value: ['lolomo', 9, 7] }, id: 70128681 },
		{ model: { value: ['lolomo', 9, 7] }, id: 80115328 }
	]
};
