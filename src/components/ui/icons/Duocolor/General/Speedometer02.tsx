import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedometer02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v2.5M4.5 12H2m20 0h-2.5m-.422 7.078-.203-.203c-.692-.692-1.038-1.038-1.442-1.286a4 4 0 0 0-1.156-.479c-.46-.11-.95-.11-1.928-.11H9.651c-.978 0-1.468 0-1.928.11a4 4 0 0 0-1.156.48c-.404.247-.75.593-1.442 1.285l-.203.203M4.922 5l1.736 1.736"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.078 5 13.5 10.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSpeedometer02;
