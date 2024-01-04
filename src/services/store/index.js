import { composeWithDevTools } from '@redux-devtools/extension';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import themeReducer from '../reducers/themeReducer';

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancer = composeWithDevTools(middlewareEnhancer);

const reducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(reducer, enhancer);

export default store;
