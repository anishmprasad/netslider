import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import 'styleCommon/styles.scss';
import CaroSlider from 'components/CaroSlider';


class Router extends Component {
  constructor(props){
      super(props);
      
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/slider' component={CaroSlider}/>
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
