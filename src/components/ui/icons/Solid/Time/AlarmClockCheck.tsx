import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.707 3.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zM19.707 2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22a9 9 0 0 0 5.618-1.968l1.675 1.675a1 1 0 0 0 1.414-1.414l-1.675-1.675a9 9 0 1 0-14.064 0l-1.675 1.675a1 1 0 1 0 1.414 1.414l1.676-1.675A9 9 0 0 0 12 22m4.207-10.293a1 1 0 0 0-1.414-1.414L11 14.086l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarmClockCheck;
