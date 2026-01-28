import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBlockLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 12 7-7v4h10.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C21 9.38 21 9.52 21 9.8v4.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C20.62 15 20.48 15 20.2 15H10v4z"
    />
  </svg>
);
export default SvgArrowBlockLeft;
