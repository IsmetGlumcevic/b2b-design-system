import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.778 15 9 11.222"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22c2 0 4.608.342 5.975-1.025a3.5 3.5 0 1 0-4.95-4.95C1.658 17.392 3.025 20 2 22"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16c-.491-.491-.737-.737-.876-.994a2 2 0 0 1 .038-1.967c.148-.252.403-.488.913-.96l9.868-9.138a2.204 2.204 0 0 1 3.116 3.116l-9.137 9.868c-.473.51-.709.765-.96.913a2 2 0 0 1-1.968.038c-.257-.139-.503-.384-.994-.876"
    />
  </svg>
);
export default SvgBrush01;
