'use client';
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AliveMeter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center">
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
          <div
            className="relative h-full rounded-full bg-accent transition-all duration-2000 ease-out"
            style={{ width: isAnimated ? '100%' : '0%' }}
          >
             {isAnimated && <Zap className="absolute -right-2 -top-1 h-8 w-8 text-yellow-400 fill-yellow-400 animate-pulse" />}
          </div>
        </div>
      </div>
    </div>
  );
}
