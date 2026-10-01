import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { AttackingTheAssistant } from '@/components/attacking-the-assistant'
import { WhyItMatters } from '@/components/why-it-matters'
import { ReadMore } from '@/components/read-more'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <AttackingTheAssistant />
        <WhyItMatters />
        <ReadMore />
      </main>
      <SiteFooter />
    </>
  )
}
