import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.707 3.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L11.414 8H20a1 1 0 1 0 0-2h-8.586zM6.414 16l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 18H20a1 1 0 1 0 0-2z"
    />
  </svg>
);
export default SvgArrowsLeft;
