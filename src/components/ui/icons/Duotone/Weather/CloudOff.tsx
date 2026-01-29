import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 19a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 1.207-2.734l11.524 11.52A4.5 4.5 0 0 1 17.5 19z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.7 16.118a4.5 4.5 0 0 0-3.78-6.099 6 6 0 0 0-7.22-4.878M7.287 7.286a6 6 0 0 0-1.207 2.733A4.5 4.5 0 0 0 6.5 19h11c.456 0 .896-.068 1.311-.194M3 3l18 18"
    />
  </svg>
);
export default SvgCloudOff;
