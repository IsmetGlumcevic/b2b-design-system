import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.778 1C7.425 1 3.05 3.786 1.454 7.885c-.147.377-.22.565-.178.722.036.136.13.254.256.318.145.074.379.037.847-.038a11 11 0 0 1 1.753-.137c6.14 0 11.118 4.977 11.118 11.117q0 .79-.108 1.55c-.068.49-.102.735-.024.88a.5.5 0 0 0 .327.248c.16.037.355-.048.745-.216 3.992-1.73 6.705-5.81 6.705-10.212C22.895 5.977 17.918 1 11.778 1"
    />
    <path
      fill="currentColor"
      d="M11.941 21.394c.305.305.457.457.63.477a.53.53 0 0 0 .408-.14c.124-.122.148-.317.198-.707q.072-.57.072-1.157A9.117 9.117 0 0 0 2.97 10.823c-.39.05-.586.075-.707.2a.53.53 0 0 0-.14.407c.02.173.173.325.477.63z"
    />
  </svg>
);
export default SvgStickerCircle;
