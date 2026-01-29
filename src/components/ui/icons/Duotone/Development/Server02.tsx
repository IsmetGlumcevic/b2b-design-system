import * as React from "react";
import type { SVGProps } from "react";
const SvgServer02 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4M2 16a4 4 0 0 1 4-4h12a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 8h.01M6 16h.01M6 12h12M6 12a4 4 0 0 1 0-8h12a4 4 0 0 1 0 8M6 12a4 4 0 0 0 0 8h12a4 4 0 0 0 0-8"
    />
  </svg>
);
export default SvgServer02;
