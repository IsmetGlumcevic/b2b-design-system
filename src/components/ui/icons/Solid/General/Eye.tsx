import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4C9.138 4 6.805 5.265 5.077 6.707s-2.91 3.107-3.503 4.046l-.024.038c-.117.185-.27.425-.347.762a2.2 2.2 0 0 0 0 .894c.077.337.23.577.347.762l.024.038c.593.939 1.776 2.605 3.503 4.046S9.138 20 12 20s5.195-1.265 6.923-2.707 2.91-3.107 3.503-4.046l.024-.038c.117-.185.27-.425.347-.762a2.2 2.2 0 0 0 0-.894c-.077-.337-.23-.577-.347-.762l-.024-.038c-.593-.939-1.776-2.605-3.503-4.046S14.862 4 12 4m0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
