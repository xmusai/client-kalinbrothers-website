import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'

describe('Hero', () => {
  it('renders the primary headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/the proof/i)).toBeInTheDocument()
  })

  it('renders the eyebrow stat label', () => {
    render(<Hero />)
    expect(screen.getByText(/13\.9M/i)).toBeInTheDocument()
  })

  it('renders primary CTA linking to community quiz', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /join the community/i })
    expect(cta).toHaveAttribute('href', '/quiz')
  })

  it('renders secondary CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})
