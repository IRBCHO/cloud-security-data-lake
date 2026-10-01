const words = [
  'Terraform',
  'Simulated attacks',
  'Security logs',
  'Data pipeline',
  'SQL detection rules',
  'AI alert summaries',
  'Prompt injection',
  'Defenses',
]

export function Marquee() {
  const loop = [...words, ...words]
  return (
    <div aria-hidden="true" className="overflow-hidden border-b bg-foreground py-4 text-background">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-10">
            {word}
            <span className="text-background/40">{'/'}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
