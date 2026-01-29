import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0M17 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M17 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M17 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDotsGrid;
