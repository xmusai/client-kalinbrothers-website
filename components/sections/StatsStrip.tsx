const stats = [
  { value: '13.9M', label: 'Combined followers' },
  { value: '64%',   label: 'Female, 25–34' },
  { value: '5',     label: 'Core markets' },
  { value: '0',     label: 'Paid advertising' },
] as const

export function StatsStrip() {
  return (
    <div className="flex border-t border-b border-border-base">
      {stats.map(({ value, label }, i) => (
        <div
          key={value}
          className={`flex-1 px-12 py-6 ${i < stats.length - 1 ? 'border-r border-border-base' : ''}`}
        >
          <p className="font-display text-[2.2rem] font-light text-text-primary leading-none tracking-[-0.02em]">
            {value}
          </p>
          <p className="text-[0.58rem] font-body uppercase tracking-label text-text-ghost mt-1">
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
