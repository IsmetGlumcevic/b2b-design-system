import * as React from 'react'
import type { SVGProps } from 'react'

const Flame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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
      d="M12 22c3.5 0 6-2.5 6-6.5 0-2-.5-4-2-5.5a1 1 0 0 0-1.5.1c-.5.7-1 1.5-1.5 1.9-.5.4-1 .5-1.5 0-.5-.5-1-1.2-1.5-1.9a1 1 0 0 0-1.5-.1C7 11.5 6 13.5 6 15.5 6 19.5 8.5 22 12 22Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 15c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-1-.5-1.3l-1-1.2a.6.6 0 0 0-.9 0l-1 1.2c-.4.3-.6.8-.6 1.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v3"
    />
  </svg>
)

export default Flame
