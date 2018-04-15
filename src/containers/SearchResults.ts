import { connect } from "react-redux";
import {
    MapStateToProps,
    MapDispatchToProps
} from "react-redux";

import {State} from "../state";
import SearchResults from "../components/SeachResults";

const mapStateToProps: MapStateToProps<any, any, State> = (state) => {
    const {
        results
    } = state;

    return {
        results
    };
};

const mapDispatchToProps: MapDispatchToProps<any, any> = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
