import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

export function render({ path, initialData }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <App initialData={initialData} />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}
