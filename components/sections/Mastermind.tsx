import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'

export function Mastermind() {
  return (
    <section
      id="mastermind"
      className="relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{ minHeight: '90vh', borderBottom: '1px solid #1E1E1E' }}
    >
      <Image
        src="/images/lift.jpg"
        alt="Kalin Brothers performing acrobatics"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 55%' }}
        sizes="100vw"
      />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'rgba(8,8,8,0.7)' }} />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 65%, rgba(199,94,58,0.08) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 55%)' }} />

      <div className="relative z-10 px-8 md:px-14 py-28 md:py-40 max-w-[760px] mx-auto">

        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span aria-hidden="true" style={{ display: 'block', width: '20px', height: '1px', background: '#D4A853', opacity: 0.5 }} />
            <span className="label">What&apos;s coming</span>
            <span aria-hidden="true" style={{ display: 'block', width: '20px', height: '1px', background: '#D4A853', opacity: 0.5 }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-display leading-[0.88] tracking-[-0.025em] mb-9"
            style={{ fontSize: 'clamp(3rem, 10vw, 9.5rem)', fontWeight: 600, color: '#F5F0E8' }}
          >
            The<br />
            <em style={{ fontStyle: 'italic', color: '#D4A853', fontWeight: 300 }}>Mastermind.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="font-body font-light leading-[2.1] mb-13 mx-auto"
            style={{ fontSize: '0.86rem', color: 'rgba(245,240,232,0.52)', maxWidth: '400px', marginBottom: '3.25rem' }}
          >
            A full event. A travel experience. Everything they know — given to
            the people who are ready for it.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Link
            href="/mastermind"
            id="mastermind-cta-interest"
            className="inline-flex items-center font-body uppercase cursor-pointer transition-all duration-300 hover:border-gold hover:text-gold"
            style={{
              fontSize: '0.56rem',
              letterSpacing: '0.24em',
              color: 'rgba(212,168,83,0.65)',
              border: '1px solid rgba(212,168,83,0.28)',
              padding: '16px 36px',
              minHeight: '52px',
            }}
          >
            Not open yet — join the interest list
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
