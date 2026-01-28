import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17.5h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      opacity={0.4}
    />
    <rect
      width={14}
      height={20}
      x={5}
      y={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
  </svg>
);
export default SvgPhone01;
