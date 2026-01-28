import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchLg = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21 21-3.5-3.5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 20a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
    />
  </svg>
);
export default SvgSearchLg;
