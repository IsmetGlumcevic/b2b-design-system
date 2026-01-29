import * as React from "react";
import type { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.294 1.291q-.505.496-1 1.003a86 86 0 0 0-2.3 2.435 49 49 0 0 0-2.547 3.02c-.76.993-1.442 2.01-1.792 2.876a9 9 0 1 0 16.69 0c-.35-.865-1.032-1.883-1.792-2.876a49 49 0 0 0-2.548-3.02 86 86 0 0 0-3.3-3.438 1 1 0 0 0-1.41 0"
    />
  </svg>
);
export default SvgDrop;
