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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 lg:px-20 py-5 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(8,8,8,0.92)'
          : 'linear-gradient(to bottom, rgba(8,8,8,0.65) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,30,30,0.8)' : '1px solid transparent',
      }}
    >
      {/* Wordmark */}
      <Link
        href="/"
        id="nav-logo"
        className="font-display text-sm font-light tracking-[0.14em] uppercase cursor-pointer transition-opacity duration-200 hover:opacity-70"
        style={{ color: '#F5F0E8' }}
      >
        Kalin Brothers
      </Link>

      {/* Links — desktop */}
      <ul className="hidden md:flex items-center gap-10" role="list">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              id={`nav-${label.toLowerCase()}`}
              className="font-body uppercase tracking-label transition-colors duration-200 cursor-pointer"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.38)' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F0E8' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.38)' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/dinner"
        id="nav-cta-apply"
        className="font-body font-medium uppercase px-6 py-2.5 transition-all duration-200 cursor-pointer hover:bg-gold hover:border-gold hover:text-obsidian"
        style={{
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          color: '#D4A853',
          border: '1px solid rgba(212,168,83,0.38)',
        }}
      >
        Apply
      </Link>
    </nav>
  )
}
