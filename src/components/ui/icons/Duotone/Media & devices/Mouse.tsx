import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9V6m0 16a7 7 0 0 1-7-7V9a7 7 0 0 1 14 0v6a7 7 0 0 1-7 7"
    />
  </svg>
);
export default SvgMouse;
