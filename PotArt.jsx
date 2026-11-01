// Original SVG illustration of a potted plant (no external images needed)
export default function PotArt({ pot = '#c8673e', plant = '#2f7d4f', leaf = 'herb' }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Potted plant illustration">
      <ellipse cx="100" cy="182" rx="55" ry="8" fill="rgba(0,0,0,.08)" />
      {leaf === 'cactus' ? (
        <g fill={plant}>
          <rect x="88" y="60" width="24" height="75" rx="12" />
          <rect x="62" y="85" width="14" height="38" rx="7" />
          <rect x="62" y="108" width="34" height="14" rx="7" />
          <rect x="124" y="75" width="14" height="40" rx="7" />
          <rect x="106" y="100" width="32" height="14" rx="7" />
        </g>
      ) : leaf === 'fern' ? (
        <g fill={plant}>
          {[-50, -28, -8, 12, 32, 52].map((a, i) => (
            <ellipse key={i} cx="100" cy="85" rx="9" ry="45" transform={`rotate(${a} 100 140)`} opacity={0.75 + (i % 2) * 0.25} />
          ))}
        </g>
      ) : (
        <g fill={plant}>
          <path d="M100 135 C100 95 100 80 100 60" stroke={plant} strokeWidth="5" fill="none" />
          <ellipse cx="78" cy="88" rx="22" ry="12" transform="rotate(-30 78 88)" />
          <ellipse cx="124" cy="80" rx="22" ry="12" transform="rotate(30 124 80)" />
          <ellipse cx="82" cy="115" rx="20" ry="11" transform="rotate(-20 82 115)" opacity=".85" />
          <ellipse cx="120" cy="112" rx="20" ry="11" transform="rotate(20 120 112)" opacity=".85" />
          <ellipse cx="100" cy="58" rx="12" ry="20" />
        </g>
      )}
      <path d="M52 130 H148 L136 178 Q134 184 128 184 H72 Q66 184 64 178 Z" fill={pot} />
      <rect x="48" y="122" width="104" height="16" rx="6" fill={pot} />
      <rect x="48" y="122" width="104" height="16" rx="6" fill="rgba(255,255,255,.18)" />
    </svg>
  )
}
