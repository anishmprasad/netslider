/* eslint-disable */

import React from 'react';
import classnames from 'classnames';
export default function BoxArtContainer(props) {
	// var a = props.className,
	// 	t = props.title,
	// 	n = props.children;
	// return React.createElement(
	// 	'div',
	// 	{
	// 		className: classnames(a, 'boxart-container')
	// 	},
	// 	n,
	// 	t &&
	// 		React.createElement(
	// 			'div',
	// 			{
	// 				className: 'fallback-text-container',
	// 				'aria-hidden': !0
	// 			},
	// 			React.createElement(
	// 				'div',
	// 				{
	// 					className: 'fallback-text'
	// 				},
	// 				t
	// 			)
	// 		)
	// );
	return(
		<div className={classnames(props.className, 'boxart-container')}>
			{props.children}
			{props.title && 
				<div
					className={'fallback-text-container'}
					aria-hidden={!0}
				>
					<div className='fallback-text'>
						{props.title}
					</div>
				</div>
			}
		</div>
	)
}
