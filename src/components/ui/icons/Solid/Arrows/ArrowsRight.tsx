import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.707 2.293a1 1 0 1 0-1.414 1.414L12.586 6H4a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM3 17a1 1 0 0 1 1-1h13.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 18H4a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgArrowsRight;
