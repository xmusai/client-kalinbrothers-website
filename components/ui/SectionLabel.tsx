interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-accent-gold text-xs font-body font-medium uppercase tracking-wide opacity-70 mb-4 ${className}`}
    >
      {children}
    </p>
  )
}
