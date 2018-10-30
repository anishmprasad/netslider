import React, { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Router from "../../components/common/Router";
import { BrowserRouter, Route, Link } from "react-router-dom";
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEnter: false
    };
  }
  render() {
      return (
        <Provider store={this.props.store}>
          {
            <BrowserRouter>
              <Route path="/" component={Router} />
            </BrowserRouter>
          }
        </Provider>
      );
  }
}

Root.propTypes = {
  store: PropTypes.object
};

// function mapStateToProps(state) {
//   return {
//     state
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ }, dispatch);
// }

export default Root;
