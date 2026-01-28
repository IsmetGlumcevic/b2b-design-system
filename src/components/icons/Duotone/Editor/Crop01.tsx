import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.2 18H18V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 6 15.92 6 14.8 6H6v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 18 8.08 18 9.2 18"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 6h12.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 7.52 18 8.08 18 9.2V22m4-4H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8V2"
    />
  </svg>
);
export default SvgCrop01;
