import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a4 4 0 0 1-4 4h-.5c-.496 0-.648.002-.761.017a2 2 0 0 0-1.722 1.722c-.015.113-.017.265-.017.761v.5a4 4 0 0 1-4 4C5.925 23 1 18.075 1 12m9-7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m4 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-9 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPalette;
