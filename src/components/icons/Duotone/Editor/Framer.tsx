import * as React from "react";
import type { SVGProps } from "react";
const SvgFramer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M12 15.5v7l-7-7z" opacity={0.12} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15.5v7l-7-7m0 0v-7h7m-7 7h14l-7-7m0 0h7v-7H5z"
    />
  </svg>
);
export default SvgFramer;
