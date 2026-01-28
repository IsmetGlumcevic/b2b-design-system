import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 7 7 17m0 0h10M7 17V7"
    />
  </svg>
);
export default SvgArrowDownLeft;
