import * as React from "react";
import type { SVGProps } from "react";
const SvgAsterisk01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v20m7.071-17.071L4.93 19.07M22 12H2m17.071 7.071L4.93 4.93"
    />
  </svg>
);
export default SvgAsterisk01;
