import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageDotsCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 0 1-12.385 8.342c-.2-.081-.3-.122-.38-.14a1 1 0 0 0-.219-.024c-.083 0-.173.015-.353.045l-3.558.593c-.373.062-.56.093-.694.035a.5.5 0 0 1-.262-.262c-.058-.135-.027-.321.035-.694l.593-3.558c.03-.18.045-.27.045-.353a1 1 0 0 0-.024-.219c-.018-.08-.059-.18-.14-.38A9 9 0 1 1 21 12"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 12h.01M12 12h.01m4.49 0h.01M12 21a9 9 0 1 0-8.342-5.616c.081.2.122.3.14.381a1 1 0 0 1 .024.219c0 .083-.015.173-.045.353l-.593 3.558c-.062.373-.093.56-.035.694a.5.5 0 0 0 .262.262c.135.058.321.027.694-.035l3.558-.593c.18-.03.27-.045.353-.045.081 0 .14.006.219.024.08.018.18.059.38.14A9 9 0 0 0 12 21m-4-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgMessageDotsCircle;
