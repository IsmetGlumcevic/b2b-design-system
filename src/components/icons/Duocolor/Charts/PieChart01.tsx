import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.21 15.89A10 10 0 1 1 8 2.83"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.2 12c.278 0 .417 0 .528-.06a.53.53 0 0 0 .22-.238c.05-.116.04-.244.02-.501a10 10 0 0 0-9.169-9.17c-.257-.02-.385-.03-.5.021a.53.53 0 0 0-.239.22c-.06.111-.06.25-.06.528v8.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055z"
    />
  </svg>
);
export default SvgPieChart01;
