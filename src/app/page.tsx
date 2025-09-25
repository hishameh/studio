import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import MarketProof from '@/components/sections/market-proof';
import Benefits from '@/components/sections/benefits';
import Features from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import BusinessModel from '@/components/sections/business-model';
import OurStory from '@/components/sections/our-story';
import Team from '@/components/sections/team';
import ClosingCta from '@/components/sections/closing-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <MarketProof />
        <Benefits />
        <Features />
        <Testimonials />
        <BusinessModel />
        <OurStory />
        <Team />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
