import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipBack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 19V5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 16.67c0 1.067 0 1.6-.218 1.873a1 1 0 0 1-.783.376c-.35 0-.766-.333-1.598-.999l-5.84-4.67c-.533-.428-.8-.641-.897-.9a1 1 0 0 1 0-.7c.097-.259.364-.472.898-.9L16.4 6.08c.832-.666 1.248-1 1.598-1a1 1 0 0 1 .783.377C19 5.73 19 6.263 19 7.329z"
    />
  </svg>
);
export default SvgSkipBack;
