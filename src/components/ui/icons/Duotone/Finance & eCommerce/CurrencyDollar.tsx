import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h4a4 4 0 0 1 4 4m-6-6v20"
    />
  </svg>
);
export default SvgCurrencyDollar;
