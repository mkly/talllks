import { html } from "htm/preact";
import { css } from "emotion";

const buttonStyle = css`
  padding: 25px;
  width: 100%;
  margin: 0 21px 21px 21px;
  max-width: 420px;
  background: orange;
  border-radius: 4px;
  border: 0;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
  font-size: 22px;
  font-family: monospace;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: -1px -1px 0 rgba(245, 245, 255, 0.3);
  text-transform: uppercase;
  background: #222;
  &:hover,
  &:active {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    top: 1px;
    left: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

const onClick = callback => callback;

const Show = ({ showCowHello, text }) => html`
  <button onClick=${onClick(showCowHello)} class=${buttonStyle}>
    ${text}
  </button>
`;

export default Show;
