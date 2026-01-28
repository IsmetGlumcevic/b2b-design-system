import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronUpDouble = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M11.293 12.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUpDouble;
