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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.002 6A10.01 10.01 0 0 1 20 18.002"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.38 20.992A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.96 9.96 0 0 1 4.38 1.008 9 9 0 1 0 0 17.984"
    />
  </svg>
);
export default SvgMoonEclipse;
