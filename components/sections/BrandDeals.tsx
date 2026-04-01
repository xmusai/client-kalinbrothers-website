import Image from 'next/image'
import Link from 'next/link'

const audienceStats = [
  { value: '13.9M', label: 'followers' },
  { value: '64%',   label: 'female' },
  { value: '25–34', label: 'core age' },
  { value: '5',     label: 'markets' },
]

export function BrandDeals() {
  return (
    <section
      id="brands"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: '#080808', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Left: acrobatic.jpg — sunny outdoor energy, contrasts the dark right col */}
      <div className="relative overflow-hidden" style={{ minHeight: '580px' }}>
        <Image
          src="/images/studio.jpg"
          alt="Kalin Brothers — brand portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 35%', transform: 'scale(1.1)' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Right fade blends into copy column */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to left, rgba(8,8,8,0.55) 0%, transparent 40%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 35%)' }}
        />
      </div>

      {/* Right: brand deals copy */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-32"
        style={{ borderLeft: '1px solid #1E1E1E' }}
      >
        <p
          className="font-body uppercase mb-8"
          style={{ fontSize: '0.58rem', letterSpacing: '0.26em', color: 'rgba(212,168,83,0.75)' }}
        >
          For brands
        </p>

        <h2
          className="font-display leading-[0.93] tracking-[-0.02em] mb-7"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 600, color: '#F5F0E8' }}
        >
          Work with us.
        </h2>

        <p
          className="font-body font-light leading-[2] mb-12 max-w-[360px]"
          style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.48)' }}
        >
          Built without advertising — the audience is real, loyal, and
          concentrated in five high-purchasing markets across Europe and the Americas.
        </p>

        {/* Audience stat grid */}
        <div
          className="grid grid-cols-2 mb-14"
          style={{ border: '1px solid #1E1E1E', borderRight: 'none', borderBottom: 'none' }}
        >
          {audienceStats.map(({ value, label }) => (
            <div
              key={label}
              className="px-7 py-6"
              style={{ borderRight: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E' }}
            >
              {/* Gold accent line */}
              <div
                aria-hidden="true"
                style={{ width: '16px', height: '1px', background: '#D4A853', opacity: 0.45, marginBottom: '10px' }}
              />
              <p
                className="font-display font-light leading-none tracking-[-0.02em] mb-1.5"
                style={{ fontSize: '2rem', color: '#F5F0E8' }}
              >
                {value}
              </p>
              <p
                className="font-body uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.3)' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/brands"
          id="brands-cta-contact"
          className="self-start font-body font-medium uppercase px-9 py-4 cursor-pointer transition-all duration-300 hover:opacity-85 hover:scale-[1.02]"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            background: '#D4A853',
            color: '#080808',
          }}
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
