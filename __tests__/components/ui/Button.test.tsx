import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders primary variant with ivory background', () => {
    render(<Button variant="primary">Join the community</Button>)
    const btn = screen.getByRole('button', { name: 'Join the community' })
    expect(btn).toHaveClass('bg-text-primary')
    expect(btn).toHaveClass('text-bg-primary')
  })

  it('renders ghost variant with no background', () => {
    render(<Button variant="ghost">Learn more</Button>)
    const btn = screen.getByRole('button', { name: 'Learn more' })
    expect(btn).toHaveClass('bg-transparent')
  })

  it('renders as anchor when href is provided', () => {
    render(<Button variant="primary" href="/quiz">Take the quiz</Button>)
    const link = screen.getByRole('link', { name: 'Take the quiz' })
    expect(link).toHaveAttribute('href', '/quiz')
  })

  it('applies uppercase letter-spacing label style', () => {
    render(<Button variant="primary">Apply</Button>)
    const btn = screen.getByRole('button', { name: 'Apply' })
    expect(btn).toHaveClass('uppercase')
    expect(btn).toHaveClass('tracking-label')
  })
})
