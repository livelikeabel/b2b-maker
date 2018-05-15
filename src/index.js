import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";

import App from "./App";
import createNewStore from "./redux/createNewStore";

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const history = createHistory();
const store = createNewStore(history);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
