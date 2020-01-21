/**
 * @jest-environment jsdom
 */
import { html, render } from "htm/preact";

import Show from "../src/Component/Show";

describe("Show", () => {
  it("Should show the button", () => {
    const body = document.createElement("div");
    document.body.appendChild(body);
    render(html`<${Show} text="Testing 123"/>`, body);
    expect(body.innerHTML).toMatchSnapshot();
  });
});
