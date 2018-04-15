import { connect } from "react-redux";
import {
    MapStateToProps,
    MapDispatchToProps,
    Dispatch
} from "react-redux";

import {State} from "../state";
import SearchBox from "../components/SearchBox";
import {search} from "../actions/SearchAction";
import {type} from "../actions/TypeAction";

type DispatchProps = {
    type: (text: string) => void;
    search: () => void;
};

const mapStateToProps: MapStateToProps<any, any, State> = () => {
    return {};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, any> = (
    dispatch: Dispatch<any>
) => {
    return {
        type: (text: string) => {
            dispatch(type(text));
        },
        search: () => {
            dispatch(search());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
