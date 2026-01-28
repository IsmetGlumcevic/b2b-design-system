import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 2v11"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.374 6.07c.222-1.444.333-2.167.687-2.71a3 3 0 0 1 1.275-1.093C5.926 2 6.656 2 8.118 2H18.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 3.52 22 4.08 22 5.2v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 13 19.92 13 18.8 13h-.76c-.377 0-.565 0-.729.06a1 1 0 0 0-.383.248c-.121.126-.197.298-.35.642l-3.361 7.562a.82.82 0 0 1-.751.488A2.466 2.466 0 0 1 10 19.534V16.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 15 8.96 15 8.4 15h-.805c-1.928 0-2.891 0-3.581-.392a3 3 0 0 1-1.32-1.539c-.283-.741-.136-1.694.157-3.599z"
    />
  </svg>
);
export default SvgThumbsDown;
