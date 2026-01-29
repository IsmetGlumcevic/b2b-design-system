import * as React from "react";
import type { SVGProps } from "react";
const SvgLink01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.707 18.364-1.414 1.414a5 5 0 1 1-7.071-7.07l1.414-1.415m12.728 1.414 1.414-1.414a5 5 0 0 0-7.07-7.071l-1.415 1.414M8.5 15.5l7-7"
    />
  </svg>
);
export default SvgLink01;
