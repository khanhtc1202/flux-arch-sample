import {Result} from "./components/SearchResults";

export type State = {
  queryString: string;
  results: Array<Result>;
};
