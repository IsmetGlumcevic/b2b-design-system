import * as React from "react";
import type { SVGProps } from "react";
const SvgBookClosed = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 16H7a3 3 0 0 0-3 3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 3.52 20 4.08 20 5.2v13.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 22 17.92 22 16.8 22h-8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2z"
    />
  </svg>
);
export default SvgBookClosed;
