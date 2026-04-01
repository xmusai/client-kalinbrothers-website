import Link from 'next/link'

const footerLinks = [
  { label: 'Instagram', href: 'https://instagram.com/kalinbrothers', external: true },
  { label: 'TikTok',    href: 'https://tiktok.com/@kalinbrothers',   external: true },
  { label: 'Privacy',   href: '/privacy',                             external: false },
]

export function Footer() {
  return (
    <footer
      style={{ background: '#080808', borderTop: '1px solid #1E1E1E' }}
    >
      {/* Main footer row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 md:px-16 lg:px-20 py-12">
        <span
          className="font-display font-light uppercase"
          style={{ fontSize: '0.9rem', letterSpacing: '0.14em', color: 'rgba(245,240,232,0.18)' }}
        >
          Kalin Brothers
        </span>

        <ul className="flex items-center gap-8" role="list">
          {footerLinks.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                id={`footer-${label.toLowerCase()}`}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-body uppercase transition-colors duration-200 cursor-pointer hover:text-ivory"
                style={{
                  fontSize: '0.54rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(245,240,232,0.22)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <span
          className="font-body"
          style={{ fontSize: '0.54rem', color: 'rgba(245,240,232,0.12)', letterSpacing: '0.12em' }}
        >
          © 2026 Kalin Brothers
        </span>
      </div>

      {/* Bottom gold accent line */}
      <div
        aria-hidden="true"
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.15), transparent)' }}
      />
    </footer>
  )
}
