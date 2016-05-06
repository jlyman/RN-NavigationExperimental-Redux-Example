import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

function configureStore(initialState = {}) {
  const createStoreWithMiddleware = compose(
    devTools(),
    applyMiddleware(thunk)
  )(createStore);
  return createStoreWithMiddleware(reducers, initialState);
}

module.exports = configureStore;
