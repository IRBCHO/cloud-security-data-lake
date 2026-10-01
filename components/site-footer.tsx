export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-background/60">Made by</p>
        <p className="mt-4 text-4xl font-semibold leading-none tracking-tighter text-balance md:text-7xl">
          Benchaphorn (Irene) Cho
        </p>
        <div className="mt-14 flex flex-col gap-2 border-t border-background/20 pt-6 text-sm text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Cloud Security Data Lake with an AI Triage Assistant</p>
          <a href="#top" className="transition-colors hover:text-background">
            Back to top {'↑'}
          </a>
        </div>
      </div>
    </footer>
  )
}
