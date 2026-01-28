import * as React from "react";
import type { SVGProps } from "react";
const SvgToggle01Right = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 1 0-10z"
      clipRule="evenodd"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17H7A5 5 0 0 1 7 7h10m0 10a5 5 0 0 0 0-10m0 10a5 5 0 0 1 0-10"
    />
  </svg>
);
export default SvgToggle01Right;
