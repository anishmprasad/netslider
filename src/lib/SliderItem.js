/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

export default class SliderItem extends Component {
	render() {
		var e = lodash.extend(
			{
				'slider-item': !0
			},
			this.props.additionalClasses
		);
		statics: {
			className: 'slider-item';
		}
		return (
			this.props.viewportIndex && (e['slider-item-' + this.props.viewportIndex] = !0),
			<div className= 'slider-item'>
				{this.props.children}
			</div>
		);
	}
}
SliderItem.defaultProps = {
	additionalClasses: {}
};
