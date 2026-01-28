import * as React from "react";
import type { SVGProps } from "react";
const SvgLink01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.207 7.793a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.343 10.586a1 1 0 0 1 0 1.414L4.93 13.414a4 4 0 1 0 5.657 5.657L12 17.657a1 1 0 0 1 1.414 1.414L12 20.485A6 6 0 1 1 3.515 12l1.414-1.414a1 1 0 0 1 1.414 0M12 3.515A6 6 0 0 1 20.485 12l-1.414 1.414A1 1 0 0 1 17.657 12l1.414-1.414a4 4 0 0 0-5.657-5.657L12 6.343a1 1 0 1 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink01;
