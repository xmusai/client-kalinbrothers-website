import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'

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
      {/* Left: photo */}
      <div className="relative overflow-hidden min-h-[360px] md:min-h-[580px]">
        <Image
          src="/images/studio.jpg"
          alt="Kalin Brothers — brand portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 15%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to left, rgba(8,8,8,0.6) 0%, transparent 45%)' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.45) 0%, transparent 35%)' }} />
      </div>

      {/* Right: copy */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-36"
        style={{ borderLeft: '1px solid #1E1E1E' }}
      >
        <Reveal>
          <div className="label-row">
            <span className="label-rule" aria-hidden="true" />
            <span className="label">For brands</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="font-display leading-[0.93] tracking-[-0.025em] mb-8"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 600, color: '#F5F0E8' }}
          >
            Work with us.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="font-body font-light leading-[2.1] mb-12 max-w-[380px]"
            style={{ fontSize: '0.86rem', color: 'rgba(245,240,232,0.52)' }}
          >
            Built without advertising — the audience is real, loyal, and
            concentrated in five high-purchasing markets across Europe and the Americas.
          </p>
        </Reveal>

        {/* Audience stat grid */}
        <Reveal delay={240}>
          <div
            className="grid grid-cols-2 mb-14"
            style={{ border: '1px solid #1E1E1E', borderRight: 'none', borderBottom: 'none' }}
          >
            {audienceStats.map(({ value, label }) => (
              <div
                key={label}
                className="px-7 py-7"
                style={{ borderRight: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E' }}
              >
                <div aria-hidden="true"
                  style={{ width: '16px', height: '1px', background: '#D4A853', opacity: 0.5, marginBottom: '12px' }} />
                <p
                  className="font-display font-light leading-none tracking-[-0.02em] mb-2"
                  style={{ fontSize: '2.2rem', color: '#F5F0E8' }}
                >
                  {value}
                </p>
                <p
                  className="font-body uppercase"
                  style={{ fontSize: '0.5rem', letterSpacing: '0.22em', color: 'rgba(245,240,232,0.32)' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <Link
            href="/brands"
            id="brands-cta-contact"
            className="self-start font-body font-medium uppercase cursor-pointer transition-all duration-300 hover:opacity-80"
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.22em',
              background: '#D4A853',
              color: '#080808',
              padding: '16px 40px',
              minHeight: '52px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Get in touch
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
