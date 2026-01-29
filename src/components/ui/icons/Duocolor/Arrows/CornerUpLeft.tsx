import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 20v-1.4c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C15.44 9 13.76 9 10.4 9H4"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 14 4 9l5-5"
    />
  </svg>
);
export default SvgCornerUpLeft;
