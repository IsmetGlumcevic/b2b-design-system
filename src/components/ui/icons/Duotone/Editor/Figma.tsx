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
    <g fill="currentColor" opacity={0.12}>
      <path d="M5 5a3.5 3.5 0 0 1 3.5-3.5H12v7H8.5A3.5 3.5 0 0 1 5 5M5 19a3.5 3.5 0 0 1 3.5-3.5H12V19a3.5 3.5 0 1 1-7 0M12 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 1.5H8.5a3.5 3.5 0 1 0 0 7m3.5-7v7m0-7h3.5a3.5 3.5 0 1 1 0 7m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0V19a3.5 3.5 0 1 1-3.5-3.5m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
    />
  </svg>
);
export default SvgFigma;
