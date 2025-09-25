'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, Smile, TrendingUp, Handshake, Target, ShoppingBag, Store } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type TabData = {
  value: string;
  label: string;
  icon: LucideIcon;
  problem: { icon: LucideIcon; text: string };
  solution: { title: string; text: string };
  benefit: { text: string; stat: string };
};

const tabsData: TabData[] = [
  {
    value: 'small-brands',
    label: 'Small Brands',
    icon: Rocket,
    problem: { icon: Target, text: 'Struggling to get noticed on crowded shelves.' },
    solution: { title: 'Hyper-Local Visibility', text: 'Place your brand directly in front of relevant customers at their local stores.' },
    benefit: { text: 'Increased trial rates by up to', stat: '3x' },
  },
  {
    value: 'big-brands',
    label: 'Big Brands',
    icon: TrendingUp,
    problem: { icon: Handshake, text: 'Losing connection with last-mile consumers.' },
    solution: { title: 'Re-engage at Point of Sale', text: 'Launch targeted campaigns and offers to influence decisions where it matters most.' },
    benefit: { text: 'Boost in regional sales volume', stat: '+15%' },
  },
  {
    value: 'consumers',
    label: 'Consumers',
    icon: ShoppingBag,
    problem: { icon: Smile, text: 'Missing out on great deals from new and favorite brands.' },
    solution: { title: 'Discover & Save', text: 'Find exciting new products and unlock exclusive discounts on your everyday shopping.' },
    benefit: { text: 'Average monthly savings of', stat: '₹500' },
  },
  {
    value: 'kirana-stores',
    label: 'Kirana Stores',
    icon: Store,
    problem: { icon: Lightbulb, text: 'Underutilized shelf space and limited income.' },
    solution: { title: 'Unlock New Revenue', text: 'Turn your store into a media channel and earn by hosting brand advertisements.' },
    benefit: { text: 'Potential new monthly revenue stream', stat: '₹5,000+' },
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
  return (
    <section id="how-it-works" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          An Ecosystem for Growth
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Alive creates a win-win-win situation, empowering everyone in the retail journey.
        </p>

        <Tabs defaultValue="small-brands" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Problem Card */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={cardVariants}>
                  <Card className="h-full text-left">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <tab.problem.icon className="h-8 w-8 text-destructive" />
                        <span className="font-headline">The Problem</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground">{tab.problem.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Solution Card (Flip Card) */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={cardVariants}>
                   <Card className="h-full text-left border-2 border-accent shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                         <div className="p-2 bg-accent rounded-md">
                            <Lightbulb className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <span className="font-headline">The Alive Solution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold text-xl text-primary">{tab.solution.title}</h3>
                        <p className="mt-2 text-lg text-muted-foreground">{tab.solution.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
               
                {/* Benefit Card */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={cardVariants}>
                  <Card className="h-full text-left">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <TrendingUp className="h-8 w-8 text-green-500" />
                        <span className="font-headline">The Benefit</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-primary">{tab.benefit.stat}</p>
                        <p className="mt-2 text-lg text-muted-foreground">{tab.benefit.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
