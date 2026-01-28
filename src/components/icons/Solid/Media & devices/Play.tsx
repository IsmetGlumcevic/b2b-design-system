import * as React from "react";
import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.006 2.802.036.024L18.591 9.86c.305.203.588.392.805.567.227.183.495.437.649.808a2 2 0 0 1 0 1.532c-.154.371-.422.625-.649.808-.217.175-.5.364-.805.567L8.006 21.198c-.373.248-.708.472-.993.627-.285.154-.676.33-1.132.303a2 2 0 0 1-1.476-.79c-.276-.364-.346-.788-.376-1.11S4 19.502 4 19.054V4.947c0-.449 0-.852.03-1.175.029-.322.1-.745.375-1.11a2 2 0 0 1 1.476-.79c.456-.027.847.15 1.132.304s.62.378.993.626"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
