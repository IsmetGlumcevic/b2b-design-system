import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.454 12.893A8.5 8.5 0 0 1 4.638 16.25l-.25-.433m-.843-4.71A8.5 8.5 0 0 1 19.361 7.75l.25.433M3.493 18.066l.732-2.732 2.733.732m10.085-8.132 2.732.732.732-2.732"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7.5V12l2.5 1.5"
    />
  </svg>
);
export default SvgClockRefresh;
