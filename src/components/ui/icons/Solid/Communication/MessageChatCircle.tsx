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
      fill="currentColor"
      fillRule="evenodd"
      d="M1.263 16.5c0-3.567 2.829-6.5 6.369-6.5S14 12.933 14 16.5 11.172 23 7.632 23a6.3 6.3 0 0 1-2.083-.356l-.224-.078-.022-.007h-.005l-.168.023-2.995.409a1 1 0 0 1-1.111-1.207l.611-2.762.041-.192-.007-.023c-.016-.055-.04-.13-.08-.25a6.6 6.6 0 0 1-.326-2.057"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.148 8.373A8.3 8.3 0 0 1 7.618 8C12.33 8 16 11.89 16 16.5c0 .814-.114 1.605-.328 2.356a9 9 0 0 0 1.572-.431q.106-.041.214-.079l.174.024 3.212.471c.152.023.324.048.474.056.166.01.425.009.698-.109a1.5 1.5 0 0 0 .772-.754c.123-.27.13-.529.125-.695a6 6 0 0 0-.045-.475l-.406-3.298-.02-.164c.018-.072.051-.142.078-.211A8.9 8.9 0 0 0 23.105 10c0-4.977-4.059-9-9.052-9-4.436 0-8.135 3.175-8.905 7.373"
    />
  </svg>
);
export default SvgMessageChatCircle;
