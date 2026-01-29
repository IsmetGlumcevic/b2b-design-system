import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <rect
      width={20}
      height={12}
      x={2}
      y={6}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.4}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 10h.01M8 14h.01M10 10h.01M12 14h.01M14 10h.01M16 14h.01M18 10h.01"
    />
  </svg>
);
export default SvgKeyboard01;
