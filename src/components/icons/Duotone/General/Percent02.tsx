import * as React from "react";
import type { SVGProps } from "react";
const SvgPercent02 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 5 5 19M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgPercent02;
