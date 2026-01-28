import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 12a3 3 0 0 0 5.121 2.121L9.88 9.88A3 3 0 0 0 9 12"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.743 5.092Q11.352 5.001 12 5c5.105 0 8.455 4.505 9.58 6.287.137.215.205.323.243.49.028.125.028.322 0 .447-.038.166-.107.274-.244.492-.3.474-.757 1.141-1.363 1.865M6.724 6.715c-2.162 1.467-3.63 3.504-4.303 4.57-.137.217-.206.325-.244.492a1.2 1.2 0 0 0 0 .446c.038.167.107.274.243.49C3.545 14.495 6.895 19 12 19c2.058 0 3.832-.732 5.288-1.723M3 3l18 18M9.879 9.879a3 3 0 1 0 4.243 4.243"
    />
  </svg>
);
export default SvgEyeOff;
