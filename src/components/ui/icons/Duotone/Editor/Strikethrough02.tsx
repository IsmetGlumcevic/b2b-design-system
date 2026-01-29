import * as React from "react";
import type { SVGProps } from "react";
const SvgStrikethrough02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 20a4 4 0 0 0 0-8h-3.5a4 4 0 0 1 0 8z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8m-3.5 8a4 4 0 0 0 0-8M18 8a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4m7.5-4a4 4 0 0 0-4 4M3 12h18"
    />
  </svg>
);
export default SvgStrikethrough02;
