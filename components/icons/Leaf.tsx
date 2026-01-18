export default function LeafIcon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className + ' icon'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 21c6-6 12-9 18-12-1-3-5-3-9 0C8 11 5 16 3 21z" fill="currentColor" />
      <path d="M7 14c2-1 6-3 11-6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
    </svg>
  )
}
