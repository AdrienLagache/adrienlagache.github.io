import { composeWithDevTools } from '@redux-devtools/extension';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import layoutReducer from '../reducers/layoutReducer';

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancer = composeWithDevTools(middlewareEnhancer);

const reducer = combineReducers({
  layout: layoutReducer,
});

const store = createStore(reducer, enhancer);

export default store;
