export default function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-label="Edgeform logo">
      <polygon points="0,0 28,0 0,28" fill="#4FC3F7" />
      <polygon points="28,0 28,28 0,28" fill="#FFA94D" />
      <line x1="0" y1="0" x2="28" y2="28" stroke="#FF3D6E" strokeWidth="2.5" />
    </svg>
  )
}
