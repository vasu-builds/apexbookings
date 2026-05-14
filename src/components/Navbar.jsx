import { useState, useEffect } from 'react'
import Link from 'next/link'

const PRODUCTS = [
  ['Channel Manager', '/channel-manager'],
  ['Booking Engine', '/booking-engine'],
  ['Google Hotel Ads', '/google-hotel-ads'],
  ['Cloud PMS', '/cloud-pms'],
  ['Cloud POS', '/cloud-pos'],
]
const SERVICES = [
  ['Revenue Management', '/revenue-management'],
  ['OTA Listing', '/ota-listing'],
  ['Digital Marketing', '/digital-marketing'],
  ['Website Development', '/website-development'],
  ['Payment Gateway', '/payment-gateway'],
]

export default function Navbar({ light = false }) {
  const [scrolled, setScrolled] = useState(light)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (light) { setScrolled(true); return }
    const fn = () => setScrolled(window.scrollY > 30)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [light])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Dark hero → white logo. Scrolled/light pages → coloured logo.
  // Two separate PNGs, no CSS filter needed.
  const logoSrc = scrolled ? '/images/logo.png' : '/images/logo-white.png'
  const barColor = scrolled ? 'var(--ink)' : 'white'

  return (
    <>
      <nav className={`nav${scrolled ? ' solid' : ''}`}>
        <div className="container">
          <div className="nav-inner">

            {/* LOGO */}
            <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt="Apex Bookings"
                style={{
                  height: '36px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  transition: 'opacity 0.25s ease',
                }}
              />
            </Link>

            {/* Desktop links */}
            <div className="nav-links">
              <Link href="/" className="nav-btn">Home</Link>

              <div className="nav-drop">
                <button className="nav-btn">
                  Products
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="nav-drop-menu">
                  {PRODUCTS.map(([l, h]) => (
                    <Link key={h} href={h} className="nav-drop-item">{l}</Link>
                  ))}
                </div>
              </div>

              <div className="nav-drop">
                <button className="nav-btn">
                  Services
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="nav-drop-menu">
                  {SERVICES.map(([l, h]) => (
                    <Link key={h} href={h} className="nav-drop-item">{l}</Link>
                  ))}
                </div>
              </div>


              <Link href="/about" className="nav-btn">About</Link>
              <Link href="/contact" className="nav-btn">Contact</Link>
              <button className="nav-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'inherit' }} onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal', {detail: {service: 'Pricing Quote'}}))}>Get Quote</button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <div className="nav-drop">
                <button className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'inherit' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  GET IN TOUCH
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="nav-drop-menu" style={{ right: 0, left: 'auto', minWidth: 200 }}>
                  <a href="tel:+918171871902" className="nav-drop-item" style={{display:'flex', alignItems:'center', gap:8}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +91 81718 71902
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=918171871902" target="_blank" rel="noopener noreferrer" className="nav-drop-item" style={{display:'flex', alignItems:'center', gap:8}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Whatsapp
                  </a>
                  <button onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal', {detail: {service: 'General Enquiry'}}))} className="nav-drop-item" style={{display:'flex', alignItems:'center', gap:8, width:'100%', textAlign:'left', fontFamily:'inherit', border:'none', background:'none', cursor:'pointer', fontSize: 14.5}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    Make an enquiry
                  </button>
                </div>
              </div>

              <button
                className="nav-hamburger"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle navigation"
              >
                <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', background: barColor }} />
                <span style={{ opacity: mobileOpen ? 0 : 1, background: barColor }} />
                <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', background: barColor }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

        <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
        <button className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%', fontFamily: 'inherit', color: 'inherit' }} onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent('open-enquiry-modal', {detail: {service: 'Pricing Quote'}})) }}>Get Quote</button>

        <div className="mobile-nav-group">
          <p className="mobile-nav-group-title">Products</p>
          {PRODUCTS.map(([l, h]) => (
            <Link key={h} href={h} className="mobile-nav-sub" onClick={() => setMobileOpen(false)}>{l}</Link>
          ))}
        </div>

        <div className="mobile-nav-group">
          <p className="mobile-nav-group-title">Services</p>
          {SERVICES.map(([l, h]) => (
            <Link key={h} href={h} className="mobile-nav-sub" onClick={() => setMobileOpen(false)}>{l}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '20px 24px' }}>
          <a href="tel:+918171871902" className="mobile-nav-cta" style={{ background: 'var(--ink)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 81718 71902
          </a>
          <button 
            className="mobile-nav-cta" 
            style={{ background: 'var(--blue)', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily:'inherit' }}
            onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent('open-enquiry-modal', {detail: {service: 'General Enquiry'}})); }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Make an Enquiry
          </button>
        </div>
      </div>
    </>
  )
}
