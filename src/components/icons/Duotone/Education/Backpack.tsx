import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7.714c0-1.6 0-2.399.297-3.016a3 3 0 0 1 1.401-1.4C5.315 3 6.115 3 7.714 3h8.572c1.6 0 2.399 0 3.016.297a3 3 0 0 1 1.4 1.401C21 5.315 21 6.115 21 7.714c0 2.133 0 3.199-.396 4.021a4 4 0 0 1-1.869 1.869c-.822.396-1.888.396-4.02.396h-5.43c-2.132 0-3.198 0-4.02-.396a4 4 0 0 1-1.869-1.868C3 10.913 3 9.846 3 7.714"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 13v4.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 21 17.92 21 16.8 21H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 19.48 4 18.92 4 17.8V13m5-3h6m-5.714 4h5.428c2.133 0 3.199 0 4.021-.396a4 4 0 0 0 1.869-1.868C21 10.913 21 9.846 21 7.714c0-1.6 0-2.399-.297-3.016a3 3 0 0 0-1.401-1.4C18.685 3 17.885 3 16.286 3H7.714c-1.6 0-2.399 0-3.016.297a3 3 0 0 0-1.4 1.401C3 5.315 3 6.115 3 7.714c0 2.133 0 3.199.396 4.021a4 4 0 0 0 1.868 1.869C6.087 14 7.154 14 9.286 14"
    />
  </svg>
);
export default SvgBackpack;
