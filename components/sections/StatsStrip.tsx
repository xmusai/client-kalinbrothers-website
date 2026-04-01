const stats = [
  { value: '13.9M', label: 'Combined followers' },
  { value: '64%',   label: 'Female, aged 25–34' },
  { value: '5',     label: 'Core markets' },
  { value: '0',     label: 'Paid advertising' },
] as const

export function StatsStrip() {
  return (
    <div style={{ background: '#0A0A0A', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E' }}>

      {/* ── Mobile: horizontal scroll with snap ── */}
      <div
        className="flex md:hidden no-scrollbar"
        style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' as never }}
      >
        {stats.map(({ value, label }) => (
          <div
            key={value}
            className="flex-shrink-0 flex flex-col gap-2"
            style={{
              padding: '40px 28px',
              minWidth: '56vw',
              scrollSnapAlign: 'start',
              borderRight: '1px solid #1E1E1E',
            }}
          >
            <div
              aria-hidden="true"
              style={{ width: '22px', height: '1px', background: '#D4A853', opacity: 0.55, marginBottom: '10px' }}
            />
            <p
              className="font-display font-light leading-none tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', color: '#F5F0E8' }}
            >
              {value}
            </p>
            <p
              className="font-body uppercase"
              style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.28)', marginTop: '8px' }}
            >
              {label}
            </p>
          </div>
        ))}
        {/* Scroll hint fade on right edge */}
        <div
          aria-hidden="true"
          className="flex-shrink-0 self-stretch"
          style={{ minWidth: '40px', background: 'linear-gradient(to right, transparent, #0A0A0A)' }}
        />
      </div>

      {/* ── Desktop: 4-col grid ── */}
      <div className="hidden md:grid grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <div
            key={value}
            className="px-14 py-14 flex flex-col gap-2"
            style={{ borderRight: i < stats.length - 1 ? '1px solid #1E1E1E' : undefined }}
          >
            <div
              aria-hidden="true"
              style={{ width: '22px', height: '1px', background: '#D4A853', opacity: 0.55, marginBottom: '10px' }}
            />
            <p
              className="font-display font-light leading-none tracking-[-0.02em] mb-2"
              style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.5rem)', color: '#F5F0E8' }}
            >
              {value}
            </p>
            <p
              className="font-body uppercase"
              style={{ fontSize: '0.54rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.28)', marginTop: '6px' }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}
