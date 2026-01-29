import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRubleCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M10.5 10.5v-3H14a1.5 1.5 0 0 1 0 3z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M8.5 6.5a1 1 0 0 1 1-1H14a3.5 3.5 0 1 1 0 7h-3.5v1.25H13a1 1 0 1 1 0 2h-2.5v1.75a1 1 0 1 1-2 0v-1.75H8a1 1 0 1 1 0-2h.5V12.5H8a1 1 0 1 1 0-2h.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCurrencyRubleCircle;
