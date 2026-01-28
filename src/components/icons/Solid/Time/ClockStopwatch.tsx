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
      fill="currentColor"
      fillRule="evenodd"
      d="M10 1a1 1 0 0 0 0 2h1v1.052c-4.777.5-8.5 4.539-8.5 9.448a9.5 9.5 0 0 0 19 0c0-4.909-3.723-8.948-8.5-9.448V3h1a1 1 0 1 0 0-2zm3 8.5a1 1 0 1 0-2 0v4a1 1 0 0 0 .486.857l2.5 1.5a1 1 0 0 0 1.028-1.714L13 12.933z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.122 3.385a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M5.878 3.385a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0"
    />
  </svg>
);
export default SvgClockStopwatch;
