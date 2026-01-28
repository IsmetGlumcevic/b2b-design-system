import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowNarrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.707 3.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l4.293 4.293a1 1 0 0 0 1.414-1.414z"
    />
  </svg>
);
export default SvgArrowNarrowUp;
