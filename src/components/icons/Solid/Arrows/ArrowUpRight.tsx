import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 6a1 1 0 0 0 0 2h7.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L16 9.414V17a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgArrowUpRight;
