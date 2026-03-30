import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Homepage', () => {
  it('renders all sections in order', () => {
    render(<Home />)
    const headings = screen.getAllByRole('heading')
    const texts = headings.map(h => h.textContent ?? '')
    // h1 comes before h2s
    expect(texts[0]).toMatch(/proof/i)
  })

  it('renders the nav and footer', () => {
    render(<Home />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('has no broken internal links (all hrefs defined)', () => {
    render(<Home />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      const href = link.getAttribute('href')
      expect(href).toBeTruthy()
      expect(href).not.toBe('#')
    })
  })
})
