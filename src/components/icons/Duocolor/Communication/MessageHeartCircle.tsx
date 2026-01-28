import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageHeartCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11.5a8.5 8.5 0 0 1-11.555 7.935c-.173-.067-.26-.1-.329-.116a1 1 0 0 0-.186-.025 2 2 0 0 0-.303.021l-5.121.53c-.489.05-.733.075-.877-.013a.5.5 0 0 1-.233-.35c-.026-.166.09-.382.324-.814l1.635-3.027c.135-.25.202-.374.233-.494a.9.9 0 0 0 .028-.326c-.01-.123-.064-.283-.173-.604A8.5 8.5 0 1 1 21 11.5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.497 8.95c-.9-1.04-2.4-1.319-3.527-.368s-1.286 2.542-.401 3.667c.548.697 1.925 1.97 2.893 2.838.356.319.533.478.747.542.183.055.393.055.576 0 .213-.064.391-.223.747-.542.968-.868 2.345-2.14 2.893-2.838a2.606 2.606 0 0 0-.4-3.667c-1.147-.941-2.628-.672-3.528.367"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageHeartCircle;
