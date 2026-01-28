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
      fill="currentColor"
      d="M19 16.67c0 1.067 0 1.6-.218 1.873a1 1 0 0 1-.783.376c-.35 0-.766-.333-1.598-.999l-5.84-4.67c-.533-.428-.8-.641-.897-.9a1 1 0 0 1 0-.7c.097-.259.364-.472.898-.9L16.4 6.08c.832-.666 1.248-1 1.598-1a1 1 0 0 1 .783.377C19 5.73 19 6.263 19 7.329z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 19V5m11.4 1.08-5.838 4.67c-.534.428-.801.641-.898.9a1 1 0 0 0 0 .7c.097.259.364.472.898.9l5.839 4.67c.832.666 1.248.999 1.598 1a1 1 0 0 0 .783-.377c.218-.273.218-.806.218-1.872V7.329c0-1.066 0-1.599-.218-1.872a1 1 0 0 0-.783-.376c-.35 0-.766.333-1.598.999"
    />
  </svg>
);
export default SvgSkipBack;
