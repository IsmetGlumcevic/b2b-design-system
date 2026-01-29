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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 .5a1 1 0 0 0-.707 1.707L9.586 7.5H5a1 1 0 0 0-1 1v7a1 1 0 0 0 .293.707l7 7A1 1 0 0 0 13 22.5v-6h6a1 1 0 0 0 .707-1.707L14.414 9.5H19a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm6 16H7.414L11 20.086zm7-9h-5.586l-5-5H18zm-12 2h5.586l5 5H6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFramer;
