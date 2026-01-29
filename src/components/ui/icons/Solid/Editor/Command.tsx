import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 1 1 8 0v2h4V6a4 4 0 1 1 4 4h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2v-4H6a4 4 0 0 1-4-4m6 2V6a2 2 0 1 0-2 2zm2 2v4h4v-4zm-2 6H6a2 2 0 1 0 2 2zm8 0v2a2 2 0 1 0 2-2zm0-8h2a2 2 0 1 0-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommand;
