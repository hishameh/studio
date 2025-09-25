'use client';
import { Zap } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function AliveMeter() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0.3, 0.7], ['0%', '100%']);
  const pulseOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.75], [0, 1, 0]);

  return (
    <div ref={targetRef} className="text-center">
      <h3 className="font-headline text-2xl font-bold">The Alive Effect</h3>
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
        From overlooked to unmissable. We bring your shelves to life.
      </p>
      <div className="mx-auto mt-8 max-w-md">
        <div className="flex justify-between text-sm font-semibold text-muted-foreground">
          <span>Dull Shelf</span>
          <span className="text-primary">Alive Shelf</span>
        </div>
        <div className="mt-2 h-8 w-full rounded-full bg-secondary p-1">
          <motion.div
            className="relative h-full rounded-full bg-accent"
            style={{ width }}
          >
             <motion.div style={{ opacity: pulseOpacity }}>
                <Zap className="absolute -right-2 -top-1 h-8 w-8 text-yellow-400 fill-yellow-400 animate-pulse" />
             </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
