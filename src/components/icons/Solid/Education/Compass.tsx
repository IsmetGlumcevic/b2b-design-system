import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 2a1 1 0 1 0-2 0v1.145a3.502 3.502 0 0 0-1.549 5.753L5.43 15.824a11 11 0 0 1-1.68-1.548 1 1 0 1 0-1.5 1.323 13 13 0 0 0 2.17 1.964l-2.285 3.935a1 1 0 1 0 1.73 1.004l2.264-3.9A12.95 12.95 0 0 0 12 20c2.112 0 4.107-.504 5.87-1.398l2.265 3.9a1 1 0 0 0 1.73-1.004l-2.285-3.935a13 13 0 0 0 2.17-1.964 1 1 0 0 0-1.5-1.323 11 11 0 0 1-1.68 1.547L14.549 8.9A3.502 3.502 0 0 0 13 3.145zm-1 8q.424 0 .82-.097l4.044 6.966A10.95 10.95 0 0 1 12 18c-1.746 0-3.398-.407-4.864-1.131l4.044-6.966q.396.096.82.097"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
