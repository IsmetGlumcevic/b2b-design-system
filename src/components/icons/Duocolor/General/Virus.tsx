import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v5m0 10v5M4.929 4.929l3.535 3.535m7.072 7.072 3.535 3.535M2 12h5m10 0h5M4.929 19.071l3.535-3.536m7.072-7.07 3.535-3.536"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.92 2.217a10 10 0 0 1 4.16 0m7.703 7.703a10 10 0 0 1 0 4.16m-7.706 7.704a10.05 10.05 0 0 1-4.162-.002M2.217 14.08a10 10 0 0 1 0-4.163m15.23-6.305a10.05 10.05 0 0 1 2.942 2.943m-.003 10.895a10.05 10.05 0 0 1-2.941 2.94m-10.891-.002a10.1 10.1 0 0 1-2.94-2.937M3.613 6.554a10.05 10.05 0 0 1 2.94-2.942M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgVirus;
