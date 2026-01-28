import * as React from "react";
import type { SVGProps } from "react";
const SvgIntersectCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 9a8 8 0 0 1 15.797-1.797 8 8 0 0 0-9.595 9.595A8 8 0 0 1 1 9"
    />
    <path
      fill="currentColor"
      d="M7.203 16.797a8 8 0 0 0 9.595-9.595 8 8 0 1 1-9.595 9.595"
    />
  </svg>
);
export default SvgIntersectCircle;
