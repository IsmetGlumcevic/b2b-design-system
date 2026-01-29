import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryMid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 10v4m4-4v4M22 13v-2"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 10.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 6 5.12 6 6.8 6h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 8.28 19 9.12 19 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 18 15.88 18 14.2 18H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 15.72 2 14.88 2 13.2z"
    />
  </svg>
);
export default SvgBatteryMid;
