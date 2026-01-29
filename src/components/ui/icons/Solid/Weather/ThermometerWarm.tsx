import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerWarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.921 9.01A5 5 0 0 1 12.016 8a1 1 0 0 1-.032 2 3 3 0 0 0-1.5 5.625 1 1 0 1 1-.968 1.75 5 5 0 0 1-.595-8.365M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M7.307 17.693a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0M1 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M4.493 5.493a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414M15 4a3 3 0 1 1 6 0v10a5 5 0 1 1-6 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThermometerWarm;
