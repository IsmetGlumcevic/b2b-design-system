import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 5A4.5 4.5 0 0 1 8.5.5h7a4.5 4.5 0 0 1 2.829 8A4.5 4.5 0 0 1 13 15.742V19a4.5 4.5 0 1 1-7.329-3.5A4.5 4.5 0 0 1 4 12c0-1.414.652-2.675 1.671-3.5A4.5 4.5 0 0 1 4 5m7 9.5H8.5a2.5 2.5 0 0 1 0-5H11zm2-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m2.5-4.5a2.5 2.5 0 0 0 0-5H13v5zm-7-5H11v5H8.5a2.5 2.5 0 0 1 0-5m2.5 14H8.5A2.5 2.5 0 1 0 11 19z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFigma;
