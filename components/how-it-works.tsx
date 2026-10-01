import { Bot, Database, Radar, Server, Swords } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Server,
    title: 'Build',
    body: 'A test cloud setup is built with Terraform.',
  },
  {
    icon: Swords,
    title: 'Attack',
    body: 'Safe, simulated attacks are run against it.',
  },
  {
    icon: Database,
    title: 'Collect',
    body: 'All the security logs flow into a data pipeline I built.',
  },
  {
    icon: Radar,
    title: 'Detect',
    body: 'Detection rules written in SQL flag the attacks.',
  },
  {
    icon: Bot,
    title: 'Triage',
    body: 'An AI assistant writes a short summary of each alert.',
  },
]

const summaryParts = ['What happened', 'How serious it is', 'What to do next']

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-14 border-b">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="01" title="How it works" />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-4 bg-background p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-lg border-l-4 border-primary bg-accent/60 p-6">
          <p className="text-sm font-medium">Each AI alert summary covers three things:</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {summaryParts.map((part) => (
              <li
                key={part}
                className="rounded-full border border-primary/30 bg-background px-3 py-1 text-sm text-accent-foreground"
              >
                {part}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
