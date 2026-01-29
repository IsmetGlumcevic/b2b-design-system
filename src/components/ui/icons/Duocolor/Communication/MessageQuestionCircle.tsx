import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageQuestionCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11.5a8.5 8.5 0 0 1-11.555 7.935c-.173-.067-.26-.1-.329-.116a1 1 0 0 0-.186-.025 2 2 0 0 0-.303.021l-5.121.53c-.489.05-.733.075-.877-.013a.5.5 0 0 1-.233-.35c-.026-.166.09-.382.324-.814l1.635-3.027c.135-.25.202-.374.233-.494a.9.9 0 0 0 .028-.326c-.01-.123-.064-.283-.173-.604A8.5 8.5 0 1 1 21 11.5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 9.002a2.249 2.249 0 0 1 4.37.75c0 1.499-2.25 2.248-2.25 2.248m.03 3h.01"
    />
  </svg>
);
export default SvgMessageQuestionCircle;
