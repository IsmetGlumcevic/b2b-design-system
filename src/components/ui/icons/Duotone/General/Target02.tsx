import * as React from "react";
import type { SVGProps } from "react";
const SvgTarget02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12h-4M6 12H2m10-6V2m0 20v-4m8-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgTarget02;
