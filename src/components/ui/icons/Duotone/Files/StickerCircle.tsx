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
      d="M3.446 9.734q.36-.026.729-.026c5.587 0 10.117 4.53 10.117 10.117q0 .368-.026.728c-.03.42-.045.63-.167.76a.53.53 0 0 1-.414.155c-.177-.018-.339-.18-.662-.503l-9.989-9.988c-.323-.323-.484-.485-.502-.662a.53.53 0 0 1 .154-.414c.13-.122.34-.137.76-.167"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12.117C22 6.53 17.47 2 11.883 2 7.348 2 3.51 4.984 2.225 9.095c-.082.264-.124.395-.12.56.003.134.044.3.103.42.073.147.186.26.411.485L13.44 21.38c.226.226.338.339.486.412.12.059.285.1.42.103.164.004.296-.037.56-.12C19.015 20.49 22 16.652 22 12.117"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.446 9.734q.361-.026.728-.026c5.588 0 10.118 4.53 10.118 10.117q-.001.367-.026.729c-.03.42-.045.63-.168.76a.53.53 0 0 1-.413.154c-.178-.018-.339-.18-.662-.502l-9.989-9.99c-.323-.322-.484-.484-.502-.661a.53.53 0 0 1 .154-.414c.13-.122.34-.137.76-.167"
    />
  </svg>
);
export default SvgStickerCircle;
