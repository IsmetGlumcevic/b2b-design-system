import * as React from "react";
import type { SVGProps } from "react";
const SvgZapCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M7.362 12.247 12 5.5v5h3.98c.492 0 .738 0 .873.102a.5.5 0 0 1 .196.373c.008.169-.131.372-.41.778L12 18.5v-5H8.02c-.492 0-.739 0-.873-.102a.5.5 0 0 1-.196-.373c-.008-.169.131-.372.41-.778"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZapCircle;
