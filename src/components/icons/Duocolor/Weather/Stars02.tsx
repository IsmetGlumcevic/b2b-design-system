import * as React from "react";
import type { SVGProps } from "react";
const SvgStars02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 22v-5m0-10V2M2 4.5h5m-5 15h5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 3 1.734 4.509c.282.733.423 1.1.643 1.408a3 3 0 0 0 .706.707c.308.219.675.36 1.408.642L22 12l-4.509 1.734c-.733.282-1.1.423-1.408.643a3 3 0 0 0-.706.706c-.22.308-.36.675-.643 1.408L13 21l-1.734-4.509c-.282-.733-.423-1.1-.643-1.408a3 3 0 0 0-.706-.707c-.308-.219-.675-.36-1.408-.642L4 12l4.509-1.734c.733-.282 1.1-.423 1.408-.642a3 3 0 0 0 .707-.707c.219-.308.36-.675.642-1.408z"
    />
  </svg>
);
export default SvgStars02;
