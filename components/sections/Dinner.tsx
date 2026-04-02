import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'

type DinnerFact = {
  value: string
  description: string
  small?: boolean
}

const dinnerFacts: DinnerFact[] = [
  {
    value: '12',
    description: "Guests. Not because we couldn't fill a room — because we chose not to.",
  },
  {
    value: '€100',
    description: 'The price of being taken seriously. This is an application, not a ticket.',
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
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: '#0D0D0D', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Left: copy */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-36"
        style={{ borderRight: '1px solid #1E1E1E' }}
      >
        <Reveal>
          <div className="label-row">
            <span className="label-rule" aria-hidden="true" />
            <span className="label">The dinner</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="font-display leading-[0.93] tracking-[-0.025em] mb-8"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', fontWeight: 600, color: '#F5F0E8' }}
          >
            12 guests.<br />One evening.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="font-body font-light leading-[2.1] mb-14 max-w-[380px]"
            style={{ fontSize: '0.86rem', color: 'rgba(245,240,232,0.52)' }}
          >
            Not a seminar. A table. You eat with them, you talk, you ask anything.
            €100 — not the cost of the meal. The price of being taken seriously.
          </p>
        </Reveal>

        {/* Facts */}
        <div className="flex flex-col mb-14">
          {dinnerFacts.map(({ value, description, small }, i) => (
            <Reveal key={value} delay={220 + i * 90}>
              <div
                className="flex items-start gap-8 py-7"
                style={{ borderTop: '1px solid #1E1E1E' }}
              >
                <span
                  className="font-display font-light leading-none flex-shrink-0"
                  style={{
                    fontSize: small ? '1.1rem' : '3.2rem',
                    color: '#D4A853',
                    opacity: small ? 0.55 : 1,
                    minWidth: '82px',
                    paddingTop: small ? '5px' : 0,
                  }}
                >
                  {value}
                </span>
                <p
                  className="font-body font-light leading-[1.9] pt-1"
                  style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.48)' }}
                >
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={520}>
          <Link
            href="/dinner"
            id="dinner-cta-apply"
            className="self-start font-body font-medium uppercase cursor-pointer transition-all duration-300 hover:opacity-80"
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.22em',
              background: '#F5F0E8',
              color: '#080808',
              padding: '16px 40px',
              minHeight: '52px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Apply for a seat
          </Link>
        </Reveal>
      </div>

      {/* Right: photo */}
      <div className="relative min-h-[380px] md:min-h-[640px]">
        <Image
          src="/images/close-up.jpg"
          alt="Kalin Brothers — intimate portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '55% 30%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.55) 0%, transparent 35%)' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.45) 0%, transparent 40%)' }} />
      </div>
    </section>
  )
}
