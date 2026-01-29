import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.684 19.438A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.684-2.562A4 4 0 0 1 9 17h6a4 4 0 0 1 3.684 2.438M12 13.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.316 19.438A4 4 0 0 1 9 17h6a4 4 0 0 1 3.684 2.438M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m6 2.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgUserCircle;
