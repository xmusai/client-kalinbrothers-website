import Link from 'next/link'

const footerLinks = [
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'TikTok',    href: 'https://tiktok.com',    external: true },
  { label: 'Privacy',   href: '/privacy',              external: false },
]

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-12 py-8 border-t border-bg-subtle">
      <span className="font-display text-sm text-text-ghost uppercase tracking-[0.06em]">
        Kalin Brothers
      </span>

      <ul className="flex items-center gap-6" role="list">
        {footerLinks.map(({ label, href, external }) => (
          <li key={label}>
            <Link
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-[0.6rem] font-body text-text-ghost uppercase tracking-label hover:text-text-primary transition-colors duration-150"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
