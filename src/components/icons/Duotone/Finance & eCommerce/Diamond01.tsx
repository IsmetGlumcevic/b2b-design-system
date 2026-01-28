import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond01 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12 20.5 8 9h8zM10 3H7L2 9h6zM14 3h3l5 6h-6z" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 9h19M10 3 8 9l4 11.5L16 9l-2-6m-1.385 17.263 8.958-10.75c.152-.183.228-.274.257-.376a.5.5 0 0 0 0-.274c-.029-.102-.105-.193-.257-.375l-4.333-5.2a1 1 0 0 0-.186-.197.5.5 0 0 0-.158-.074C16.832 3 16.763 3 16.626 3H7.374c-.138 0-.207 0-.27.017a.5.5 0 0 0-.159.074 1 1 0 0 0-.186.197l-4.333 5.2c-.152.182-.228.273-.257.375a.5.5 0 0 0 0 .274c.03.102.105.193.257.375l8.958 10.75c.212.254.317.38.443.427a.5.5 0 0 0 .344 0c.126-.047.231-.173.443-.427"
    />
  </svg>
);
export default SvgDiamond01;
