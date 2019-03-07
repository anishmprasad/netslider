import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import FalcorPureRender from './FalcorPureRender';
import Lolomo from './Lolomo';
import LolomoRow from './LolomoRow';
// import HomeContent from './HomeContent'

// console.log(Lolomo)
// import 'styles/caroslider.scss'


export default class CaroSlider extends Component {
    constructor(){
        super()
    }
    render() {
        return (
          <div>
            <h1>Slider</h1>
            {/* <Lolomo
              enableInitialFetch = {true}
              genreId ={"1592210"}
              id={"1592210"}
              initialFetchCompleted = {true}
              isKidsPage= {false}
              isLoading={false} 
            /> */}
            {/* <HomeContent /> */}

              {/* {
                historyState: undefined
                id: "83"
                initialFetchCompleted: true
                isKidsPage: false
                isLoading: false
                enableInitialFetch: true
                error: undefined
                genreId: "83"
                children: null
                jawBoneRankNum: null
                jawBoneRowNum: null
                jawBoneVideoId: undefined
                sortOrder: "rw"
                trackId: null
                uiView: "browseTitles"
                renderSource: "client"
              } */}

            <LolomoRow 
                historyState={ undefined}
                id={ "83"}
                initialFetchCompleted={ true}
                isKidsPage={ false}
                isLoading={ false}
                enableInitialFetch={ true}
                error={ undefined}
                genreId={ "83"}
                children={ null}
                jawBoneRankNum={ null}
                jawBoneRowNum={ null}
                jawBoneVideoId={ undefined}
                sortOrder={ "rw"}
                trackId={ null}
                uiView={ "browseTitles"}
                renderSource={ "client"}
            />
          </div>
        )
      }
}