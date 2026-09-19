import { useEffect, useState } from 'react'
import { Menu, Recycle, X } from 'lucide-react'
import { NAV_LINKS } from '../data/siteContent.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={close} aria-label="AI WasteWise home">
          <span className="logo-mark" aria-hidden="true">
            <Recycle size={20} />
          </span>
          <span className="logo-text">AI WasteWise</span>
        </a>

        <nav id="primary-nav" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#analyzer" className="btn btn-primary nav-cta-mobile" onClick={close}>
            Analyze Waste
          </a>
        </nav>

        <a href="#analyzer" className="btn btn-primary nav-cta">
          Analyze Waste
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
