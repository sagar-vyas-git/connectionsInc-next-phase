export default function MapleLogo({ className = 'h-7 w-7', tone = '#22E1FF' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 6 L36 18 L46 16 L42 26 L52 30 L42 34 L46 44 L36 42 L32 56 L28 42 L18 44 L22 34 L12 30 L22 26 L18 16 L28 18 Z"
        fill={tone}
      />
    </svg>
  )
}
