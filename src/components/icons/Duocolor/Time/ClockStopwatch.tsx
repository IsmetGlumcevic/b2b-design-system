import * as React from "react";
import type { SVGProps } from "react";
const SvgClockStopwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5V2m-2 0h4m6.329 3.592-1.5-1.5.75.75m-15.908.75 1.5-1.5-.75.75"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9.5v4l2.5 1.5m6-1.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
    />
  </svg>
);
export default SvgClockStopwatch;
