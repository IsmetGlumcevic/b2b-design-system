import * as React from "react";
import type { SVGProps } from "react";
const SvgPaint = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.894 19.606 5.475-5.475c.396-.396.594-.594.668-.822a1 1 0 0 0 .049-.309H2.743a3 3 0 0 0 .147.927c.222.685.816 1.28 2.004 2.467l3.212 3.212c1.188 1.188 1.782 1.782 2.467 2.004a3 3 0 0 0 1.854 0c.685-.222 1.28-.816 2.467-2.004"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 13h17m-8-9.5L10.5 2m1 1 8.869 8.869c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822l-5.475 5.475c-1.188 1.188-1.782 1.782-2.467 2.004a3 3 0 0 1-1.854 0c-.685-.222-1.279-.816-2.467-2.004l-3.212-3.212c-1.188-1.188-1.782-1.782-2.004-2.467a3 3 0 0 1 0-1.854c.222-.685.816-1.28 2.004-2.467z"
    />
  </svg>
);
export default SvgPaint;
