import * as React from "react";
import type { SVGProps } from "react";
const SvgReverseLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4"
    />
  </svg>
);
export default SvgReverseLeft;
