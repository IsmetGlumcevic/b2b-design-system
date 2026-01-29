import * as React from "react";
import type { SVGProps } from "react";
const SvgCoins01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.938 15.938A7.001 7.001 0 0 0 15 2a7 7 0 0 0-6.938 6.062"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14"
    />
  </svg>
);
export default SvgCoins01;
