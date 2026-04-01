interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-body font-medium uppercase tracking-wide text-accent-gold mb-6 ${className}`}
      style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(212,168,83,0.75)' }}
    >
      {children}
    </p>
  )
}
