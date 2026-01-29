import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 8.5 20 20"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4 8.5 15.5M6 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
    />
  </svg>
);
export default SvgScissors01;
