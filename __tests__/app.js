/**
 * @jest-environment jsdom
 */
import { html, render } from "htm/preact";

import App from "../src/App";

describe("App", () => {
  it("Should display App", () => {
    const body = document.createElement("div");
    document.body.appendChild(body);

    render(html`<${App}/>`, body);
    expect(body.innerHTML).toMatchSnapshot();
  });
});
