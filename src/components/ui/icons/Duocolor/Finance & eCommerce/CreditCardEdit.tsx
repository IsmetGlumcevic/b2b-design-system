import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.905 18.975c.035-.176.053-.265.085-.347a1 1 0 0 1 .111-.207c.05-.072.114-.136.242-.263L19.5 14a1.414 1.414 0 1 1 2 2l-4.157 4.158c-.128.127-.191.19-.264.241a1 1 0 0 1-.207.11c-.082.033-.17.05-.347.086L14.5 21z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 10h20V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11"
    />
  </svg>
);
export default SvgCreditCardEdit;
