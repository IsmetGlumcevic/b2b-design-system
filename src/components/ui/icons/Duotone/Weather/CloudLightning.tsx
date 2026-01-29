import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 11.5a4.5 4.5 0 0 1 4.08-4.48 6.002 6.002 0 0 1 11.84 0A4.5 4.5 0 0 1 19 15.743H5A4.5 4.5 0 0 1 2 11.5"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 15.744a4.502 4.502 0 0 0-1.08-8.725 6.002 6.002 0 0 0-11.84 0A4.5 4.5 0 0 0 5 15.744M13 10l-4 6h6l-4 6"
    />
  </svg>
);
export default SvgCloudLightning;
