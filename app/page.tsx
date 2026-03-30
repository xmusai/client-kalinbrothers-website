import { Nav }        from '@/components/layout/Nav'
import { Footer }     from '@/components/layout/Footer'
import { Hero }       from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { About }      from '@/components/sections/About'
import { Community }  from '@/components/sections/Community'
import { Dinner }     from '@/components/sections/Dinner'
import { Mastermind } from '@/components/sections/Mastermind'
import { BrandDeals } from '@/components/sections/BrandDeals'

export default function Home() {
  return (
    <>
      <header role="banner">
        <Nav />
      </header>

      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Community />
        <Dinner />
        <Mastermind />
        <BrandDeals />
      </main>

      <Footer />
    </>
  )
}
