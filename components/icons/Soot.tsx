export default function SootIcon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className + ' icon'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <circle cx="10" cy="11" r="0.7" fill="#fff" />
      <circle cx="14" cy="11" r="0.7" fill="#fff" />
    </svg>
  )
}
