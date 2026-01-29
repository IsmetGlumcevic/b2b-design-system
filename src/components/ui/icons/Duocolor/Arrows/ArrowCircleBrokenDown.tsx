import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleBrokenDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 3.338c2.989 1.729 5 4.96 5 8.662 0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 5-8.662"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 12 4 4m0 0 4-4m-4 4V2"
    />
  </svg>
);
export default SvgArrowCircleBrokenDown;
