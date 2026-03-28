import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Kalin Brothers')).toBeInTheDocument()
  })

  it('renders Instagram and TikTok links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('renders privacy link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument()
  })
})
