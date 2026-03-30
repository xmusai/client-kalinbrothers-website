import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function BrandDeals() {
  return (
    <section
      id="brands"
      className="flex flex-col md:flex-row items-center justify-between gap-12 px-12 py-14 bg-bg-surface border-b border-border-base"
    >
      <div>
        <SectionLabel>For brands</SectionLabel>
        <h2 className="font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary mb-3">
          Work with us.
        </h2>
        <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9] max-w-[380px]">
          13.9M followers. 64% female, 25–34, across Germany, France, UK, USA,
          and Mexico. Built without advertising — the audience is real.
        </p>
      </div>

      <div className="flex-shrink-0">
        <Button variant="primary" href="/brands">Get in touch</Button>
      </div>
    </section>
  )
}
