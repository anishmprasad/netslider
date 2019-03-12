/**eslint-disable */

import React, { Component } from 'react';
// import TransitionGroup from 'react-addons-css-transition-group'
import TransitionGroup from 'react-addons-transition-group';
import BobCardElement from './BobCardElement';

class BobCardEle extends Component {
	render() {
		// var e = this.props.isBobOpen;
		// return React.createElement(TransitionGroup, null, e && React.createElement(BobCardElement, {
		//     boxShape: this.props.boxShape,
		//     className: this.props.className,
		//     videoModel: this.props.videoModel,
		//     titleCardImage: this.props.titleCardImage,
		//     getParentSliderItem: this.props.getParentSliderItem,
		//     onBobOpen: this.props.onBobOpen,
		//     onBobClose: this.props.onBobClose
		// }, this.props.children))
		return (
			<TransitionGroup>
				{this.props.isBobOpen && (
					<BobCardElement
						key={'BobCardElement'}
						boxShape={this.props.boxShape}
						className={this.props.className}
						videoModel={this.props.videoModel}
						titleCardImage={this.props.titleCardImage}
						getParentSliderItem={this.props.getParentSliderItem}
						onBobOpen={this.props.onBobOpen}
						onBobClose={this.props.onBobClose}
					>
						{this.props.children}
					</BobCardElement>
				)}
			</TransitionGroup>
		);
	}
}

export default function BobCard(e) {
	return React.createElement(
		BobCardEle,
		{
			boxShape: '16x9',
			className: 'bob-card-adult-video-merch',
			videoModel: e.videoModel,
			titleCardImage: e.titleCardImage,
			onBobOpen: e.onBobOpen,
			onBobClose: e.onBobClose,
			isBobOpen: e.isBobOpen
		},
		React.createElement(
			'div',
			{
				// videoModel: e.videoModel,
				// isMutedByDefault: e.isMutedByDefault,
				// isShowAsARow: e.isShowAsARow
			},
			// function(o) {
			//     var a = o.PlayerComponent
			//       , t = o.playerState
			//       , n = o.mouseHandlers
			//       , r = o.showMetaData;
			//     return React.createElement("div", null, t !== 'POST_PLAYBACK' && React.createElement("img", {
			//         src: e.titleCardImageHighRes,
			//         className: "bob-title-art",
			//         style: {
			//             zIndex: 0
			//         }
			//     }), t === "POST_PLAYBACK" && React.createElement(b, {
			//         model: e.model,
			//         auto: !0,
			//         size: "_665x375",
			//         watched: e.showRecentInterestingMoment,
			//         className: "bob-background",
			//         duration: 2e3,
			//         isStandalone: e.videoModel.isStandalone,
			//         bookmarkPosition: e.videoModel.bookmarkPosition
			//     }), a, React.createElement("div", (0,
			//     s.default)({
			//         className: i("bob-overlay", {
			//             "non-playable": !e.videoModel.isPlayable,
			//             "bob-overlay-hidden": e.enableMetaDataHiding && !r
			//         })
			//     }, n), e.videoModel.isPlayable && l.createElement("div", {
			//         className: "bob-play-hitzone",
			//         onClick: e.navigateToPlayer
			//     }), React.createElement(u, {
			//         resolver: w.getTitleRoute,
			//         params: {
			//             id: e.videoModel.id
			//         },
			//         className: "bob-jaw-hitzone",
			//         onClick: e.onClickJawHitZone
			//     }), React.createElement("div", {
			//         className: "bob-overview-wrapper"
			//     }, React.createElement(c, {
			//         videoModel: e.videoModel,
			//         model: e.model,
			//         showMetaData: e.showMetaData,
			//         showEvidence: e.showEvidence,
			//         showSynopsis: e.isShowAsARow && !e.showProgressBar,
			//         showPlayButton: e.showPlayButton,
			//         showProgressBar: e.showProgressBar,
			//         showRichTitle: e.showRichTitle,
			//         showProgressSummary: e.showProgressSummary,
			//         showNewEpisodeBadge: e.showNewEpisodeBadge,
			//         onClickJawHitZone: e.onClickJawHitZone
			//     })), React.createElement("div", {
			//         className: "bob-actions-wrapper"
			//     }, React.createElement(TransitionGroup, {
			//         videoModel: e.videoModel,
			//         model: e.model,
			//         svgButton: !0,
			//         onMylistChange: e.onMylistChange,
			//         showAddToMyList: e.showAddToMyList,
			//         showThumbRatingIcons: e.showThumbRatingIcons,
			//         showAudioToggle: t === d.IS_PLAYING,
			//         isMutedByDefault: e.isMutedByDefault
			//     })), React.createElement("div", {
			//         className: "bob-chevron-wrapper"
			//     }, React.createElement(h, null))), " ")
			// }
			'anish'
		)
	);
}
