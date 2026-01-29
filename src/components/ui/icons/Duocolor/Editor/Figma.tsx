import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.4}
    >
      <path d="M5 5a3.5 3.5 0 0 1 3.5-3.5H12v7H8.5A3.5 3.5 0 0 1 5 5M5 19a3.5 3.5 0 0 1 3.5-3.5H12V19a3.5 3.5 0 1 1-7 0M12 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8.5H8.5a3.5 3.5 0 1 0 0 7H12zm0 0h3.5a3.5 3.5 0 1 0 0-7H12z"
    />
  </svg>
);
export default SvgFigma;
