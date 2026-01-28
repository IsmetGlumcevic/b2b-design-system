import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageAlertCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11.5a8.5 8.5 0 0 1-11.555 7.935c-.173-.067-.26-.1-.329-.116a1 1 0 0 0-.186-.025 2 2 0 0 0-.303.021l-5.121.53c-.489.05-.733.075-.877-.013a.5.5 0 0 1-.233-.35c-.026-.166.09-.382.324-.814l1.635-3.027c.135-.25.202-.374.233-.494a.9.9 0 0 0 .028-.326c-.01-.123-.064-.283-.173-.604A8.5 8.5 0 1 1 21 11.5"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 11V7.5m0 7h.01M12.5 20a8.5 8.5 0 1 0-8.057-5.783c.109.32.163.481.173.604a.9.9 0 0 1-.028.326c-.03.12-.098.245-.233.494L2.72 18.668c-.234.432-.35.648-.324.815a.5.5 0 0 0 .233.35c.144.087.388.062.877.011l5.12-.529c.156-.016.233-.024.304-.021s.119.009.186.024c.07.016.156.05.33.116A8.5 8.5 0 0 0 12.5 20"
    />
  </svg>
);
export default SvgMessageAlertCircle;
