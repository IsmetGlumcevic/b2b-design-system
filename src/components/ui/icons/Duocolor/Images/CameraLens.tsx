import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraLens = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.416 15.341a9.17 9.17 0 0 1-9.539.66M2.584 8.658a9.17 9.17 0 0 1 9.56-.647m3.23 6.112A9.17 9.17 0 0 0 19.6 5.512M8.581 9.904A9.17 9.17 0 0 0 4.4 18.488m11.128-8.35a9.17 9.17 0 0 0-5.345-7.966M8.476 13.926a9.17 9.17 0 0 0 5.342 7.902m1.01-12.656a4 4 0 1 1-5.656 5.657 4 4 0 0 1 5.656-5.657"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142 10.237-3.905 14.142 0"
    />
  </svg>
);
export default SvgCameraLens;
