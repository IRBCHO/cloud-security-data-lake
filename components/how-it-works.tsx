import { Bot, Database, Radar, Server, Swords } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Server, title: 'Build', body: 'A test cloud setup is built with Terraform.' },
  { icon: Swords, title: 'Attack', body: 'Safe, simulated attacks are run against it.' },
  { icon: Database, title: 'Collect', body: 'All the security logs flow into a data pipeline I built.' },
  { icon: Radar, title: 'Detect', body: 'Detection rules written in SQL flag the attacks.' },
  { icon: Bot, title: 'Triage', body: 'An AI assistant writes a short summary of each alert.' },
]

const summaryParts = ['What happened', 'How serious it is', 'What to do next']

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="01" title="How it works" />
        </Reveal>

        <ol className="relative mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px border-t border-dashed border-foreground/30 lg:block"
          />
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 90} className="h-full">
                <div className="group relative flex h-full flex-col gap-4 rounded-xl border bg-background/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground transition-colors group-hover:border-background">
                      <step.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border bg-background/80">
            <div className="flex flex-col gap-2 border-b bg-stripes px-6 py-5 md:flex-row md:items-center md:justify-between">
              <p className="font-semibold">Each AI alert summary covers three things</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Triage output
              </p>
            </div>
            <ul className="grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
              {summaryParts.map((part, index) => (
                <li key={part} className="flex items-baseline gap-4 p-6 md:p-8">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-2xl font-semibold tracking-tight">{part}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
