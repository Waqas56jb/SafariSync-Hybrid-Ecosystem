export default function BrandMark({ size = 42 }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" style={{ width: size, height: size }} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#F0AC48" />
      <path
        d="M4 30c6-5 12-5 18 0s12 5 18 0"
        stroke="#0A1B21"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M8 37c5-4 10-4 16 0 5 4 11 4 16 0"
        stroke="#0A1B21"
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity=".55"
      />
      <path
        d="M24 8c-1 5-5 8-9 9 5 1 8 4 9 9 1-5 4-8 9-9-4-1-8-4-9-9Z"
        fill="#0A1B21"
      />
    </svg>
  )
}
