import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRewind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a8 8 0 1 0 7.791 9.823l-.384.384a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1-1.415 1.414l-.195-.195C20.867 18.57 16.834 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 8.616 4.92 1 1 0 0 1-1.723 1.018A8 8 0 0 0 12 4"
    />
    <path
      fill="currentColor"
      d="M13 7a1 1 0 1 0-2 0v5a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.11-1.664L13 11.465z"
    />
  </svg>
);
export default SvgClockRewind;
