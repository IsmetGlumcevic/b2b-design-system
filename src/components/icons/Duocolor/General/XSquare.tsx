import * as React from "react";
import type { SVGProps } from "react";
const SvgXSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.4}
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 9 6 6m0-6-6 6"
    />
  </svg>
);
export default SvgXSquare;
