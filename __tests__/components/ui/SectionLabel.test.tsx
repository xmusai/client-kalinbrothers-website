import { render, screen } from '@testing-library/react'
import { SectionLabel } from '@/components/ui/SectionLabel'

describe('SectionLabel', () => {
  it('renders the label text', () => {
    render(<SectionLabel>The story</SectionLabel>)
    expect(screen.getByText('The story')).toBeInTheDocument()
  })

  it('applies gold colour and uppercase tracking', () => {
    render(<SectionLabel>The dinner</SectionLabel>)
    const el = screen.getByText('The dinner')
    expect(el).toHaveClass('text-accent-gold')
    expect(el).toHaveClass('uppercase')
    expect(el).toHaveClass('tracking-wide')
  })
})
