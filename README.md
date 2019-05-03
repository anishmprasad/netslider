# NetSlider

An Animated Slider Component for React.

### Installation

```
// with npm
$ npm install netslider --save

// with yarn
$ yarn add netslider
```

### Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import NetSlider from 'netslider';
import 'netslider/styles.min.css';
import data from './Data.json';
import SliderContainer from '../lib/SliderContainer';

function SliderTemplate(props) {
	return (
		<div className='slider-container-wrapper'>
			<SliderContainer videoModel={props.videoModel} model={props.model} />
		</div>
	);
}
export default function NetSliderContainer(props) {
	return (
		<div className='netslider-container' style={{ overflow: 'hidden', height: '400px' }}>
			<h1 style={{ textAlign: 'center', margin: '40px 0' }}>NetSlider</h1>
			<NetSlider
				className='netslider_title_card'
				data={data}
				slideTemplate={props => <SliderTemplate {...props} />}
			/>
		</div>
	);
}
```

```jsx
// SliderContainer.js

import React from 'react';

export default function SliderContainer(props) {
	return <div className='slider-container-title'>{props.videoModel.title}</div>;
}
```

```json
// Data.json
[
	{
		"evidenceData": {
			"type": "NONE",
			"key": ""
		},
		"hasVideoMerch": true,
		"id": 80178943,
		"image": "https://occ-0-2611-2186.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZ3Qq-Hzea6WbaEEZaC2cfdLKk2FESlsZZgWY8mFM9G6_GV10UWfcQGrwBUH3shcFc02eClTihN9t0_w79mxi1y3Qxf8Ah890Et7Y7mQyqMefg3nsYO4ZCNWhX2KSRiKdwCgPtbwag.jpg",
		"imageHighRes": "https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZkgH66DOjrC0-pNCF87xxKemsjiKFPbgx0xObXY6sLghHAS-MmThmCF-LZr2V42ed3VoScabV90v0cQHYxKZFULTwYq_sIBdA.jpg?r=2f8",
		"isInteractive": false,
		"isOriginal": true,
		"isPlayable": false,
		"runtime": 0,
		"showAsARow": {},
		"summary": {
			"id": 80178943,
			"type": "show",
			"isOriginal": true
		},
		"title": "The Boss Baby: Back in Business",
		"userRating": {
			"type": "thumb",
			"userRating": 0
		},
		"videoMerchAspectRatio": "16x9",
		"watchState": "unwatched",
		"isValid": true,
		"watchURL": "/thebossbaby",
		"rowNum": 2,
		"rankNum": 1
	}
]
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0xq2on1mwv)

### Props

| Name          | Type     | Required | Description                 |
| ------------- | -------- | -------- | --------------------------- |
| className     | `string` | `true`   | the src of image            |
| data          | `object` | `true`   | slider data object          |
| slideTemplate | `object` | `true`   | template for slider content |

### Screenshot

![Preview][screenshot]

[screenshot]: https://raw.githubusercontent.com/anishmprasad/netslider/master/screenshot/Screenshot.png 'Preview screenshot'

### Demo

-   [anish.m.prasad.com](https://anishmprasad.com/opensource/netslider)
-   [anishmprasad.github.io](https://anishmprasad.github.io/opensource/netslider)
-   [codesandbox.io](https://codesandbox.io/embed/0xq2on1mwv)

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
