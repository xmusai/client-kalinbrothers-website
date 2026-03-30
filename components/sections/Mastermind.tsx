import { SectionLabel } from '@/components/ui/SectionLabel'

export function Mastermind() {
  return (
    <section
      id="mastermind"
      className="relative overflow-hidden px-12 py-24 text-center border-b border-border-base bg-bg-primary"
    >
      {/* Subtle gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,168,83,0.04)_0%,transparent_65%)]"
      />

      <SectionLabel className="justify-center">What&apos;s coming</SectionLabel>

      <h2 className="font-display text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary max-w-[560px] mx-auto mb-5 relative z-10">
        The Mastermind.
      </h2>

      <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9] max-w-[380px] mx-auto mb-8 relative z-10">
        A full event. A travel experience. Everything they know — given to
        the people who are ready for it.
      </p>

      <span className="inline-block text-[0.6rem] font-body uppercase tracking-wide text-accent-gold opacity-40 border border-accent-gold/15 px-5 py-2 relative z-10">
        Not open yet — join the interest list
      </span>
    </section>
  )
}
