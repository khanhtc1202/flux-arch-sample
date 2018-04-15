import { combineReducers } from 'redux';

import RegexParser from "./SearchBox";

export default combineReducers({
  regexString: RegexParser
});
