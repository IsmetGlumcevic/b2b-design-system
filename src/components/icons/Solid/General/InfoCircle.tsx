import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 6a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm1 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoCircle;
