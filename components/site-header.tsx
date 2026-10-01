const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#attacking-the-ai', label: 'Attacking the AI' },
  { href: '#why', label: 'Why it matters' },
  { href: '#read-more', label: 'Read more' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-primary" />
          Cloud Security Data Lake
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
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
