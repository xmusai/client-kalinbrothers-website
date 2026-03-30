import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-12 py-20 border-b border-border-base bg-bg-surface"
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full bg-bg-subtle border border-bg-subtle overflow-hidden">
        <Image
          src="/images/brothers.jpg"
          alt="Kalin Brothers"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div>
        <SectionLabel>The story</SectionLabel>
        <h2 className="font-display text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary mb-5">
          They chose<br />
          a{' '}
          <em className="font-light italic text-accent-gold">different road.</em>
        </h2>
        <p className="text-[0.8rem] font-body font-light text-text-muted leading-[1.9]">
          No university. No corporate ladder. A camera, a decision, and a belief
          that the alternative path was real — before anyone had proven it.
          13.9 million people followed.
        </p>
      </div>
    </section>
  )
}
