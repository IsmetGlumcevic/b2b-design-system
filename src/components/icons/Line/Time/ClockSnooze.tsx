import * as React from "react";
import type { SVGProps } from "react";
const SvgClockSnooze = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 17h5l-5 5h5m.45-9q.05-.493.05-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 1-.05M12 6v6l3.738 1.87"
    />
  </svg>
);
export default SvgClockSnooze;
