import * as React from "react";
import type { SVGProps } from "react";
const SvgMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 2a1 1 0 1 0-2 0v1.055A9.004 9.004 0 0 0 3.055 11H2a1 1 0 1 0 0 2h1.055A9.004 9.004 0 0 0 11 20.945V22a1 1 0 1 0 2 0v-1.055A9.004 9.004 0 0 0 20.945 13H22a1 1 0 1 0 0-2h-1.055A9.004 9.004 0 0 0 13 3.055zM7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMark;
