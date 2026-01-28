import * as React from "react";
import type { SVGProps } from "react";
const SvgBarLineChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.232 2.732a2.5 2.5 0 0 1 4.265 1.636l3.709 1.391.026-.027a2.5 2.5 0 1 1-.729 1.9L13.795 6.24l-.026.027a2.5 2.5 0 0 1-3.002.407l-4.333 3.25a2.5 2.5 0 1 1-1.2-1.6l4.334-3.25a2.5 2.5 0 0 1 .665-2.343"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20 12a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M13 10a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zM4 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgBarLineChart;
