import { render, screen } from '@testing-library/react'
import { BrandDeals } from '@/components/sections/BrandDeals'

describe('BrandDeals', () => {
  it('renders the section label', () => {
    render(<BrandDeals />)
    expect(screen.getByText(/for brands/i)).toBeInTheDocument()
  })

  it('renders audience data', () => {
    render(<BrandDeals />)
    expect(screen.getByText(/13\.9M/i)).toBeInTheDocument()
    expect(screen.getByText(/64%/i)).toBeInTheDocument()
  })

  it('renders Get in touch CTA linking to /brands', () => {
    render(<BrandDeals />)
    const cta = screen.getByRole('link', { name: /get in touch/i })
    expect(cta).toHaveAttribute('href', '/brands')
  })
})
