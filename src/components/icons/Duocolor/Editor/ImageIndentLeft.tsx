import * as React from "react";
import type { SVGProps } from "react";
const SvgImageIndentLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 9.25h-6M21 4H3m18 10.75h-6M21 20H3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 8 4.04 8 4.6 8h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C11 8.76 11 9.04 11 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C10.24 16 9.96 16 9.4 16H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 15.24 3 14.96 3 14.4z"
    />
  </svg>
);
export default SvgImageIndentLeft;
