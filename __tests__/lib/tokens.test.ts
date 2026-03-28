import { colors, fontFamily, spacing } from '@/lib/tokens'

describe('design tokens', () => {
  it('exports background primary as true black', () => {
    expect(colors.bgPrimary).toBe('#000000')
  })
  it('exports accent gold', () => {
    expect(colors.accentGold).toBe('#D4A853')
  })
  it('exports primary text as warm ivory', () => {
    expect(colors.textPrimary).toBe('#F0EBE3')
  })
  it('exports font families', () => {
    expect(fontFamily.display).toBe('var(--font-cormorant)')
    expect(fontFamily.body).toBe('var(--font-space-grotesk)')
  })
})
