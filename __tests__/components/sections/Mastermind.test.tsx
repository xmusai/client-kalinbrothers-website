import { render, screen } from '@testing-library/react'
import { Mastermind } from '@/components/sections/Mastermind'

describe('Mastermind', () => {
  it('renders the section label', () => {
    render(<Mastermind />)
    expect(screen.getByText(/what's coming/i)).toBeInTheDocument()
  })

  it('renders The Mastermind headline', () => {
    render(<Mastermind />)
    expect(screen.getByRole('heading', { level: 2, name: /mastermind/i })).toBeInTheDocument()
  })

  it('renders the interest list tag (not a full CTA button)', () => {
    render(<Mastermind />)
    expect(screen.getByText(/interest list/i)).toBeInTheDocument()
    // Must not be a primary button — Mastermind is not open yet
    expect(screen.queryByRole('link', { name: /buy/i })).not.toBeInTheDocument()
  })
})
