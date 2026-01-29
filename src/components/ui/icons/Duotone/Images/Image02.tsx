import * as React from "react";
import type { SVGProps } from "react";
const SvgImage02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g fill="currentColor" opacity={0.12}>
      <path d="M8.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21.405 15.405A10 10 0 0 1 12 22a9.96 9.96 0 0 1-6-2l8.869-8.869c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668z" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 20 8.869-8.869c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668l4.274 4.274M10.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgImage02;
