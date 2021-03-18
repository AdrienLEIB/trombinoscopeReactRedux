import {combineReducers} from 'redux';

import todo from './todo';
import trombinoscope from './trombinoscope';

export default combineReducers({
    todo,
    trombinoscope
})