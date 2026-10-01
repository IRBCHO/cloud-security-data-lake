import { FileWarning, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function AttackingTheAssistant() {
  return (
    <section
      id="attacking-the-ai"
      className="relative scroll-mt-16 overflow-hidden bg-foreground/95 text-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-mono text-[12rem] font-bold leading-none tracking-tighter text-background/[0.04] md:text-[20rem]"
      >
        {'</>'}
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="02" title="Then I attack the AI assistant" inverted />
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-background/70 text-pretty">
            The assistant reads the logs, so the logs become a way to attack it.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <article className="h-full rounded-2xl border border-dashed border-background/30 p-8 md:p-10">
              <div className="flex items-center justify-between">
                <FileWarning className="size-8 text-background/70" aria-hidden="true" />
                <span className="rounded-full border border-background/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-background/70">
                  Attack
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">Hidden prompt injection</h3>
              <p className="mt-3 leading-relaxed text-background/70">
                Prompt-injection text is hidden inside the logs to try to trick the assistant.
              </p>
            </article>
          </Reveal>

          <div className="flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full border border-background/30 font-mono text-sm text-background/70">
              vs
            </span>
          </div>

          <Reveal delay={150}>
            <article className="h-full rounded-2xl bg-background p-8 text-foreground shadow-2xl md:p-10">
              <div className="flex items-center justify-between">
                <ShieldCheck className="size-8" aria-hidden="true" />
                <span className="rounded-full bg-foreground px-3 py-1 font-mono text-xs uppercase tracking-widest text-background">
                  Defense
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">Can&apos;t be tricked</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Defenses are added so the assistant can&apos;t be tricked.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
