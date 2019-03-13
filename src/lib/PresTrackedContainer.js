/* eslint-disable */

import React, { Component } from 'react';

export default function PresTrackedContainer(props) {
	return(
		<div className= {'ptrack-container' + props.className}>
			{props.children}
		</div>
	)
}
