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
      fill="currentColor"
      d="M12 4a8 8 0 1 0 6.223 13.028 1 1 0 0 1 1.554 1.258A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c5.134 0 9.365 3.87 9.935 8.851l.058-.058a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.413 0l-2.001-2a1 1 0 0 1 1.414-1.414l.568.568A8 8 0 0 0 12 4"
    />
    <path
      fill="currentColor"
      d="M13 7a1 1 0 1 0-2 0v5a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.11-1.664L13 11.465z"
    />
  </svg>
);
export default SvgClockFastForward;
