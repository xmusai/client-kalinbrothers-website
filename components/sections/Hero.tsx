import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-12 pt-28 pb-20">
      {/* Background watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-1rem] top-1/2 -translate-y-1/2 font-display text-[18rem] font-bold leading-none tracking-[-0.05em] text-bg-surface"
      >
        KB
      </span>

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-14">
        <div className="w-6 h-px bg-accent-gold opacity-40" aria-hidden="true" />
        <p className="text-[0.6rem] font-body uppercase tracking-wide text-text-ghost">
          13.9M · Europe &amp; Americas
        </p>
      </div>

      {/* Headline */}
      <h1 className="font-display text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-text-primary mb-12 relative z-10 max-w-[700px]">
        The proof<br />
        that{' '}
        <em className="font-light italic text-accent-gold not-italic">it&apos;s</em>
        <br />
        possible.
      </h1>

      {/* Lower row */}
      <div className="relative z-10 flex items-end justify-between">
        <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9] max-w-[300px]">
          Two brothers. No plan, no permission, no prescribed path.
          Built from nothing — and still building.
        </p>

        <div className="text-right flex flex-col items-end gap-3">
          <Button variant="primary" href="/quiz">
            Join the community →
          </Button>
          <Button variant="ghost" href="#about">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
