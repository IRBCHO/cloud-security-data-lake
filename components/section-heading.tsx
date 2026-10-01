export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs font-medium text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    </div>
  )
}
