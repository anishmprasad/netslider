import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Lolomo from './Lolomo';
import { PathEvaluator } from './constants'

export default class HomeContent extends Component{
  constructor(props){
    super(props)
    this.statics = {
      NUM_ROWS_TO_RENDER: 15,
      NUM_TITLES_TO_RENDER: 20,
      getPaths: R,
      prefetchStrategies: h,
      defaultStrategy: g,
      getInitialPaths: _
    }
  }
  getRootModel() {
    var t = this.props.suppressBillboard ? "lolomonobillboard" : "lolomo";
    return PathEvaluator
  }
  render() {
    var t = this.getRootModel(),
      e = this.statics.NUM_ROWS_TO_RENDER;
    return React.createElement(Lolomo, Object.assign({}, this.props, {
        ref: "lolomo",
        model: t,
        paths: _(this.context.models),
        numRows: e
      }))
  }
}

// HomeContent.contextTypes = {
//   models: PropTypes.object.isRequired
// }    