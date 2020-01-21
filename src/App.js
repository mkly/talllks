import { useState } from "preact/hooks";
import { html } from "htm/preact";

import "normalize.css/normalize.css";

import { css } from "emotion";

import cows from "./Data/cows";

import Cow from "./Component/Cow";
import Show from "./Component/Show";
import isVisible from "./HOC/isVisible";

const ShowVisible = isVisible(Show);
const CowVisible = isVisible(Cow);

const mainStyle = css`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = () => {
  const [cowVisible, setCowVisible] = useState(false);
  const [currentCow, setCurrentCow] = useState(cows[0]);

  const showCowHello = () => setCowVisible(true);
  const showRandomCowHello = () => {
    let cow = cows[Math.floor(Math.random() * cows.length)];
    while (cow == currentCow) {
      cow = cows[Math.floor(Math.random() * cows.length)];
    }
    setCurrentCow(cow);
  };

  return html`
    <main class=${mainStyle}>
      <${CowVisible} visible=${cowVisible} cow=${currentCow} />
      <${ShowVisible}
        visible=${!cowVisible}
        showCowHello=${showCowHello}
        text="Say Hello!"
      />
      <${ShowVisible}
        visible=${cowVisible}
        showCowHello=${showRandomCowHello}
        text="Say a Random Hello!"
      />
    </main>
  `;
};

export default App;
