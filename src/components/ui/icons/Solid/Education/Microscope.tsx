import * as React from "react";
import type { SVGProps } from "react";
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5.5a4.5 4.5 0 0 1 8.979-.443 9 9 0 0 1 4.397 17.288 1 1 0 0 1-.751-1.854A7.003 7.003 0 0 0 12 7.071v5.693c.475.425.813.999.942 1.65a6 6 0 0 1 0 2.171 3 3 0 0 1-2.357 2.357c-.293.059-.62.058-1.001.058H5.416c-.38 0-.708 0-1.001-.058a3 3 0 0 1-2.357-2.357 6 6 0 0 1 0-2.17c.13-.652.467-1.226.942-1.65z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M3 21a1 1 0 1 0 0 2h9a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgMicroscope;
