import { render, screen } from '@testing-library/react'
import { StatsStrip } from '@/components/sections/StatsStrip'

describe('StatsStrip', () => {
  it('renders all four stats', () => {
    render(<StatsStrip />)
    expect(screen.getByText('13.9M')).toBeInTheDocument()
    expect(screen.getByText('64%')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsStrip />)
    expect(screen.getByText(/combined followers/i)).toBeInTheDocument()
    expect(screen.getByText(/female/i)).toBeInTheDocument()
    expect(screen.getByText(/core markets/i)).toBeInTheDocument()
    expect(screen.getByText(/paid advertising/i)).toBeInTheDocument()
  })
})
