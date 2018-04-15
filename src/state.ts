import {Result} from "./components/SeachResults";

export type State = {
  queryString: string;
  results: Array<Result>;
};
