import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer03 = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 3h-6m6 4h-6m6 4h-6"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 4.5a2.5 2.5 0 0 0-5 0v9.258a4.5 4.5 0 1 0 5 0z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgThermometer03;
