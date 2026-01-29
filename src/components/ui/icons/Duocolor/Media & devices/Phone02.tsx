import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2v1.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C9.76 5 10.04 5 10.6 5h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C15 4.24 15 3.96 15 3.4V2"
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
export default SvgPhone02;
