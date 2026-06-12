export default function ClusterFoxLogo({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon background */}
      <polygon
        points="60,4 110,32 110,88 60,116 10,88 10,32"
        fill="#1a3a5c"
        stroke="#e05c1a"
        strokeWidth="3"
      />
      {/* Fox face - geometric */}
      {/* Head shape */}
      <polygon points="60,22 82,38 82,65 60,78 38,65 38,38" fill="#e05c1a" />
      {/* Ears */}
      <polygon points="38,38 28,20 44,30" fill="#e05c1a" />
      <polygon points="82,38 92,20 76,30" fill="#e05c1a" />
      {/* Inner ear */}
      <polygon points="35,35 29,22 41,30" fill="#ff8c42" opacity="0.6" />
      <polygon points="85,35 91,22 79,30" fill="#ff8c42" opacity="0.6" />
      {/* Eyes */}
      <ellipse cx="50" cy="48" rx="5" ry="6" fill="#1a1a2e" />
      <ellipse cx="70" cy="48" rx="5" ry="6" fill="#1a1a2e" />
      <circle cx="51" cy="47" r="1.5" fill="white" />
      <circle cx="71" cy="47" r="1.5" fill="white" />
      {/* Snout */}
      <ellipse cx="60" cy="60" rx="10" ry="7" fill="#ff8c42" />
      {/* Nose */}
      <ellipse cx="60" cy="57" rx="4" ry="3" fill="#1a1a2e" />
      {/* Mouth */}
      <path d="M 55 63 Q 60 68 65 63" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cluster nodes - small circles around the hex border */}
      <circle cx="60" cy="96" r="4" fill="#e05c1a" opacity="0.8" />
      <circle cx="95" cy="76" r="4" fill="#e05c1a" opacity="0.6" />
      <circle cx="95" cy="44" r="4" fill="#ff6b6b" opacity="0.9" />
      <circle cx="25" cy="44" r="4" fill="#ff6b6b" opacity="0.9" />
      <circle cx="25" cy="76" r="4" fill="#e05c1a" opacity="0.6" />
      {/* Connection lines */}
      <line x1="60" y1="96" x2="95" y2="76" stroke="#e05c1a" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
      <line x1="95" y1="76" x2="95" y2="44" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
      <line x1="25" y1="44" x2="25" y2="76" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
    </svg>
  )
}
