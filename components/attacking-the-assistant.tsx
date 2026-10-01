import { FileWarning, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function AttackingTheAssistant() {
  return (
    <section id="attacking-the-ai" className="scroll-mt-14 border-b bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="02" title="Then I attack the AI assistant" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The assistant reads the logs, so the logs become a way to attack it.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border bg-background p-8">
            <FileWarning className="size-6 text-muted-foreground" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold">The attack</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Prompt-injection text is hidden inside the logs to try to trick the assistant.
            </p>
          </article>
          <article className="rounded-lg border border-primary/40 bg-background p-8">
            <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold">The defense</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Defenses are added so the assistant can&apos;t be tricked.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
