'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import MarketProof from '@/components/sections/market-proof';
import Benefits from '@/components/sections/benefits';
import Features from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import BusinessModel from '@/components/sections/business-model';
import OurStory from '@/components/sections/our-story';
import ClosingCta from '@/components/sections/closing-cta';
import Footer from '@/components/sections/footer';
import Brands from '@/components/sections/brands';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
          <Brands />
        </AnimatedSection>
        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection>
          <Benefits />
        </AnimatedSection>
        <AnimatedSection>
          <MarketProof />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <BusinessModel />
        </AnimatedSection>
        <OurStory />
        <AnimatedSection>
          <ClosingCta />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
