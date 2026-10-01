import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  inverted = false,
}: {
  eyebrow: string
  title: string
  inverted?: boolean
}) {
  return (
    <div className="flex items-end gap-6">
      <span
        aria-hidden="true"
        className={cn(
          'font-mono text-6xl font-semibold leading-none tracking-tighter md:text-8xl',
          inverted ? 'text-background/20' : 'text-foreground/10',
        )}
      >
        {eyebrow}
      </span>
      <div className="pb-1">
        <p
          className={cn(
            'font-mono text-xs uppercase tracking-widest',
            inverted ? 'text-background/60' : 'text-muted-foreground',
          )}
        >
          <span className="sr-only">Section {eyebrow}: </span>
          Section {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  )
}
