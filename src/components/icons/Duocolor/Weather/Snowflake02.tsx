import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowflake02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v8m4-4H8"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v6m0 0L7 3m5 5 5-5m-5 13v6m0-6-5 5m5-5 5 5m-9-9H2m6 0L3 7m5 5-5 5m19-5h-6m0 0 5-5m-5 5 5 5"
    />
  </svg>
);
export default SvgSnowflake02;
