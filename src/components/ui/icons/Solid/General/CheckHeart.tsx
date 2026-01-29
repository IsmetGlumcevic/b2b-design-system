import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.505 3.55c2.687-2.296 6.148-1.878 8.488.167 2.337-2.046 5.76-2.434 8.478-.176 2.973 2.472 3.33 6.687 1.04 9.633-.794 1.023-2.274 2.509-3.757 3.923-1.5 1.43-3.058 2.839-4.05 3.724l-.022.02c-.162.145-.325.29-.475.403a2 2 0 0 1-.64.339 2 2 0 0 1-1.149 0 2 2 0 0 1-.639-.338c-.15-.114-.312-.26-.475-.404l-.022-.02c-.992-.885-2.55-2.294-4.05-3.724-1.483-1.414-2.962-2.9-3.757-3.923C.176 10.216.598 6.034 3.505 3.55m12.702 5.657a1 1 0 0 0-1.414-1.414L11 11.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckHeart;
