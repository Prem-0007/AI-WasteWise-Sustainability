import { Recycle } from 'lucide-react'
import { NAV_LINKS } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo" aria-label="AI WasteWise home">
            <span className="logo-mark" aria-hidden="true">
              <Recycle size={20} />
            </span>
            <span className="logo-text">AI WasteWise</span>
          </a>
          <p>Smart waste segregation and sustainability guidance. Built for the 1M1B AI for Sustainability Virtual Internship.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#responsible-ai">Responsible AI</a>
        </nav>
      </div>
      <div className="container footer-legal">
        <p>
          © {new Date().getFullYear()} AI WasteWise. Independent internship project. Recommendations are advisory; follow
          your local waste-management rules.
        </p>
      </div>
    </footer>
  )
}
