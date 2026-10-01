import { BookOpen, Code2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const resources = [
  { icon: Code2, title: 'Project repository' },
  { icon: BookOpen, title: 'Write-up' },
]

export function ReadMore() {
  return (
    <section id="read-more" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="04" title="Where to see it" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Link coming soon. The project repository and write-up will be linked here.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {resources.map((resource, index) => (
            <li key={resource.title}>
              <Reveal delay={index * 120}>
                <div className="bg-stripes flex flex-col gap-10 rounded-2xl border-2 border-dashed border-foreground/25 bg-background/80 p-8">
                  <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-background">
                    <resource.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-2xl font-semibold tracking-tight">{resource.title}</span>
                    <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Coming soon
                    </span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
