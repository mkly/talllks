import { html } from "htm/preact";
import { css } from "emotion";

const containerStyle = css`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const innerContainerStyle = css`
  text-align: center;
  overflow: hidden;
`;

const cowStyle = css`
  display: inline-block;
  text-align: left;
`;

import { say } from "cowsay";

const Cow = ({ cow }) => html`
  <div class=${containerStyle}>
    <div class=${innerContainerStyle}>
      <pre class=${cowStyle}>
${say({ text: "Hello, CircleCI!", cow, mode: "r" })}</pre
      >
    </div>
  </div>
`;

export default Cow;
