import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 14.938A11.97 11.97 0 0 1 12 19a11.97 11.97 0 0 1-9-4.062"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 0V2m-1.255 6.662L3 22M13.255 8.662 21 22"
    />
  </svg>
);
export default SvgCompass;
