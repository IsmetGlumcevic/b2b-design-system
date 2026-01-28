import * as React from "react";
import type { SVGProps } from "react";
const SvgSunrise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 4.414V9a1 1 0 1 1-2 0V4.414L8.707 6.707a1 1 0 0 1-1.414-1.414zM2 17a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4.193 10.193a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M19.807 11.607a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM19 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M6 18a6 6 0 0 1 12 0 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1M2 21a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"
    />
  </svg>
);
export default SvgSunrise;
