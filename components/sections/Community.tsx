import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'

export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{ minHeight: '85vh', borderBottom: '1px solid #1E1E1E' }}
    >
      <Image
        src="/images/dance.jpg"
        alt="Kalin Brothers performing"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 60%', transform: 'scale(1.05)' }}
        sizes="100vw"
      />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'rgba(8,8,8,0.78)' }} />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(8,8,8,0.5) 70%, rgba(8,8,8,0.72) 100%)' }} />

      <div className="relative z-10 px-8 md:px-14 py-28 md:py-40 max-w-[740px] mx-auto">

        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-9">
            <span aria-hidden="true" style={{ display: 'block', width: '20px', height: '1px', background: '#D4A853', opacity: 0.55 }} />
            <span className="label">The community</span>
            <span aria-hidden="true" style={{ display: 'block', width: '20px', height: '1px', background: '#D4A853', opacity: 0.55 }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-display leading-[0.93] tracking-[-0.025em] mb-10"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              textShadow: '0 4px 40px rgba(0,0,0,0.5)',
            }}
          >
            You already made<br />
            <em style={{ fontStyle: 'italic', color: '#D4A853' }}>the decision.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="font-body font-light leading-[2.1] mb-12 mx-auto"
            style={{ fontSize: '0.86rem', color: 'rgba(245,240,232,0.52)', maxWidth: '440px' }}
          >
            A space for the people who chose differently. Not a fan group —
            a community built around one idea: you can build a life on content,
            and here&apos;s what that actually looks like.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/quiz"
              id="community-cta-quiz"
              className="font-body font-medium uppercase cursor-pointer transition-all duration-300 hover:opacity-80"
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
              Take the quiz
            </Link>
            <Link
              href="#about"
              id="community-cta-about"
              className="font-body uppercase cursor-pointer transition-colors duration-200"
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: 'rgba(245,240,232,0.42)',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 4px',
              }}
            >
              Learn more →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
