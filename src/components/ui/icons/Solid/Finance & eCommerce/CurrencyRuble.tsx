import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRuble = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 2.5a1 1 0 0 0-1 1v7h-1a1 1 0 1 0 0 2h1v2h-1a1 1 0 1 0 0 2h1v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4v-2h5a5 5 0 0 0 0-10zm1 8h5a3 3 0 1 0 0-6h-5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCurrencyRuble;
