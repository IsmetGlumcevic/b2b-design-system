import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRupee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8h12"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 3h12m-3.5 18L6 13h3c6.667 0 6.667-10 0-10"
    />
  </svg>
);
export default SvgCurrencyRupee;
