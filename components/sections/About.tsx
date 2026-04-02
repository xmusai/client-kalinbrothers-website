import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: '#080808', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Left: editorial copy */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-36 order-2 md:order-1"
        style={{ borderRight: '1px solid #1E1E1E' }}
      >
        <Reveal>
          <div className="label-row">
            <span className="label-rule" aria-hidden="true" />
            <span className="label">The story</span>
          </div>
        </Reveal>

        {/* Watermark */}
        <span
          aria-hidden="true"
          className="font-display font-light leading-none select-none"
          style={{
            fontSize: 'clamp(6rem, 14vw, 12rem)',
            color: 'rgba(245,240,232,0.03)',
            lineHeight: 1,
            display: 'block',
            marginBottom: '-2.5rem',
            letterSpacing: '-0.04em',
          }}
        >
          KB
        </span>

        <Reveal delay={80}>
          <h2
            className="font-display leading-[0.93] tracking-[-0.025em] mb-9 relative z-10"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 600, color: '#F5F0E8' }}
          >
            They chose<br />
            a{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#D4A853' }}>
              different road.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="font-body font-light leading-[2.1] mb-11 max-w-[380px]"
            style={{ fontSize: '0.86rem', color: 'rgba(245,240,232,0.55)' }}
          >
            No university. No corporate ladder. A camera, a decision,
            and a belief that the alternative path was real — before anyone
            had proven it. 13.9 million people followed.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <blockquote
            style={{
              borderLeft: '2px solid rgba(212,168,83,0.55)',
              paddingLeft: '1.6rem',
              maxWidth: '360px',
            }}
          >
            <p
              className="font-display font-light leading-[1.45]"
              style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(245,240,232,0.7)' }}
            >
              &ldquo;The proof that it&apos;s possible — and the people
              who will show you how.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>

      {/* Right: photo */}
      <div className="relative overflow-hidden order-1 md:order-2 min-h-[400px] md:min-h-[620px]">
        <Image
          src="/images/brand-shot.jpg"
          alt="Kalin Brothers — brand portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 15%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.4) 0%, transparent 30%)' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 35%)' }} />
      </div>
    </section>
  )
}
