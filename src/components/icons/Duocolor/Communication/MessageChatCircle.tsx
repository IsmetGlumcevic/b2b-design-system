import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageChatCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.094 11.229A8 8 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8 0 .998-.184 1.954-.52 2.835-.07.182-.105.274-.12.345a1 1 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467a2 2 0 0 0-.326-.036 1 1 0 0 0-.2.021c-.074.016-.169.051-.358.122a8.174 8.174 0 0 1-4.07.42"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16.5c0 3.038-2.403 5.5-5.368 5.5a5.3 5.3 0 0 1-1.75-.299c-.208-.073-.312-.11-.382-.124a1 1 0 0 0-.189-.019c-.071 0-.153.01-.316.033L2 22l.611-2.762c.04-.18.06-.271.065-.351a1 1 0 0 0-.01-.213 4 4 0 0 0-.126-.427 5.6 5.6 0 0 1-.277-1.747c0-3.038 2.404-5.5 5.369-5.5S13 13.462 13 16.5"
    />
  </svg>
);
export default SvgMessageChatCircle;
