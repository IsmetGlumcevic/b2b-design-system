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
      fill="currentColor"
      fillRule="evenodd"
      d="M13 2a1 1 0 1 0-2 0v1h-1a5 5 0 0 0 0 10h1v6h-1a3 3 0 0 1-3-3 1 1 0 1 0-2 0 5 5 0 0 0 5 5h1v1a1 1 0 1 0 2 0v-1h1a5 5 0 0 0 0-10h-1V5h1a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5h-1zm-2 3h-1a3 3 0 0 0 0 6h1zm2 8v6h1a3 3 0 1 0 0-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCurrencyDollar;
