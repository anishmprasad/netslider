import { createStore, applyMiddleware } from 'redux';
import thunk    from 'redux-thunk';
import StockApp from '../reducers';
import ReduxPromise from 'redux-promise';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk,ReduxPromise
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(StockApp);
}
