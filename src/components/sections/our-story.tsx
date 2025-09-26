'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Plus } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const storyElements = [
  {
    image: PlaceHolderImages.find((p) => p.id === 'story-1'),
    title: 'The Brand',
    description: 'Struggling with last-mile marketing and low visibility for a new product launch.',
  },
  {
    image: PlaceHolderImages.find((p) => p.id === 'story-2'),
    title: 'The Kirana',
    description: 'With unused shelf space that could be generating income but sits empty.',
  },
  {
    image: PlaceHolderImages.find((p) => p.id === 'story-3'),
    title: 'The Consumer',
    description: 'Unaware of new products and deals, sticking to the same old choices.',
  },
];

const StoryElement = ({ item, index }: { item: (typeof storyElements)[0], index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }}>
            <div className="flex max-w-xs flex-col items-center gap-4 text-center">
            {item.image && (
                <Image
                src={item.image.imageUrl}
                alt={item.image.description}
                width={200}
                height={200}
                data-ai-hint={item.image.imageHint}
                className="h-40 w-40 rounded-full object-cover shadow-lg"
                />
            )}
            <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
            </div>
        </motion.div>
    )
}

export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  
  return (
    <section id="our-story" className="bg-secondary relative overflow-hidden">
      <motion.div style={{ y }} ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Alive?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We saw disconnected players in a single ecosystem. So we built the bridge.
        </p>
        <div className="relative mt-20 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-0">
          {storyElements.map((item, index) => (
            <>
              <StoryElement item={item} index={index} />
              {index < storyElements.length - 1 && (
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{delay: 0.5 * (index + 2)}}>
                    <Plus className="h-8 w-8 text-primary md:mx-12" />
                </motion.div>
              )}
            </>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center">
            <ArrowRight className="h-10 w-10 text-primary animate-bounce-horizontal" />
            <div className="mt-6 rounded-lg bg-primary p-8 text-primary-foreground shadow-xl">
                <h3 className="font-headline text-2xl font-bold">Alive Connects Them All.</h3>
                <p className="mt-2">Creating a thriving ecosystem where brands get seen, stores earn more, and consumers discover value.</p>
            </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
