const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#attacking-the-ai', label: 'Attacking the AI' },
  { href: '#why', label: 'Why it matters' },
  { href: '#read-more', label: 'Read more' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-4">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-6 rounded-full border bg-background/80 pl-5 pr-2 shadow-sm backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <span aria-hidden="true" className="flex size-5 items-center justify-center rounded-full bg-foreground">
            <span className="size-1.5 rounded-full bg-background" />
          </span>
          Cloud Security Data Lake
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-foreground hover:text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
