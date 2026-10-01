export function Hero() {
  return (
    <section id="top" className="border-b">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
          Project by Benchaphorn (Irene) Cho
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
          Cloud Security Data Lake with an{' '}
          <span className="text-primary">AI Triage Assistant</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I build a test cloud setup with Terraform, run safe, simulated attacks against it, and
          send all the security logs into a data pipeline I built. Detection rules written in SQL
          flag the attacks, and an AI assistant writes a short summary of each alert. Then I attack
          the AI assistant too, and add defenses so it can&apos;t be tricked.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#how-it-works"
            className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            See how it works
          </a>
          <a
            href="#read-more"
            className="inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Repository &amp; write-up
          </a>
        </div>
      </div>
    </section>
  )
}
