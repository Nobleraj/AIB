import { createStore,combineReducers,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import coinReducer from '../store/reducers/coin';

const reducers = combineReducers({
  coins : coinReducer
});

const store = createStore(reducers, undefined, applyMiddleware(reduxThunk));

export default store;