import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

type DinnerFact = {
  value: string
  description: string
  small?: boolean
}

const dinnerFacts: DinnerFact[] = [
  {
    value: '12',
    description:
      "Guests. Not because we couldn't fill a room — because we chose not to.",
  },
  {
    value: '€100',
    description:
      'The price of being taken seriously. This is an application, not a ticket.',
  },
  {
    value: 'DE · BE · NL',
    description: 'Germany, Belgium, or the Netherlands. Location confirmed with guests.',
    small: true,
  },
]

export function Dinner() {
  return (
    <section
      id="dinner"
      className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-12 py-20 border-b border-border-base bg-bg-surface"
    >
      {/* Left: copy */}
      <div>
        <SectionLabel>The dinner</SectionLabel>
        <h2 className="font-display text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary mb-5">
          12 guests. One evening.
        </h2>
        <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9] mb-8">
          Not a seminar. A table. You eat with them, you talk, you ask anything.
          €100 — not the cost of the meal. The price of being taken seriously.
        </p>
        <Button variant="primary" href="/dinner">Apply for a seat</Button>
      </div>

      {/* Right: facts */}
      <div className="flex flex-col">
        {dinnerFacts.map(({ value, description, small }) => (
          <div
            key={value}
            className="flex items-baseline gap-6 py-5 border-t border-border-base last:border-b"
          >
            <span
              className={`font-display font-light text-accent-gold leading-none opacity-80 min-w-[70px] ${
                small ? 'text-[1.1rem] opacity-40' : 'text-[2.8rem]'
              }`}
            >
              {value}
            </span>
            <p className="text-[0.75rem] font-body font-light text-text-muted leading-[1.7]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
