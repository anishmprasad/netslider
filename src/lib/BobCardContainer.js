/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BobCard from './BobCard';

export default class BobCardContainer extends Component {
	onClickJawHitZone = () => {
		console.log('onClickJawHitZone');
		return(
			I.ViewDetailsCommand(function(e, o) {
				var s = this.props.videoModel;
				if (!u.modifiedClick(e)) {
					var t = s.userRating.matchScore,
						a = s.userRating.tooNewForMatchScore;
					e && e.preventDefault(),
						c.emit(
							'jawbone:open',
							i.assign(
								{
									videoId: s.id,
									trackId: this.context.trackId,
									rowNum: this.context.rowNum,
									rankNum: this.context.rankNum,
									requestId: this.context.requestId
								},
								this.props,
								{
									trigger: 'bob'
								},
								void 0 !== t
									? {
											matchScore: t
									}
									: {},
								void 0 !== a
									? {
											tooNewForMatchScore: a
									}
									: {}
							)
						),
						this.props.onJawOpen && this.props.onJawOpen(o),
						this.context.openJawbone(this.context.rowNum, this.context.rankNum, s.id, void 0, void 0, o);
				}
			})
		)
	}
	onMylistChange(e) {
		e && 'function' == typeof this.props.onBobClose && this.props.onBobClose(0, null, e);
	}
	getBobToggles() {
		var e = this.props.videoModel,
			o = {
				showMetaData: !0,
				showPercentMatch: !0,
				showEvidence: !0,
				showThumbRatingIcons: !0,
				showProgressBar: !1,
				showProgressSummary: !e.isInteractive,
				showAudioToggle: e.hasVideoMerch,
				showAddToMyList: !!e.queue,
				showPlayButton: e.isPlayable,
				showRecentInterestingMoment: e.watchState !== 'unwatched',
				showNewEpisodeBadge: !0
			};
		return (
			e.watchState === 'resume' && (o.showProgressBar = !0),
			e.watchState !== 'unwatched' && ((o.showEvidence = !1), (o.showMetaData = !1)),
			this.context.listContext === 'continueWatching' && ((o.showEvidence = !1), (o.showProgressBar = !1)),
			e.isOriginal && !e.isPlayable && (o.showMetaData = !1),
			o
		);
	}
	render() {
		var 
			// e = this.props,
			// o = this.props.playbackQueryParams,
			// s = this.props.onBobOpen,
			// t = this.props.videoModel,
			// n = this.props.onBobClose,
			// i = this.props.isBobOpen,
			// r = this.props.isTallPanel,
			// h = this.props.enableMetaDataHiding,
			// d = this.props.videoModel.hasVideoMerch,
			g = this.getBobToggles();
		return(
			<BobCard
				videoModel={this.props.videoModel}
				model={ this.props.model}
				titleCardImage={ this.props.videoModel.image}
				titleCardImageHighRes={ this.props.videoModel.imageHighRes}
				playbackQueryParams={ this.props.playbackQueryParams}
				isBobOpen={ this.props.isBobOpen}
				showMetaData={ g.showMetaData}
				showThumbRatingIcons={ g.showThumbRatingIcons}
				showEvidence={ g.showEvidence}
				showAddToMyList={ g.showAddToMyList}
				showAudioToggle={ g.showAudioToggle}
				showRecentInterestingMoment={ g.showRecentInterestingMoment}
				showProgressBar={ g.showProgressBar}
				showProgressSummary={ g.showProgressSummary}
				showNewEpisodeBadge={ g.showNewEpisodeBadge}
				showPlayButton={ g.showPlayButton}
				enableMetaDataHiding={ this.props.enableMetaDataHiding}
				onMylistChange={ this.onMylistChange}
				onBobOpen={ this.props.onBobOpen}
				onBobClose={ this.props.onBobClose}
				onClickJawHitZone={ this.onClickJawHitZone}
				isMutedByDefault={ false}
			/>
		)
	}
}

BobCardContainer.defaultProps = {
	enableMetaDataHiding: !0
};

BobCardContainer.propTypes = {
	// getModelData: PropTypes.func.isRequired,
	// getI18nString: PropTypes.func.isRequired,
	// openJawbone: PropTypes.func.isRequired,
	rowNum: PropTypes.number,
	rankNum: PropTypes.number,
	trackId: PropTypes.number,
	requestId: PropTypes.string,
	// playerApp: PropTypes.object.isRequired,
	models: PropTypes.object
};
