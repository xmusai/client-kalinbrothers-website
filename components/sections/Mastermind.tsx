import Image from 'next/image'
import Link from 'next/link'

export function Mastermind() {
  return (
    <section
      id="mastermind"
      className="relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{ minHeight: '85vh', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Background: lift.jpg — one brother lifts the other, dramatic sky */}
      <Image
        src="/images/lift.jpg"
        alt="Kalin Brothers performing acrobatics"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 55%' }}
        sizes="100vw"
      />

      {/* Layered overlays — dark with subtle warm tone */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'rgba(8,8,8,0.68)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 65%, rgba(199,94,58,0.1) 0%, transparent 65%)',
        }}
      />
      {/* Bottom darkening */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 50%)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14 py-28 md:py-36 max-w-[740px] mx-auto">

        <p
          className="font-body uppercase mb-9"
          style={{ fontSize: '0.58rem', letterSpacing: '0.26em', color: 'rgba(212,168,83,0.75)' }}
        >
          What&apos;s coming
        </p>

        <h2
          className="font-display leading-[0.88] tracking-[-0.02em] mb-8"
          style={{
            fontSize: 'clamp(2.8rem, 10vw, 9rem)',
            fontWeight: 600,
            color: '#F5F0E8',
          }}
        >
          The<br />
          <em
            style={{ fontStyle: 'italic', color: '#D4A853', fontWeight: 300 }}
          >
            Mastermind.
          </em>
        </h2>

        <p
          className="font-body font-light leading-[2] mb-12 mx-auto"
          style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.48)', maxWidth: '380px' }}
        >
          A full event. A travel experience. Everything they know — given to
          the people who are ready for it.
        </p>

        {/* Interest list CTA with hover upgrade */}
        <Link
          href="/mastermind"
          id="mastermind-cta-interest"
          className="inline-block font-body uppercase cursor-pointer transition-all duration-300 hover:border-gold hover:text-gold"
          style={{
            fontSize: '0.56rem',
            letterSpacing: '0.22em',
            color: 'rgba(212,168,83,0.55)',
            border: '1px solid rgba(212,168,83,0.22)',
            padding: '14px 32px',
          }}
        >
          Not open yet — join the interest list
        </Link>
      </div>
    </section>
  )
}
