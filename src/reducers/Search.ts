import {SearchAction} from "../actions/SearchAction";
import {Result} from "../components/SearchResults";

const initialState: Array<Result> = [];

export default (state: Array<Result> = initialState, action: SearchAction): Array<Result> => {
    switch (action.type) {
        case "SEARCH": {
            return action.results
        }
        default: {
            return state;
        }
    }
};
