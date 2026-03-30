import { render, screen } from '@testing-library/react'
import { About } from '@/components/sections/About'

describe('About', () => {
  it('renders the section label', () => {
    render(<About />)
    expect(screen.getByText(/the story/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /different road/i })).toBeInTheDocument()
  })

  it('renders the photo placeholder', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /kalin brothers/i })).toBeInTheDocument()
  })
})
