import * as React from "react";
import type { SVGProps } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.04 5.28c.352-.47.528-.704.751-.873a2 2 0 0 1 .66-.33C8.72 4 9.013 4 9.6 4h7.6c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H9.6c-.587 0-.88 0-1.15-.077a2 2 0 0 1-.659-.33c-.223-.169-.399-.404-.751-.873l-4.32-5.76c-.258-.344-.387-.516-.437-.705a1 1 0 0 1 0-.51c.05-.189.179-.36.437-.705z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 9-6 6m0-6 6 6"
    />
  </svg>
);
export default SvgDelete;
