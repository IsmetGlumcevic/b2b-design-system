import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 9V6a3 3 0 1 0-3 3zm0 0v6m0-6h6m-6 6v3a3 3 0 1 1-3-3zm0 0h6m0 0h3a3 3 0 1 1-3 3zm0 0V9m0 0V6a3 3 0 1 1 3 3z"
    />
  </svg>
);
export default SvgCommand;
