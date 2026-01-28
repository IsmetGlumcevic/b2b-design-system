import * as React from "react";
import type { SVGProps } from "react";
const SvgLineHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M3 2a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.663 5.863a1.5 1.5 0 0 0-1.326 0c-.367.18-.56.498-.655.663a8 8 0 0 0-.306.63l-4.286 9.43a1 1 0 0 0 1.82.828L9.462 14h5.076l1.552 3.414a1 1 0 0 0 1.82-.828l-4.286-9.43a8 8 0 0 0-.306-.63c-.094-.165-.288-.482-.655-.663M13.629 12 12 8.417 10.371 12z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgLineHeight;
