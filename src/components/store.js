import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer2 from './reducer2';

const store = createStore(reducer2,applyMiddleware(thunk))
export default store;