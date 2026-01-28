import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.134 2.406a1 1 0 0 0-1.213-1.213 6.5 6.5 0 0 0-4.736 7.854 7 7 0 0 0-5.604 4.158A5.001 5.001 0 0 0 6 23h11.5a5.5 5.5 0 0 0 2.807-10.23 6.5 6.5 0 0 0 2.5-3.692 1 1 0 0 0-1.213-1.212Q21.07 7.998 20.5 8a4.5 4.5 0 0 1-4.366-5.594m.607 9.588a4.5 4.5 0 0 0 3.505-2 6.5 6.5 0 0 1-6.241-6.24A4.5 4.5 0 0 0 12 7.5c0 .573.107 1.119.3 1.62a7 7 0 0 1 4.44 2.874"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 3a1 1 0 0 0-2 0v1H3a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2H6z"
    />
  </svg>
);
export default SvgCloudMoon;
