import * as React from "react";
import type { SVGProps } from "react";
const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g opacity={0.12}>
      <path
        fill="currentColor"
        d="M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 16h12M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    />
  </svg>
);
export default SvgVoicemail;
