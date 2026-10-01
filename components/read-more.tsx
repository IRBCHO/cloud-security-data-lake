import { BookOpen, Code2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const resources = [
  { icon: Code2, title: 'Project repository' },
  { icon: BookOpen, title: 'Write-up' },
]

export function ReadMore() {
  return (
    <section id="read-more" className="scroll-mt-14">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="04" title="Where to see it" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Link coming soon. The project repository and write-up will be linked here.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="flex items-center justify-between gap-4 rounded-lg border border-dashed p-6"
            >
              <span className="flex items-center gap-3 font-medium">
                <resource.icon className="size-5 text-primary" aria-hidden="true" />
                {resource.title}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                Coming soon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
