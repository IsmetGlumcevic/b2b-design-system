import * as React from "react";
import type { SVGProps } from "react";
const SvgClockFastForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.7 11.5-2 2-2-2m2.245 1.5q.055-.492.055-1a9 9 0 1 0-2 5.657"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v5l3 2"
    />
  </svg>
);
export default SvgClockFastForward;
