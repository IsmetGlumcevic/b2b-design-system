import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDollarCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 14.667A2.333 2.333 0 0 0 10.833 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.167A2.333 2.333 0 0 1 15.5 9.333M12 5.5V7m0 10v1.5"
    />
  </svg>
);
export default SvgCurrencyDollarCircle;
