import * as React from "react";
import type { SVGProps } from "react";
const SvgParagraphWrap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zM3 11a1 1 0 1 0 0 2h15a2 2 0 0 1 0 4h-1.586l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L16.414 19H18a4 4 0 1 0 0-8z"
    />
    <path fill="currentColor" d="M3 17a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z" />
  </svg>
);
export default SvgParagraphWrap;
