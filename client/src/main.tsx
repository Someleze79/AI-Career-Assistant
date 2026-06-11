import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    {/* Redux Provider */}
    <Provider store={store}>

        {/* Main App */}
        <App />

    </Provider>

  </React.StrictMode>
);
