'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, Smile, TrendingUp, Handshake, Target, ShoppingBag, Store } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type TabData = {
  value: 'brands' | 'stores' | 'consumers';
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: {
    text: string;
    stat: string;
  };
  imageId: string;
};

const tabsData: TabData[] = [
  {
    value: 'brands',
    label: 'For Brands',
    icon: Rocket,
    title: 'Hyper-Local Visibility, Unmatched Impact.',
    description: 'Struggling to get noticed on crowded shelves? Alive places your brand directly in front of relevant customers at their local stores, driving trial and boosting sales with hyper-targeted digital ads at the point of purchase.',
    benefit: { text: 'Increased trial rates by up to', stat: '3x' },
    imageId: 'how-it-works-brands',
  },
  {
    value: 'stores',
    label: 'For Kirana Stores',
    icon: Store,
    title: 'Unlock New Revenue From Your Shelves.',
    description: 'Turn your underutilized shelf space into a new, consistent revenue stream. By partnering with Alive, your store becomes a modern media channel, earning income by hosting brand advertisements that also attract more customers.',
    benefit: { text: 'Potential new monthly revenue stream of', stat: '₹5,000+' },
    imageId: 'how-it-works-stores',
  },
  {
    value: 'consumers',
    label: 'For Consumers',
    icon: ShoppingBag,
    title: 'Discover Great Products and Save More.',
    description: 'Tired of missing out on great deals from new and favorite brands? Alive helps you discover exciting new products and unlock exclusive discounts on your everyday shopping, making every kirana visit a rewarding experience.',
    benefit: { text: 'Average monthly savings of', stat: '₹500' },
    imageId: 'how-it-works-consumers',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabData['value']>('brands');

  const currentTabData = tabsData.find((tab) => tab.value === activeTab);
  const currentImage = PlaceHolderImages.find((p) => p.id === currentTabData?.imageId);
  
  return (
    <section id="how-it-works" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          An Ecosystem for Growth
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Alive creates a win-win-win situation, empowering everyone in the retail journey.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
                {tabsData.map((tab) => (
                    <Button 
                        key={tab.value}
                        variant={activeTab === tab.value ? 'default' : 'outline'}
                        size="lg"
                        className="justify-start h-auto text-left py-4"
                        onClick={() => setActiveTab(tab.value)}
                    >
                        <tab.icon className="mr-4 h-6 w-6" />
                        <span className="font-headline text-lg">{tab.label}</span>
                    </Button>
                ))}

                {currentTabData && (
                     <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-left p-6 bg-background rounded-lg"
                    >
                        <h3 className="font-headline text-2xl font-bold text-primary">{currentTabData.title}</h3>
                        <p className="mt-2 text-muted-foreground">{currentTabData.description}</p>
                        <div className="mt-4">
                            <p className="text-4xl font-bold text-primary">{currentTabData.benefit.stat}</p>
                            <p className="text-lg text-muted-foreground">{currentTabData.benefit.text}</p>
                        </div>
                    </motion.div>
                )}
            </div>
             <motion.div 
                key={activeTab + '-image'}
                className="relative aspect-square w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {currentImage && (
                    <Image 
                        src={currentImage.imageUrl}
                        alt={currentImage.description}
                        data-ai-hint={currentImage.imageHint}
                        fill
                        className="object-cover rounded-xl shadow-2xl"
                    />
                )}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
