import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11q0 .876-.133 1.714c-.073.465-.109.697-.201.805a.42.42 0 0 1-.317.171c-.14.018-.463-.129-1.108-.422a3 3 0 0 0-6.973 6.973c.293.645.44.967.422 1.108a.42.42 0 0 1-.17.317c-.109.092-.341.128-.806.201Q12.875 23 12 23C5.925 23 1 18.075 1 12m12-6a1 1 0 1 0-2 0v6a1 1 0 0 0 .553.894l4 2a1 1 0 1 0 .894-1.788L13 11.382z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M21 17a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
    />
  </svg>
);
export default SvgClockPlus;
