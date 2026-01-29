import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashDivider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.447 1.106a1 1 0 0 1 .447 1.341l-10 20a1 1 0 1 1-1.788-.894l10-20a1 1 0 0 1 1.341-.447"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlashDivider;
