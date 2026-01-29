import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19.5h.01m-7.278-7.257A10.96 10.96 0 0 1 12 9.5c2.786 0 5.33 1.036 7.268 2.743"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.806 8.7A15.94 15.94 0 0 0 12 4.5c-4.166 0-7.96 1.592-10.807 4.2m14.505 7.075A5.97 5.97 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312"
    />
  </svg>
);
export default SvgWifi;
