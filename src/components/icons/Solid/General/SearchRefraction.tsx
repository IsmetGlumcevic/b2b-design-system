import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchRefraction = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 6a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearchRefraction;
