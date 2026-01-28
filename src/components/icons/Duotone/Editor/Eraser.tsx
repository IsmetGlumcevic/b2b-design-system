import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11 6 1.606-1.606c1.188-1.188 1.782-1.782 2.467-2.004a3 3 0 0 1 1.854 0c.685.222 1.28.816 2.467 2.004l.212.212c1.188 1.188 1.782 1.782 2.004 2.467a3 3 0 0 1 0 1.854c-.222.685-.816 1.28-2.004 2.467L18 13z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 13-7-7m10 15H8m2.937-.937 8.669-8.669c1.188-1.188 1.782-1.782 2.005-2.467a3 3 0 0 0 0-1.854c-.223-.685-.817-1.279-2.005-2.467l-.212-.212c-1.188-1.188-1.782-1.782-2.467-2.004a3 3 0 0 0-1.854 0c-.685.222-1.279.816-2.467 2.004l-8.212 8.212c-1.188 1.188-1.782 1.782-2.004 2.467a3 3 0 0 0 0 1.854c.222.685.816 1.28 2.004 2.467l.669.669c.346.346.519.519.72.642q.27.165.579.24c.23.055.474.055.964.055h1.349c.489 0 .733 0 .963-.055q.309-.075.579-.24c.201-.123.374-.296.72-.642"
    />
  </svg>
);
export default SvgEraser;
