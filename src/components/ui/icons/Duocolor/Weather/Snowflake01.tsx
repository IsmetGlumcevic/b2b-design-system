import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowflake01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.062 8.5-12.124 7m12.124 0-12.124-7M12 5v14"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.16 4.402 18.062 8.5l4.098 1.098M1.84 14.402 5.938 15.5 4.84 19.598m17.32-5.196L18.062 15.5l1.098 4.098M4.84 4.402 5.938 8.5 1.84 9.598M9 2l3 3 3-3M9 22l3-3 3 3"
    />
  </svg>
);
export default SvgSnowflake01;
