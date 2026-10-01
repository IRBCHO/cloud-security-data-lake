import { ArrowDown, ArrowUpRight } from 'lucide-react'

const stack = ['Terraform', 'Simulated attacks', 'Data pipeline', 'SQL detections', 'AI triage']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 font-mono text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            Security project
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            by Benchaphorn (Irene) Cho
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tighter text-balance md:text-7xl lg:text-8xl">
          Cloud Security
          <br />
          <span className="text-outline">Data Lake</span>
          <br />
          <span className="inline-flex flex-wrap items-baseline gap-x-4">
            <span className="text-muted-foreground">with an</span>
            <span className="rounded-xl bg-foreground px-3 text-background md:px-4">
              AI Triage Assistant
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I build a test cloud setup with Terraform, run safe, simulated attacks against it, and
            send all the security logs into a data pipeline I built. Detection rules written in SQL
            flag the attacks, and an AI assistant writes a short summary of each alert. Then I
            attack the AI assistant too, and add defenses so it can&apos;t be tricked.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#how-it-works"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              See how it works
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#read-more"
              className="group inline-flex h-12 items-center gap-2 rounded-full border bg-background px-6 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Repository &amp; write-up
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-xl border bg-background/80 font-mono text-xs shadow-sm md:text-sm">
          <div className="flex items-center gap-2 border-b px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-foreground/80" />
            <span className="size-2.5 rounded-full bg-foreground/40" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="ml-3 text-muted-foreground">pipeline</span>
          </div>
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-4">
            {stack.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                <span>
                  <span className="text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>{' '}
                  {item}
                </span>
                {index < stack.length - 1 ? (
                  <span aria-hidden="true" className="text-muted-foreground">
                    {'→'}
                  </span>
                ) : (
                  <span aria-hidden="true" className="animate-blink">
                    {'▍'}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
