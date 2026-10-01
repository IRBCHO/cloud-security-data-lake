import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const problems = [
  { label: 'Problem one', text: 'Security teams drown in cloud logs.' },
  { label: 'Problem two', text: 'AI tools that help them can be turned against them.' },
]

export function WhyItMatters() {
  return (
    <section id="why" className="scroll-mt-16 border-b">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="03" title="Why it matters" />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal key={problem.label} delay={index * 120}>
              <div className="relative h-full overflow-hidden rounded-2xl border bg-background/80 p-8 md:p-10">
                <span
                  aria-hidden="true"
                  className="text-outline absolute -bottom-6 -right-2 font-mono text-[9rem] font-bold leading-none"
                >
                  {index + 1}
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {problem.label}
                </p>
                <p className="relative mt-6 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-pretty">
                  {problem.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="rounded-2xl bg-foreground px-8 py-8 text-center text-2xl font-semibold tracking-tight text-background md:text-3xl">
            This project works on both problems.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
