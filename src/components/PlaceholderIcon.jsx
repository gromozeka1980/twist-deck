/**
 * Placeholder SVG icon — colored circle with the roll number.
 * Will be replaced with real icons later.
 */
export default function PlaceholderIcon({ color, number, size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ flexShrink: 0 }}
    >
      <circle cx="20" cy="20" r="18" fill={color} opacity="0.85" />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize="18"
        fontWeight="700"
        fontFamily="monospace"
      >
        {number}
      </text>
    </svg>
  );
}
