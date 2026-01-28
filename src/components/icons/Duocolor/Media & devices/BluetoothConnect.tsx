import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothConnect = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 12h.01M15 12h.01M21 12h.01"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 7 12 10-6 5V2l6 5L3 17"
    />
  </svg>
);
export default SvgBluetoothConnect;
