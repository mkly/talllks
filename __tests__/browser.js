import { html, render } from "htm/preact";

import App from "../src/App";

describe("Interactions", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:8000");
  });

  it("Should update button text on click", async () => {
    await expect(page).toClick("button", { text: "Say Hello!" });

    const buttonText = await page.evaluate(() => document.querySelector("button").innerText);
    expect(buttonText).toBe("SAY A RANDOM HELLO!");
  });

  it("Should show cow on click", async () => {
    await expect(page).toClick("button", { text: "Say Hello!" });

    const cow = await page.evaluate(() => document.querySelector("pre").innerText);
    expect(cow).toBe(` __________________
< Hello, CircleCI! >
 ------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
    );
  });

  it("Should no show cow on next click", async () => {
    await expect(page).toClick("button", { text: "Say Hello!" });
    await expect(page).toClick("button", { text: "Say a Random Hello!" });

    const cow = await page.evaluate(() => document.querySelector("pre").innerText);
    expect(cow).not.toBe(` __________________
< Hello, CircleCI! >
 ------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
    );
  });
});
