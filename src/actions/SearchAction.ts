import {Result} from "../components/SearchResults";

export type TypeAction = {
    type: "TYPE";
    text: string;
};

export type SearchAction = {
    type: "SEARCH";
    results: Array<Result>;
};


export const type = (text: string): TypeAction => {
    return {
        type: "TYPE",
        text
    };
};

export const search = (): SearchAction => {

    // TODO do http request for query results from api here

    const results: Array<Result> = [
        {
            id: 1,
            title: 'the old man and the sea'
        },
        {
            id: 2,
            title: 'the young man and the sea'
        }
    ];

    return {
        type: "SEARCH",
        results: results
    };
};
