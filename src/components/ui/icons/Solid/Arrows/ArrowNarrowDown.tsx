import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowNarrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 4a1 1 0 1 0-2 0v13.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L13 17.586z"
    />
  </svg>
);
export default SvgArrowNarrowDown;
