import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleCut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3.338A10 10 0 0 0 2 12a10 10 0 0 0 5 8.662A10 10 0 0 0 12 12a10 10 0 0 0-5-8.662"
    />
  </svg>
);
export default SvgCircleCut;
