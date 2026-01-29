import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 13 6 6"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.793 3.747c-.562-.234-.843-.351-1.019-.294a.5.5 0 0 0-.321.321c-.057.176.06.457.294 1.02l5.508 13.22c.253.606.379.909.55.992a.5.5 0 0 0 .465-.016c.165-.094.27-.405.481-1.026l1.702-5.01c.047-.138.07-.206.109-.263a.5.5 0 0 1 .129-.129c.057-.04.125-.062.262-.109l5.011-1.702c.621-.21.932-.316 1.026-.481a.5.5 0 0 0 .016-.465c-.083-.171-.386-.297-.992-.55z"
    />
  </svg>
);
export default SvgCursor01;
