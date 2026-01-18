"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import SootIcon from './icons/Soot'


export default function Nav() {
  const router = useRouter()
  const pathname = usePathname()

  // Navigate to a section on the home page. If we're already on home, scroll.
  // Otherwise navigate to the home route with the hash.
  function goTo(hash: string) {
    const target = `/${hash}` // e.g. '/#projects'
    if (pathname === '/') {
      // same page: try to scroll (smooth)
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      // fallback: push the hash which will update the URL
      router.push(target)
      return
    }

    // if we're on another page (like /personal), navigate to home + hash
    router.push(target)

    // attempt to scroll after navigation (DOM may not be ready immediately)
    setTimeout(() => {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 250)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-title site-brand">
          <span className="title">Oanh Nguyen</span>
        </div>
        <div className="nav-links">
          <Link className="nav-link" href="/"> <SootIcon />Home</Link>
          <a className="nav-link" href="/#projects" onClick={(e) => { e.preventDefault(); goTo('#projects') }}><SootIcon />Projects</a>
          <a className="nav-link" href="/#about" onClick={(e) => { e.preventDefault(); goTo('#about') }}><SootIcon />About</a>
          <Link className="nav-link" href="/personal"><SootIcon />Personal</Link>
          <a className="nav-link" href="/#contact" onClick={(e) => { e.preventDefault(); goTo('#contact') }}><SootIcon />Contact</a>
        </div>
      </div>
    </nav>
  )
}
