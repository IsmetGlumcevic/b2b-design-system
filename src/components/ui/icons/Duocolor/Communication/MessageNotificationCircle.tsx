import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageNotificationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.708 3.036a8.5 8.5 0 0 0-7.265 11.18c.109.322.163.482.173.605a.9.9 0 0 1-.028.326c-.03.12-.098.244-.233.494L2.72 18.668c-.234.432-.35.648-.324.815a.5.5 0 0 0 .233.35c.144.087.388.062.877.011l5.12-.53c.156-.015.233-.023.304-.02s.119.009.186.024c.07.016.156.05.33.116a8.5 8.5 0 0 0 11.52-7.153"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.121 3.879A3 3 0 1 1 15.88 8.12 3 3 0 0 1 20.12 3.88"
    />
  </svg>
);
export default SvgMessageNotificationCircle;
