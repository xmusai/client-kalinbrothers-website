'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '700px' }}
    >

      {/* ── Photo: acrobatic.jpg — 1600×2405px, highest resolution ── */}
      <Image
        src="/images/acrobatic.jpg"
        alt="Kalin Brothers — editorial action portrait"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: '50% 62%' }}
        sizes="100vw"
        quality={95}
      />

      {/* ── Dark base layer ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'rgba(6,6,6,0.55)' }}
      />

      {/* ── Strong bottom-up dark fade ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(6,6,6,1) 0%, rgba(6,6,6,0.92) 18%, rgba(6,6,6,0.55) 45%, rgba(6,6,6,0.1) 72%, transparent 100%)',
        }}
      />

      {/* ── Left side dark fade for text legibility ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(6,6,6,0.88) 0%, rgba(6,6,6,0.55) 40%, rgba(6,6,6,0.15) 65%, transparent 85%)',
        }}
      />

      {/* ── Top nav fade ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(6,6,6,0.6) 0%, transparent 18%)',
        }}
      />

      {/* ════════════════════════════════════════
          MAGAZINE COVER LAYOUT
          ════════════════════════════════════════ */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-14 lg:px-20 pt-28 pb-10 md:pb-14">

        {/* ── TOP ROW: magazine meta ── */}
        <div className="flex items-center justify-between">
          {/* Left meta */}
          <div className="flex items-center gap-5">
            <div
              aria-hidden="true"
              style={{ width: '28px', height: '1px', background: '#C41E3A', opacity: 0.9 }}
            />
            <span
              className="font-body uppercase"
              style={{ fontSize: '0.54rem', letterSpacing: '0.28em', color: 'rgba(245,240,232,0.38)' }}
            >
              Vol. 01 · 2026
            </span>
          </div>

          {/* Right meta */}
          <span
            className="font-body uppercase hidden sm:block"
            style={{ fontSize: '0.54rem', letterSpacing: '0.28em', color: 'rgba(245,240,232,0.25)' }}
          >
            Europe &amp; The Americas
          </span>
        </div>

        {/* ── MAIN CONTENT: bottom anchored ── */}
        <div className="flex flex-col">

          {/* Red vertical accent bar + eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <div
              aria-hidden="true"
              style={{ width: '3px', height: '40px', background: '#C41E3A', borderRadius: '0' }}
            />
            <div className="flex flex-col gap-1.5">
              <span
                className="font-body uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.30em', color: '#C41E3A', opacity: 0.9 }}
              >
                Kalin Brothers
              </span>
              <span
                className="font-body uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.28em', color: 'rgba(245,240,232,0.28)' }}
              >
                13.9M · Content · Travel · Business
              </span>
            </div>
          </div>

          {/* ── HEADLINE: magazine cover style ── */}
          <h1
            className="font-display leading-[0.88] tracking-[-0.035em] mb-3"
            style={{
              fontSize: 'clamp(3rem, 11.5vw, 10rem)',
              fontWeight: 700,
              color: '#F5F0E8',
              maxWidth: '820px',
            }}
          >
            {/* "THE" — red, condensed, small */}
            <span
              className="block font-display uppercase"
              style={{
                fontSize: 'clamp(1rem, 2.4vw, 2rem)',
                fontWeight: 400,
                letterSpacing: '0.35em',
                color: '#C41E3A',
                marginBottom: '0.15em',
              }}
            >
              The proof that
            </span>
            {/* Main word — white, massive serif */}
            <span className="block" style={{ lineHeight: 0.9 }}>
              it&apos;s
            </span>
            {/* Italic gold accent */}
            <em
              className="block font-display"
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#F5F0E8',
                lineHeight: 0.9,
              }}
            >
              possible.
            </em>
          </h1>

          {/* ── Red rule separator ── */}
          <div
            aria-hidden="true"
            style={{
              width: 'clamp(180px, 28vw, 340px)',
              height: '2px',
              background: 'linear-gradient(to right, #C41E3A, rgba(196,30,58,0.15))',
              marginTop: '1.8rem',
              marginBottom: '1.6rem',
            }}
          />

          {/* ── Bottom row: description + CTAs ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
            <p
              className="font-body font-light leading-[2]"
              style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.42)', maxWidth: '280px' }}
            >
              Two brothers. No plan, no permission, no prescribed path.
              Built from nothing — and still building.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-2 sm:mt-0">
              <Link
                href="/quiz"
                id="hero-cta-join"
                className="font-body font-medium uppercase transition-all duration-300 hover:bg-opacity-90 hover:scale-[1.02]"
                style={{
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  padding: '14px 32px',
                  background: '#C41E3A',
                  color: '#F5F0E8',
                }}
              >
                Join the community
              </Link>
              <Link
                href="#about"
                id="hero-cta-learn"
                className="font-body uppercase transition-colors duration-200"
                style={{
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(245,240,232,0.3)',
                }}
              >
                Our story →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Right edge: issue number vertical ── */}
      <div
        aria-hidden="true"
        className="absolute right-7 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
      >
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(196,30,58,0.5))' }} />
        <span
          className="font-body"
          style={{
            fontSize: '0.46rem',
            letterSpacing: '0.28em',
            color: 'rgba(245,240,232,0.15)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          SCROLL
        </span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(196,30,58,0.4), transparent)' }} />
      </div>

    </section>
  )
}
