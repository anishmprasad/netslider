
/**eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

export default class SliderItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var e = lodash.extend(
			{
				'slider-item': !0
			},
			this.props.additionalClasses
		);
		statics: {
            className: "slider-item"
        }
		return (
			undefined !== this.props.viewportIndex && (e['slider-item-' + this.props.viewportIndex] = !0),
			React.createElement(
				'div',
				{
					className: 'slider-item'
				},
				this.props.children
			)
		);
	}
}
SliderItem.defaultProps = {
	additionalClasses: {}
};

