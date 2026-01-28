import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g fill="currentColor" opacity={0.12}>
      <path d="M12 18.5 8 8h8zM10 2H7L2 8h6zM14 2h3l5 6h-6z" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 22h14M2.5 8h19M10 2 8 8l4 10.5L16 8l-2-6m-1.408 16.349 8.94-9.834c.166-.182.249-.274.282-.378a.5.5 0 0 0 .006-.282c-.029-.106-.108-.2-.266-.39L17.24 2.288a1 1 0 0 0-.186-.197.5.5 0 0 0-.158-.074C16.832 2 16.763 2 16.626 2H7.374c-.138 0-.207 0-.27.017a.5.5 0 0 0-.159.074c-.054.038-.098.091-.186.197L2.446 7.465c-.158.19-.237.284-.266.39a.5.5 0 0 0 .006.282c.033.104.116.196.282.378l8.94 9.834c.205.226.308.338.428.38a.5.5 0 0 0 .328 0c.12-.041.223-.154.428-.38"
    />
  </svg>
);
export default SvgDiamond02;
