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

const ReactGA = require("react-ga");

ReactGA.initialize("UA-69160528-10", { debug: true });

const onUpdate = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
