import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.54 5.675-.108.406C16.553 2.457 11.379 1.389 7.25 3.773a9.49 9.49 0 0 0-4.698 7.229 1 1 0 0 0 1.989.211A7.502 7.502 0 0 1 17.645 7.06l-.344-.092a1 1 0 1 0-.517 1.932l2.732.732a1 1 0 0 0 1.225-.707l.732-2.732a1 1 0 1 0-1.932-.518M20.56 11.898a1 1 0 0 1 .888 1.1 9.49 9.49 0 0 1-4.698 7.23c-4.129 2.383-9.303 1.315-12.182-2.309l-.109.406a1 1 0 0 1-1.932-.518l.733-2.732a1 1 0 0 1 1.224-.707l2.732.732a1 1 0 1 1-.517 1.932l-.345-.093a7.503 7.503 0 0 0 13.105-4.152 1 1 0 0 1 1.1-.889"
    />
    <path
      fill="currentColor"
      d="M13 7.5a1 1 0 0 0-2 0V12a1 1 0 0 0 .486.857l2.5 1.5a1 1 0 1 0 1.028-1.715L13 11.434z"
    />
  </svg>
);
export default SvgClockRefresh;
