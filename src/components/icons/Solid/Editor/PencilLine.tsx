import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilLine = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16.293 2.293a3.829 3.829 0 0 1 5.414 5.414L10.391 19.023c-.234.234-.41.41-.61.566a4 4 0 0 1-.56.364c-.223.12-.456.209-.764.327l-.125.048-.093.036-5.38 2.07a1 1 0 0 1-1.292-1.293l2.153-5.598c.118-.308.208-.541.327-.764a4 4 0 0 1 .364-.56c.155-.2.332-.376.565-.61zM5.38 16.795l-1.14 2.964 2.964-1.14z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 20h8a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2" />
  </svg>
);
export default SvgPencilLine;
