import * as React from "react";
import type { SVGProps } from "react";
const SvgZapSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 5.5-4.638 6.747c-.28.406-.42.609-.411.778a.5.5 0 0 0 .196.373c.134.102.38.102.874.102H12v5l4.638-6.747c.28-.406.42-.609.41-.778a.5.5 0 0 0-.195-.373c-.135-.102-.381-.102-.874-.102H12z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 6-4.566 6.227c-.301.41-.452.616-.447.787a.5.5 0 0 0 .193.38c.135.106.39.106.899.106H12V18l4.566-6.227c.301-.41.452-.616.447-.787a.5.5 0 0 0-.193-.38c-.135-.106-.39-.106-.899-.106H12z"
    />
  </svg>
);
export default SvgZapSquare;
