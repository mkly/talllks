import { html } from "htm/preact";

const isVisible = component => {
  return props => {
    const { visible } = props;
    if (!visible) {
      return null;
    }

    return html`
      <${component} ...${props} />
    `;
  };
};

export default isVisible;
