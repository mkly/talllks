import { html, render } from "htm/preact";

import App from "./App";

const app = html`
  <${App} />
`;
render(app, document.getElementById("app"));
