'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Community',  href: '#community' },
  { label: 'Mastermind', href: '#mastermind' },
  { label: 'Brands',     href: '#brands' },
]

export function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          padding: '0 20px',
          height: '64px',
          background: scrolled || menuOpen
            ? 'rgba(8,8,8,0.96)'
            : 'linear-gradient(to bottom, rgba(8,8,8,0.65) 0%, transparent 100%)',
          backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          borderBottom: scrolled && !menuOpen ? '1px solid rgba(30,30,30,0.8)' : '1px solid transparent',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          id="nav-logo"
          className="font-display font-light uppercase cursor-pointer transition-opacity duration-200 hover:opacity-70"
          style={{ fontSize: '0.82rem', letterSpacing: '0.14em', color: '#F5F0E8' }}
          onClick={closeMenu}
        >
          Kalin Brothers
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                id={`nav-${label.toLowerCase()}`}
                className="font-body uppercase transition-colors duration-200 cursor-pointer"
                style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.38)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F0E8' }}
                onMouseOut={(e)  => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.38)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Apply CTA */}
          <Link
            href="/dinner"
            id="nav-cta-apply"
            className="font-body font-medium uppercase transition-all duration-200 cursor-pointer hover:bg-gold hover:border-gold hover:text-obsidian"
            style={{
              fontSize: '0.56rem',
              letterSpacing: '0.2em',
              color: '#D4A853',
              border: '1px solid rgba(212,168,83,0.38)',
              padding: '10px 20px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Apply
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden relative flex flex-col justify-center items-center cursor-pointer"
            style={{ width: '44px', height: '44px' }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span style={{
              display: 'block', width: '20px', height: '1px', background: '#F5F0E8',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1)',
              marginBottom: '6px',
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px', background: '#F5F0E8',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 180ms ease',
              marginBottom: '6px',
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px', background: '#F5F0E8',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1)',
            }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: '#080808',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 380ms cubic-bezier(0.4,0,0.2,1)',
          paddingTop: '64px',
        }}
      >
        <div className="flex flex-col flex-1 px-8 pt-14 pb-10 justify-between">

          {/* Nav links — large editorial serif */}
          <div>
            {/* Red accent */}
            <div
              aria-hidden="true"
              style={{ width: '28px', height: '1px', background: '#C41E3A', marginBottom: '40px', opacity: 0.9 }}
            />
            <ul role="list">
              {navLinks.map(({ label, href }, i) => (
                <li
                  key={label}
                  style={{ borderBottom: '1px solid #1A1A1A' }}
                >
                  <Link
                    href={href}
                    id={`nav-mobile-${label.toLowerCase()}`}
                    className="font-display font-light block cursor-pointer transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(2.4rem, 9vw, 4rem)',
                      letterSpacing: '-0.025em',
                      color: 'rgba(245,240,232,0.72)',
                      lineHeight: 1,
                      padding: '22px 0',
                    }}
                    onClick={closeMenu}
                    onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F0E8' }}
                    onMouseOut={(e)  => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.72)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom row: social + issue meta */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <a
                href="https://instagram.com/kalinbrothers"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: 'rgba(245,240,232,0.3)', minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@kalinbrothers"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: 'rgba(245,240,232,0.3)', minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                TikTok
              </a>
            </div>
            <span
              className="font-body uppercase"
              style={{ fontSize: '0.48rem', letterSpacing: '0.28em', color: 'rgba(245,240,232,0.12)' }}
            >
              Vol. 01 · 2026 · Europe &amp; The Americas
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
