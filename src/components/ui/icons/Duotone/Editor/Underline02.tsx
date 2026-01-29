import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4v6a7 7 0 0 0 8.763 6.776l-.123-.026A7 7 0 0 1 8.5 10V4z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 4v6a7 7 0 1 1-14 0V4m3.5 0v6a7 7 0 0 0 5.14 6.75M4 21h16M3 4h7.5M17 4h4"
    />
  </svg>
);
export default SvgUnderline02;
