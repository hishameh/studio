'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const heroContent = {
  brands: {
    title: 'Seen. Remembered. Bought.',
    subtitle: 'Alive connects brands, kirana stores, and consumers—right where purchase decisions happen.',
    image: PlaceHolderImages.find((p) => p.id === 'how-it-works-brands'),
    cta: 'Join as a Brand'
  },
  stores: {
    title: 'Earn More From Your Shelves.',
    subtitle: 'Turn your store into a media channel and create a new revenue stream with zero investment.',
    image: PlaceHolderImages.find((p) => p.id === 'how-it-works-stores'),
    cta: 'Partner as a Kirana'
  },
  consumers: {
    title: 'Discover Your Next Favorite.',
    subtitle: 'Find exciting new products and unmissable deals every time you visit your local kirana store.',
    image: PlaceHolderImages.find((p) => p.id === 'how-it-works-consumers'),
    cta: 'Get Deals as a Consumer'
  },
};

type HeroProps = {
  onGetStartedClick: (title: string) => void;
};


export default function Hero({ onGetStartedClick }: HeroProps) {
    const [activeTab, setActiveTab] = useState<'brands' | 'stores' | 'consumers'>('brands');
    const currentContent = heroContent[activeTab];

  return (
    <section id="hero" className="w-full bg-secondary">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:py-32 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            key={activeTab + '-title'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary">{currentContent.title.split(' ')[0]}</span> {currentContent.title.substring(currentContent.title.indexOf(' ') + 1)}
          </motion.h1>
          <motion.p 
             key={activeTab + '-subtitle'}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground md:text-xl">
            {currentContent.subtitle}
          </motion.p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
             <Button size="lg" variant={activeTab === 'brands' ? 'default' : 'outline'} onClick={() => setActiveTab('brands')}>For Brands</Button>
             <Button size="lg" variant={activeTab === 'stores' ? 'default' : 'outline'} onClick={() => setActiveTab('stores')}>For Kirana Stores</Button>
             <Button size="lg" variant={activeTab === 'consumers' ? 'default' : 'outline'} onClick={() => setActiveTab('consumers')}>For Consumers</Button>
          </div>
        </div>
        <motion.div 
            key={activeTab + '-image'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 w-full lg:h-[500px]"
        >
            {currentContent.image && (
                <Image
                    src={currentContent.image.imageUrl}
                    alt={currentContent.image.description}
                    fill
                    data-ai-hint={currentContent.image.imageHint}
                    className="rounded-lg shadow-2xl object-cover"
                    priority
                />
            )}
        </motion.div>
      </div>
    </section>
  );
}
