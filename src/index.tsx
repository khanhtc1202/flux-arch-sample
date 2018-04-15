import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from "./store";
import SearchBox from "./containers/SearchBox";
import SearchResults from "./containers/SearchResults";

ReactDOM.render(
  <Provider store={store}>
      <div>
          <SearchBox />
      <hr/>
          <SearchResults />
      </div>
  </Provider>,
  document.getElementById("app")
);
