# NetSlider

A Animated Slider Component for React.

### Installation

```
// with npm
$ npm install netslider  --save

// with yarn
$ yarn add netslider
```

### Usage

An Animated Slider Component in React

```Javascript
import NetSlider from 'netslider';

<NetSlider
    {...commingsoon}
/>
```

### Props

| Name           | Type      | Required | Description                      |
| -------------- | --------- | -------- | -------------------------------- |
| src            | `string`  | `true`   | the src of image                 |
| preloadSrc     | `string`  | `false`  | the src image preload src        |
| containerStyle | `object`  | `false`  | container css styles             |
| initialBlur    | `boolean` | `true`   | the src initial state            |
| alt            | `string`  | `true`   | the src alt tag                  |
| scale          | `boolean` | `false`  | scale the src image              |
| placeholder    | `string`  | `true`   | the src of the placeholder image |

### TODO

-   [x] Production Level
-   [ ] CSS Polishing and Transitions
-   [ ] Documentation

**Run example**

```
$ npm start
```

### License

Apache 2.0
