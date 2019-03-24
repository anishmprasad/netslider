/* eslint-disable */

import React, { Component,Fragment } from 'react';
import StoryArt from './StoryArt'
import TransitionGroup from 'react-addons-transition-group';
import BobCardElement from './BobCardElement';
import ActionButtons from './ActionButtons';
import BobOverview from './BobOverview'
import SVGIcon from './SVGIcon'

function BobCardEle(props){
	return (
		<TransitionGroup>
			{props.isBobOpen && (
				<BobCardElement
					key={'BobCardElement'}
					boxShape={props.boxShape}
					className={props.className}
					videoModel={props.videoModel}
					titleCardImage={props.titleCardImage}
					getParentSliderItem={props.getParentSliderItem}
					onBobOpen={props.onBobOpen}
					onBobClose={props.onBobClose}
				>
					{props.children}
				</BobCardElement>
			)}
		</TransitionGroup>
	);
}

function Chevron(props){
        return <div className= "bob-jawbone-chevron">  
			<SVGIcon
				name= "chevron-down"
			/>
        </div>
}

export default function BobCard(props) {
	console.log(props)
	return React.createElement(
		BobCardEle,
		{
			boxShape: '16x9',
			className: 'bob-card-adult-video-merch',
			videoModel: props.videoModel,
			titleCardImage: props.titleCardImage,
			onBobOpen: props.onBobOpen,
			onBobClose: props.onBobClose,
			isBobOpen: props.isBobOpen
		},
		<div>
			{/* {function(o) {
				var a = o.PlayerComponent,
					t = o.playerState,
					n = o.mouseHandlers,
					r = o.showMetaData;
				return ( */}
					<div class="bob-overlay">
						{
							'PRE_PLAYBACK' !== 'POST_PLAYBACK' &&
								<img
									src= {props.titleCardImageHighRes}
									className={ 'bob-title-art'}
									style= {{
										zIndex: 0
									}}
								/>
						}
						{
							'PRE_PLAYBACK' === 'POST_PLAYBACK' &&
								<StoryArt
									model={ props.model}
									auto={ !0}
									size={ '_665x375'}
									watched={ props.showRecentInterestingMoment}
									className={ 'bob-background'}
									duration={ 2e3}
									isStandalone={ props.videoModel.isStandalone}
									bookmarkPosition={ props.videoModel.bookmarkPosition}
								>
									a
								</StoryArt>
						}
						{
							<Fragment>
								<div
									className= "bob-overview-wrapper"
								>
									<BobOverview
										videoModel={ props.videoModel}
										model={ props.model}
										showMetaData={ props.showMetaData}
										showEvidence={ props.showEvidence}
										showSynopsis={ props.isShowAsARow && !props.showProgressBar}
										showPlayButton={ props.showPlayButton}
										showProgressBar={ props.showProgressBar}
										showProgressSummary={ props.showProgressSummary}
										showNewEpisodeBadge={ props.showNewEpisodeBadge}
										onClickJawHitZone={ props.onClickJawHitZone}
									/>
								</div>
								{false && <div
									className= "bob-actions-wrapper"
								> 
									<ActionButtons
										videoModel={ props.videoModel}
										model={props.model}
										svgButton= {!0}
										onMylistChange={ props.onMylistChange}
										showAddToMyList={ props.showAddToMyList}
										showThumbRatingIcons={ props.showThumbRatingIcons}
										showAudioToggle={ 'PRE_PLAYBACK' === 'IS_PLAYING'}
										isMutedByDefault={ props.isMutedByDefault}
									/>
								</div>}
								<div
									className= "bob-chevron-wrapper"
								> 
									<Chevron />
								</div>
							</Fragment>
						}
					</div>
				{/* ) */}
		</div>
	);
}





// React.createElement(
// 					'div',
// 					null,
// 					t !== 'POST_PLAYBACK' &&
// 						React.createElement('img', {
// 							src: e.titleCardImageHighRes,
// 							className: 'bob-title-art',
// 							style: {
// 								zIndex: 0
// 							}
// 						}),
// 					t === 'POST_PLAYBACK' &&
// 						React.createElement(b, {
// 							model: e.model,
// 							auto: !0,
// 							size: '_665x375',
// 							watched: e.showRecentInterestingMoment,
// 							className: 'bob-background',
// 							duration: 2e3,
// 							isStandalone: e.videoModel.isStandalone,
// 							bookmarkPosition: e.videoModel.bookmarkPosition
// 						}),
// 					a,
// 					React.createElement(
// 						'div',
// 						(0, s.default)(
// 							{
// 								className: i('bob-overlay', {
// 									'non-playable': !e.videoModel.isPlayable,
// 									'bob-overlay-hidden': e.enableMetaDataHiding && !r
// 								})
// 							},
// 							n
// 						),
// 						e.videoModel.isPlayable &&
// 							l.createElement('div', {
// 								className: 'bob-play-hitzone',
// 								onClick: e.navigateToPlayer
// 							}),
// 						React.createElement(u, {
// 							resolver: w.getTitleRoute,
// 							params: {
// 								id: e.videoModel.id
// 							},
// 							className: 'bob-jaw-hitzone',
// 							onClick: e.onClickJawHitZone
// 						}),
// 						React.createElement(
// 							'div',
// 							{
// 								className: 'bob-overview-wrapper'
// 							},
// 							React.createElement(c, {
// 								videoModel: e.videoModel,
// 								model: e.model,
// 								showMetaData: e.showMetaData,
// 								showEvidence: e.showEvidence,
// 								showSynopsis: e.isShowAsARow && !e.showProgressBar,
// 								showPlayButton: e.showPlayButton,
// 								showProgressBar: e.showProgressBar,
// 								showRichTitle: e.showRichTitle,
// 								showProgressSummary: e.showProgressSummary,
// 								showNewEpisodeBadge: e.showNewEpisodeBadge,
// 								onClickJawHitZone: e.onClickJawHitZone
// 							})
// 						),
// 						React.createElement(
// 							'div',
// 							{
// 								className: 'bob-actions-wrapper'
// 							},
// 							React.createElement(TransitionGroup, {
// 								videoModel: e.videoModel,
// 								model: e.model,
// 								svgButton: !0,
// 								onMylistChange: e.onMylistChange,
// 								showAddToMyList: e.showAddToMyList,
// 								showThumbRatingIcons: e.showThumbRatingIcons,
// 								showAudioToggle: t === d.IS_PLAYING,
// 								isMutedByDefault: e.isMutedByDefault
// 							})
// 						),
// 						React.createElement(
// 							'div',
// 							{
// 								className: 'bob-chevron-wrapper'
// 							},
// 							React.createElement(h, null)
// 						)
// 					),
// 					' '
// 				);