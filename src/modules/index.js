import {combineReducers} from 'redux';
import counter from './counter'
import todos from './todos'

const rootReducer  = combineReducers({
  counter,
  todos,//이문제였던듯
});

export default rootReducer