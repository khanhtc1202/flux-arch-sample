import { combineReducers } from 'redux';
import Type from "./Type";
import Search from "./Search";

export default combineReducers({
    queryString: Type,
    results: Search,
});
