// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";


// import { Provider } from "react-redux";
// import { legacy_createStore,applyMiddleware,compose } from "redux";
// import thunk from "redux-thunk";

// import reducers from "./reducers"
// export const store=legacy_createStore(reducers,compose(applyMiddleware(thunk)))



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, compose } from "redux";  // Changed from 'legacy_createStore'

import {thunk} from "redux-thunk"

import {reducers} from "./reducers/index.js";

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
<App />
  </Provider>
 
);



reportWebVitals();
