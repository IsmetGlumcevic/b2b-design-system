import * as React from "react";
import type { SVGProps } from "react";
const SvgToggle02Right = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 16H6a4 4 0 0 1 0-8h8a5 5 0 0 0-2 4c0 1.636.786 3.088 2 4"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 16H6a4 4 0 0 1 0-8h8m8 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgToggle02Right;
