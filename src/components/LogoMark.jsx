const petal = 'M32 13C38 22 38 34 32 43C26 34 26 22 32 13Z'

// The Shapla (water lily) mark without its background tile, for use on the
// indigo navbar. public/favicon.svg is the same drawing on an indigo tile.
export default function LogoMark({ className = '' }) {
  return (
    <svg viewBox="8 8 48 50" className={className} aria-hidden="true" focusable="false">
      <g fill="#8f8fda">
        <path d={petal} transform="rotate(-70 32 43)" />
        <path d={petal} transform="rotate(70 32 43)" />
      </g>
      <g fill="#ffffff">
        <path d={petal} />
        <path d={petal} transform="rotate(-36 32 43)" />
        <path d={petal} transform="rotate(36 32 43)" />
      </g>
      <path d="M13 50Q32 56 51 50" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}
