import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 5v14"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 7.329c0-1.066 0-1.599.218-1.872a1 1 0 0 1 .783-.376c.35 0 .766.333 1.599.999l5.838 4.67c.534.428.801.641.898.9a1 1 0 0 1 0 .7c-.097.259-.364.472-.898.9L7.6 17.92c-.833.666-1.249.999-1.599 1a1 1 0 0 1-.783-.377C5 18.27 5 17.737 5 16.671z"
    />
  </svg>
);
export default SvgSkipForward;
