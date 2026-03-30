import { render, screen } from '@testing-library/react'
import { Community } from '@/components/sections/Community'

describe('Community', () => {
  it('renders the section label', () => {
    render(<Community />)
    expect(screen.getByText(/the community/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Community />)
    expect(screen.getByRole('heading', { level: 2, name: /the decision/i })).toBeInTheDocument()
  })

  it('renders Take the quiz CTA linking to /quiz', () => {
    render(<Community />)
    const cta = screen.getByRole('link', { name: /take the quiz/i })
    expect(cta).toHaveAttribute('href', '/quiz')
  })
})
