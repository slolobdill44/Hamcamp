import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
