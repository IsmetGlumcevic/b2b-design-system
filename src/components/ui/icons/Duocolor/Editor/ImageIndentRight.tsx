import * as React from "react";
import type { SVGProps } from "react";
const SvgImageIndentRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 4H3m18 16H3M9 9.25H3m6 5.5H3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 9.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C13.76 8 14.04 8 14.6 8h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 8.76 21 9.04 21 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 16 19.96 16 19.4 16h-4.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C13 15.24 13 14.96 13 14.4z"
    />
  </svg>
);
export default SvgImageIndentRight;
