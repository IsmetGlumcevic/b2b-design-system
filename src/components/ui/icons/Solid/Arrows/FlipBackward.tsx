import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipBackward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.707 5.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L5.414 10H16.5a3.5 3.5 0 1 1 0 7H12a1 1 0 1 0 0 2h4.5a5.5 5.5 0 1 0 0-11H5.414z"
    />
  </svg>
);
export default SvgFlipBackward;
