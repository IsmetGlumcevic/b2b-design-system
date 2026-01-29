import * as React from "react";
import type { SVGProps } from "react";
const SvgUserEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.886 17.899c.043-.149.064-.223.096-.292q.042-.093.102-.175c.045-.061.1-.116.21-.225l6.456-6.457a1.768 1.768 0 1 1 2.5 2.5l-6.457 6.457c-.11.109-.164.164-.225.209a1 1 0 0 1-.175.102c-.069.032-.143.053-.292.096L11 21z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21M14.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M11 21l3.101-.886c.149-.043.223-.064.292-.096a1 1 0 0 0 .175-.102c.061-.045.116-.1.225-.21l6.457-6.456a1.768 1.768 0 1 0-2.5-2.5l-6.457 6.457c-.11.11-.164.164-.209.225a1 1 0 0 0-.102.175 2 2 0 0 0-.096.292z"
    />
  </svg>
);
export default SvgUserEdit;
