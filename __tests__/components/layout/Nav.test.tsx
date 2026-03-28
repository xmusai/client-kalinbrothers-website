import { render, screen } from '@testing-library/react'
import { Nav } from '@/components/layout/Nav'

describe('Nav', () => {
  it('renders the brand name', () => {
    render(<Nav />)
    expect(screen.getByText('Kalin Brothers')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /community/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /mastermind/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /brands/i })).toBeInTheDocument()
  })

  it('renders the Apply CTA linking to /dinner', () => {
    render(<Nav />)
    const applyLink = screen.getByRole('link', { name: /apply/i })
    expect(applyLink).toHaveAttribute('href', '/dinner')
  })
})
