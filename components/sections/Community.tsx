import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Community() {
  return (
    <section
      id="community"
      className="px-12 py-24 text-center border-b border-border-base bg-bg-primary"
    >
      <SectionLabel className="justify-center">The community</SectionLabel>

      <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary max-w-[520px] mx-auto mb-5">
        You already made the decision.
      </h2>

      <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9] max-w-[420px] mx-auto mb-10">
        A space for the people who chose differently. Not a fan group — a community
        built around one idea: you can build a life on content, and here&apos;s what
        that actually looks like.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button variant="primary" href="/quiz">Take the quiz</Button>
        <Button variant="ghost" href="#about">Learn more</Button>
      </div>
    </section>
  )
}
