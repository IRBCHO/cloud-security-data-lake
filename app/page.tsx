import Image from 'next/image'
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
      <div aria-hidden="true" className="fixed inset-0 z-0">
        <Image
          src="/images/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <main className="bg-background/70 backdrop-blur-md">
          <Hero />
          <HowItWorks />
          <AttackingTheAssistant />
          <WhyItMatters />
          <ReadMore />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
