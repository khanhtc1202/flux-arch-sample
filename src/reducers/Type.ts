import {TypeAction} from "../actions/TypeAction";

const initialState: string = '';

export default (state: string = initialState, action: TypeAction): string => {
    switch (action.type) {
        case "TYPE": {
            return action.text;
        }
        default: {
            return state;
        }
    }
};
