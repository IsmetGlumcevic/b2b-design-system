import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmClockOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 5.142a8 8 0 0 1 9.358 9.358M22 6l-3-3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4 2 6m4 13-2 2m14.135-2.865q-.226.27-.478.522A8 8 0 1 1 6.86 6.869m11.274 11.266v-.001m0 0L21 21m-2.865-2.865L3 3"
    />
  </svg>
);
export default SvgAlarmClockOff;
