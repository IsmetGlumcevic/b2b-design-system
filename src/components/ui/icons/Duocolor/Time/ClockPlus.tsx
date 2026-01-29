import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 22v-6m-3 3h6"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.92 13.265Q22 12.643 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.653 0 1.285-.082M12 6v6l3.738 1.87"
    />
  </svg>
);
export default SvgClockPlus;
