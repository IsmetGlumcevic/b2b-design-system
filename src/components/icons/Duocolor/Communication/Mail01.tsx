import * as React from "react";
import type { SVGProps } from "react";
const SvgMail01 = (props: SVGProps<SVGSVGElement>) => (
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
      height={16}
      x={2}
      y={4}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.4}
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.835 12.715c-.661.463-.992.695-1.351.784a2 2 0 0 1-.968 0c-.36-.09-.69-.32-1.351-.784L2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3z"
    />
  </svg>
);
export default SvgMail01;
