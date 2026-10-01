import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    label: 'Problem one',
    text: 'Security teams drown in cloud logs.',
  },
  {
    label: 'Problem two',
    text: 'AI tools that help them can be turned against them.',
  },
]

export function WhyItMatters() {
  return (
    <section id="why" className="scroll-mt-14 border-b">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="03" title="Why it matters" />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem.label} className="border-t-2 border-primary pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {problem.label}
              </p>
              <p className="mt-3 text-2xl font-medium leading-snug text-pretty">{problem.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg font-medium text-primary">This project works on both problems.</p>
      </div>
    </section>
  )
}
