import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBlockUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 11h-3v9.223c0 .12 0 .262-.01.387a1.5 1.5 0 0 1-.154.571 1.5 1.5 0 0 1-.655.656 1.5 1.5 0 0 1-.571.153c-.125.01-.268.01-.387.01H9.777c-.12 0-.261 0-.387-.01a1.5 1.5 0 0 1-.571-.153 1.5 1.5 0 0 1-.655-.656 1.5 1.5 0 0 1-.154-.571C8 20.485 8 20.342 8 20.223V11H5a1 1 0 0 1-.707-1.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowBlockUp;
