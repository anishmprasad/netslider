import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import 'styleCommon/styles.scss';
import Slider from 'components/Slider';


class Router extends Component {
  constructor(props){
      super(props);
      
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/slider' component={Slider}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default withRouter(connect(mapStateToProps)(Router));
