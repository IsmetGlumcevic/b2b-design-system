import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.2 12c.278 0 .417 0 .528-.06a.53.53 0 0 0 .22-.238c.05-.116.04-.244.02-.501a10 10 0 0 0-9.169-9.17c-.257-.02-.385-.03-.5.021a.53.53 0 0 0-.239.22c-.06.111-.06.25-.06.528v8.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.21 15.89A10 10 0 1 1 8 2.83m13.239 5.343a10 10 0 0 1 .729 3.028c.02.257.03.385-.02.5a.53.53 0 0 1-.22.239c-.111.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218C12 11.62 12 11.48 12 11.2V2.8c0-.278 0-.417.06-.528a.53.53 0 0 1 .238-.22c.116-.05.244-.04.501-.02a10 10 0 0 1 8.44 6.141"
    />
  </svg>
);
export default SvgPieChart01;
