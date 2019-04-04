# NetSlider

An Animated Slider Component for React.

### Installation

```
// with npm
$ npm install netslider  --save

// with yarn
$ yarn add netslider
```

### Usage

```Javascript

import NetSlider from 'netslider';
import 'netslider/styles.min.css';
mport { data, trackContext } from './carddata'; /* Update Soon */
import SliderContainer from '../lib/SliderContainer';

function SliderTemplate(props) {
	return (
		<div className='bob-overview-wrapper'>
			<SliderContainer videoModel={props.videoModel} model={props.model} />
		</div>
	);
}
export default function NetSliderContainer(props) {
	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', margin: '40px 0' }}>NetSlider</h1>
			<NetSlider
				className=''
				data={{ data, trackContext }}
				slideTemplate={props => <SliderTemplate {...props} />}
			/>
		</div>
	);
}

```

```Javascript

// SliderContainer.js

import React from 'react';

export default function SliderContainer(props) {
	return (
        <div className= 'bob-title'>
            {props.videoModel.title}
        </div>
	);
}


```

### Props

| Name          | Type     | Required | Description                 |
| ------------- | -------- | -------- | --------------------------- |
| className     | `string` | `true`   | the src of image            |
| data          | `object` | `true`   | slider data object          |
| slideTemplate | `object` | `true`   | template for slider content |

### TODO

-   [x] Minification
-   [ ] Production Level
-   [ ] CSS Polishing and Transitions
-   [ ] Documentation

### Under Active Development

### Disclaimer

This plugin is not officially commisioned/supported by Netflix.
The trademark "Netflix" is registered by "Netflix, Inc."

### License

Apache 2.0
