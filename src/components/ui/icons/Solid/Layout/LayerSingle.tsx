import * as React from "react";
import type { SVGProps } from "react";
const SvgLayerSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.723 6.085a1.5 1.5 0 0 1 .554 0 1.9 1.9 0 0 1 .528.2l9.642 4.82a1 1 0 0 1 0 1.79l-9.642 4.82-.026.014a2 2 0 0 1-.502.186 1.5 1.5 0 0 1-.554 0c-.216-.04-.41-.139-.502-.186l-.026-.013-9.642-4.821a1 1 0 0 1 0-1.79l9.642-4.82.026-.013c.093-.048.286-.147.502-.187"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayerSingle;
