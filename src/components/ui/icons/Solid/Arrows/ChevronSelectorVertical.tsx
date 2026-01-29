import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronSelectorVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.293 14.293a1 1 0 0 1 1.414 0L12 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414M6.293 9.707a1 1 0 0 0 1.414 0L12 5.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronSelectorVertical;
