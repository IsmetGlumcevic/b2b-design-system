import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 4h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C8 8.56 8 10.24 8 13.6V20"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 15-5 5-5-5"
    />
  </svg>
);
export default SvgCornerLeftDown;
