import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircleBroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
    />
  </svg>
);
export default SvgCheckCircleBroken;
