import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1a8 8 0 0 0-8 8v6a8 8 0 1 0 16 0V9a8 8 0 0 0-8-8m1 5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMouse;
