import Image from 'next/image'

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: '#080808', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Left: editorial copy */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-32 order-2 md:order-1"
        style={{ borderRight: '1px solid #1E1E1E' }}
      >
        {/* Label */}
        <p
          className="font-body uppercase mb-8"
          style={{ fontSize: '0.58rem', letterSpacing: '0.26em', color: 'rgba(212,168,83,0.75)' }}
        >
          The story
        </p>

        {/* Decorative large watermark */}
        <span
          aria-hidden="true"
          className="font-display font-light leading-none select-none"
          style={{
            fontSize: 'clamp(6rem, 14vw, 12rem)',
            color: 'rgba(245,240,232,0.035)',
            lineHeight: 1,
            display: 'block',
            marginBottom: '-2.5rem',
            letterSpacing: '-0.04em',
          }}
        >
          KB
        </span>

        <h2
          className="font-display leading-[0.93] tracking-[-0.02em] mb-8 relative z-10"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 600, color: '#F5F0E8' }}
        >
          They chose<br />
          a{' '}
          <em
            style={{ fontStyle: 'italic', fontWeight: 300, color: '#D4A853' }}
          >
            different road.
          </em>
        </h2>

        <p
          className="font-body font-light leading-[1.95] mb-10 max-w-[360px]"
          style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.48)' }}
        >
          No university. No corporate ladder. A camera, a decision,
          and a belief that the alternative path was real — before anyone
          had proven it. 13.9 million people followed.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: '2px solid rgba(212,168,83,0.45)',
            paddingLeft: '1.5rem',
            maxWidth: '340px',
          }}
        >
          <p
            className="font-display font-light leading-[1.4]"
            style={{
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.65)',
            }}
          >
            &ldquo;The proof that it&apos;s possible — and the people
            who will show you how.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Right: brand cover photo — use studio.jpg (dark BG, faces visible) */}
      <div className="relative overflow-hidden order-1 md:order-2 min-h-[400px] md:min-h-[620px]">
        <Image
          src="/images/brand-shot.jpg"
          alt="Kalin Brothers — brand portrait"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 15%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle vignette edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.35) 0%, transparent 25%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 30%)' }}
        />
      </div>
    </section>
  )
}
