import * as React from "react";
import type { SVGProps } from "react";
const SvgSpacingWidth01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 21V3M3 21V3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12M6 12l2-3m-2 3 2 3m10-3-2-3m2 3-2 3"
    />
  </svg>
);
export default SvgSpacingWidth01;
