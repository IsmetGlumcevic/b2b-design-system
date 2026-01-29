import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonEclipse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11a10.96 10.96 0 0 0 4.819-1.11 1 1 0 0 0-.48-1.897 8 8 0 1 1 0-15.986 1 1 0 0 0 .48-1.898A10.96 10.96 0 0 0 12 1M19.4 5.201a1 1 0 0 1 1.401.198 11.01 11.01 0 0 1-.002 13.204 1 1 0 1 1-1.598-1.202 9.01 9.01 0 0 0 .001-10.8 1 1 0 0 1 .199-1.4"
    />
  </svg>
);
export default SvgMoonEclipse;
