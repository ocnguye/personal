export default function WindIcon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className + ' icon'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10h14a3 3 0 100-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16h10a2 2 0 100-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
