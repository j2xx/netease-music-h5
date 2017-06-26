import { createStore, combineReducers, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const middleware = [ thunk, routerMiddleware(hashHistory) ]
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(...middleware)
)

export default store;