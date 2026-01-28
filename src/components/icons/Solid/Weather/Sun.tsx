import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM13 20a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M5.607 4.193a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.414-1.414zM19.807 4.193a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M7.021 18.397a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM16.979 16.983a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M20 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
    />
  </svg>
);
export default SvgSun;
