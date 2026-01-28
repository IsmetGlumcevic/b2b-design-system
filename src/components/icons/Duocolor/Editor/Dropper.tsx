import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 12-7 7c-2.5 2.5-7 3-7 3s.5-4.5 3-7l7-7"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 12 5-5a2.828 2.828 0 1 0-4-4l-5 5m-1.5-1.5 7 7"
    />
  </svg>
);
export default SvgDropper;
