import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.809 3.197 2.63-.986c.207-.078.311-.117.418-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.122.421 1.398.664.244.215.432.486.547.79.13.343.13.743.13 1.542V12c0 .72-.114 1.412-.317 2.07"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.622 17.626c-1.686 1.96-3.834 3.353-4.922 3.988-.223.13-.334.195-.49.228a1.1 1.1 0 0 1-.42 0c-.156-.033-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V5.776c0-.467.29-.885.727-1.049M3 3l18 18"
    />
  </svg>
);
export default SvgShieldOff;
