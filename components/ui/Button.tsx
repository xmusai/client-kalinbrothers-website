import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  variant: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const baseClasses =
  'inline-block text-xs font-body font-medium uppercase tracking-label px-6 py-3 transition-opacity duration-150 cursor-pointer'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-text-primary text-bg-primary hover:opacity-90',
  ghost:   'bg-transparent text-text-ghost hover:text-text-primary',
}

export function Button({
  variant,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
