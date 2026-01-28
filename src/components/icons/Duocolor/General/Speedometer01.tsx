import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedometer01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v2.5m0 15V22M4.5 12H2m20 0h-2.5m-.422 7.078-1.773-1.773M4.922 19.078l1.775-1.775M4.922 5l1.736 1.736"
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
export default SvgSpeedometer01;
