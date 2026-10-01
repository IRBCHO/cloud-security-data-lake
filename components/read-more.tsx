import { ArrowUpRight, BookOpen, Code2, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type Resource = {
  icon: LucideIcon
  title: string
  href?: string
}

const resources: Resource[] = [
  { icon: Code2, title: 'Project repository', href: 'https://github.com/IRBCHO/cloud-security-data-lake' },
  { icon: BookOpen, title: 'Write-up' },
]

function ResourceCard({ resource }: { resource: Resource }) {
  const content = (
    <>
      <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-background">
        <resource.icon className="size-6" aria-hidden="true" />
      </span>
      <div className="flex items-end justify-between gap-4">
        <span className="text-2xl font-semibold tracking-tight">{resource.title}</span>
        {resource.href ? (
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-foreground px-3 py-1 font-mono text-xs uppercase tracking-widest text-background">
            View on GitHub
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        ) : (
          <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Coming soon
          </span>
        )}
      </div>
    </>
  )

  if (resource.href) {
    return (
      <a
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-10 rounded-2xl border-2 border-foreground bg-background/80 p-8 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return (
    <div className="bg-stripes flex flex-col gap-10 rounded-2xl border-2 border-dashed border-foreground/25 bg-background/80 p-8">
      {content}
    </div>
  )
}

export function ReadMore() {
  return (
    <section id="read-more" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="04" title="Where to see it" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The project repository is on GitHub. The write-up is coming soon.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {resources.map((resource, index) => (
            <li key={resource.title}>
              <Reveal delay={index * 120}>
                <ResourceCard resource={resource} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
