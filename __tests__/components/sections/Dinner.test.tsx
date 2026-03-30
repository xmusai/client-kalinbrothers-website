import { render, screen } from '@testing-library/react'
import { Dinner } from '@/components/sections/Dinner'

describe('Dinner', () => {
  it('renders the section label', () => {
    render(<Dinner />)
    expect(screen.getByText(/the dinner/i)).toBeInTheDocument()
  })

  it('renders the headline with guest count', () => {
    render(<Dinner />)
    expect(screen.getByRole('heading', { level: 2, name: /12 guests/i })).toBeInTheDocument()
  })

  it('renders dinner facts: guest count, price, location', () => {
    render(<Dinner />)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('€100')).toBeInTheDocument()
    expect(screen.getByText(/DE · BE · NL/i)).toBeInTheDocument()
  })

  it('renders Apply CTA linking to /dinner', () => {
    render(<Dinner />)
    const cta = screen.getByRole('link', { name: /apply for a seat/i })
    expect(cta).toHaveAttribute('href', '/dinner')
  })
})
