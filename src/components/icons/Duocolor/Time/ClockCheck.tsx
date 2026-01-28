import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.5 19 2 2 4.5-4.5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.985 12.55Q22 12.276 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.435 4.337 9.858 9.739 9.997M12 6v6l3.738 1.87"
    />
  </svg>
);
export default SvgClockCheck;
