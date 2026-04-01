import Image from 'next/image'
import Link from 'next/link'

export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{ minHeight: '80vh', borderBottom: '1px solid #1E1E1E' }}
    >
      {/* Background — dance.jpg is bright/energetic; position to center action */}
      <Image
        src="/images/dance.jpg"
        alt="Kalin Brothers performing"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 60%', transform: 'scale(1.05)' }}
        sizes="100vw"
      />

      {/* Layered overlays: dark vignette all around + warm center falloff */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'rgba(8,8,8,0.76)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(8,8,8,0.45) 70%, rgba(8,8,8,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14 py-28 md:py-36 max-w-[720px] mx-auto">

        <p
          className="font-body uppercase mb-8"
          style={{ fontSize: '0.58rem', letterSpacing: '0.26em', color: 'rgba(212,168,83,0.75)' }}
        >
          The community
        </p>

        <h2
          className="font-display leading-[0.93] tracking-[-0.02em] mb-9"
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 6rem)',
            fontWeight: 300,
            color: '#F5F0E8',
            textShadow: '0 4px 40px rgba(0,0,0,0.6)',
          }}
        >
          You already made<br />
          <em
            style={{ fontStyle: 'italic', color: '#D4A853' }}
          >
            the decision.
          </em>
        </h2>

        <p
          className="font-body font-light leading-[2] mb-12 mx-auto"
          style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.48)', maxWidth: '420px' }}
        >
          A space for the people who chose differently. Not a fan group —
          a community built around one idea: you can build a life on content,
          and here&apos;s what that actually looks like.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/quiz"
            id="community-cta-quiz"
            className="font-body font-medium uppercase px-9 py-4 cursor-pointer transition-all duration-300 hover:opacity-85 hover:scale-[1.02]"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              background: '#F5F0E8',
              color: '#080808',
            }}
          >
            Take the quiz
          </Link>
          <Link
            href="#about"
            id="community-cta-about"
            className="font-body uppercase cursor-pointer transition-colors duration-200"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'rgba(245,240,232,0.35)',
            }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  )
}
