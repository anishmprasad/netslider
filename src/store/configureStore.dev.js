
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import ReduxPromise from 'redux-promise';



export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk,ReduxPromise),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );


  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
