import Image from 'next/image'
import Link from 'next/link'

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
      {/* Left: editorial copy + facts */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-32"
        style={{ borderRight: '1px solid #1E1E1E' }}
      >
        <p
          className="font-body uppercase mb-8"
          style={{ fontSize: '0.58rem', letterSpacing: '0.26em', color: 'rgba(212,168,83,0.75)' }}
        >
          The dinner
        </p>

        <h2
          className="font-display leading-[0.93] tracking-[-0.02em] mb-7"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', fontWeight: 600, color: '#F5F0E8' }}
        >
          12 guests.<br />One evening.
        </h2>

        <p
          className="font-body font-light leading-[2] mb-12 max-w-[360px]"
          style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.48)' }}
        >
          Not a seminar. A table. You eat with them, you talk, you ask anything.
          €100 — not the cost of the meal. The price of being taken seriously.
        </p>

        {/* Facts */}
        <div className="flex flex-col mb-14">
          {dinnerFacts.map(({ value, description, small }) => (
            <div
              key={value}
              className="flex items-start gap-7 py-6"
              style={{ borderTop: '1px solid #1E1E1E' }}
            >
              <span
                className="font-display font-light leading-none flex-shrink-0"
                style={{
                  fontSize: small ? '1.05rem' : '2.8rem',
                  color: '#D4A853',
                  opacity: small ? 0.5 : 0.9,
                  minWidth: '76px',
                  paddingTop: small ? '4px' : 0,
                }}
              >
                {value}
              </span>
              <p
                className="font-body font-light leading-[1.8] pt-1"
                style={{ fontSize: '0.76rem', color: 'rgba(245,240,232,0.42)' }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/dinner"
          id="dinner-cta-apply"
          className="self-start font-body font-medium uppercase px-9 py-4 cursor-pointer transition-all duration-300 hover:opacity-85 hover:scale-[1.02]"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            background: '#F5F0E8',
            color: '#080808',
          }}
        >
          Apply for a seat
        </Link>
      </div>

      {/* Right: close-up.jpg — dark, intimate portrait — perfect match */}
      <div className="relative" style={{ minHeight: '640px' }}>
        <Image
          src="/images/close-up.jpg"
          alt="Kalin Brothers — intimate portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '55% 30%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Blends left edge into section */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.5) 0%, transparent 30%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.4) 0%, transparent 40%)' }}
        />
      </div>
    </section>
  )
}
