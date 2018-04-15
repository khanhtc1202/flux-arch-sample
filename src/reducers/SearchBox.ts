import {SearchBoxAction} from "../actions/SearchAction";
import {Result} from "../components/SeachResults";

const initialState: Array<Result> = [];

export default (state: Array<Result> = initialState, action: SearchBoxAction): Array<Result> => {
    switch (action.type) {
        case "SEARCH": {
            return action.results
        }
        default: {
            return state;
        }
    }
};
