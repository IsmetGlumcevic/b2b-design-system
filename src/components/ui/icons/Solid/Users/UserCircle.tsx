import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 9.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 15.862 5.824A4.99 4.99 0 0 0 15 16H9a4.99 4.99 0 0 0-3.862 1.824A8.97 8.97 0 0 1 3 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircle;
