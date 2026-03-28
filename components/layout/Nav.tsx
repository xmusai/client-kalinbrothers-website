import Link from 'next/link'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Community',  href: '#community' },
  { label: 'Mastermind', href: '#mastermind' },
  { label: 'Brands',     href: '/brands' },
]

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-12 py-5 border-b border-bg-subtle">
      <Link
        href="/"
        className="font-display text-lg font-normal text-text-primary uppercase tracking-[0.06em]"
      >
        Kalin Brothers
      </Link>

      <ul className="hidden md:flex items-center gap-10" role="list">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[0.65rem] font-body text-text-ghost uppercase tracking-label hover:text-text-primary transition-colors duration-150"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/dinner"
        className="text-[0.65rem] font-body font-medium text-text-primary uppercase tracking-label border border-bg-subtle px-5 py-2 hover:border-text-ghost transition-colors duration-150"
      >
        Apply
      </Link>
    </nav>
  )
}
