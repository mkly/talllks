/**
 * @jest-environment jsdom
 */
import { html, render } from "htm/preact";

import cows from "../src/Data/cows";
import Cow from "../src/Component/Cow";

describe("Cow", () => {
  it("Should show default cow", () => {
    const body = document.createElement("div");
    document.body.appendChild(body);

    render(html`<${Cow}/>`, body);
    expect(body.innerHTML).toMatchSnapshot();
  });
});
