import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


Sentry.init({
  dsn: "https://26fd0e595fe24271aa835450019df327@o1142889.ingest.sentry.io/6202011",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
//

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
