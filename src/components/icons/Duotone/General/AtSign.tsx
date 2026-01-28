import * as React from "react";
import type { SVGProps } from "react";
const SvgAtSign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
export default SvgAtSign;
