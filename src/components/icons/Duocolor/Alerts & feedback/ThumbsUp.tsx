import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 11v11"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.391 19.456A3 3 0 0 1 17.426 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2.35a1 1 0 0 0 .914-.594l3.52-7.918a.82.82 0 0 1 .75-.488A2.466 2.466 0 0 1 14 4.466V8a1 1 0 0 0 1 1h3.503a3 3 0 0 1 2.965 3.456z"
    />
  </svg>
);
export default SvgThumbsUp;
