import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import movieReducer from 'store/reducers/movieReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movie: movieReducer,
});

const middleware = [thunkMiddleware];
const enhancers = composeEnhancers(applyMiddleware(...middleware));

export type rootStateType = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, enhancers);
export default store;
