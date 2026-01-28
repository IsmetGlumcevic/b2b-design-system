import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="m18 17-6 5V2l6 5-6 5z" opacity={0.12} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 7 12 10-6 5V2l6 5L6 17"
    />
  </svg>
);
export default SvgBluetoothOn;
