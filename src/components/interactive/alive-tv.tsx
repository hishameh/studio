'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Tv } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const bgImage = PlaceHolderImages.find((p) => p.id === 'alive-tv-bg');
const adImages = [
  PlaceHolderImages.find((p) => p.id === 'alive-tv-ad-1'),
  PlaceHolderImages.find((p) => p.id === 'alive-tv-ad-2'),
].filter(Boolean) as (typeof PlaceHolderImages);

export default function AliveTV() {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h3 className="font-headline text-2xl font-bold flex items-center justify-center gap-2">
        <Tv /> Alive TV
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
        See how brands come to life right at the shelf in a real store
        environment.
      </p>
      <div className="relative mx-auto mt-8 aspect-video max-w-5xl overflow-hidden rounded-xl bg-secondary shadow-2xl">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            data-ai-hint={bgImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute top-[20%] left-[50%] h-[45%] w-[40%] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-black p-1 shadow-inner">
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            {adImages.map((ad, index) => (
              <Image
                key={ad.id}
                src={ad.imageUrl}
                alt={ad.description}
                data-ai-hint={ad.imageHint}
                fill
                className={cn(
                  'object-cover transition-opacity duration-1000',
                  currentAd === index ? 'opacity-100' : 'opacity-0'
                )}
              />
            ))}
             <div className="absolute bottom-1 right-1 bg-black/50 text-white text-[8px] px-1 rounded-sm">
                ALIVE
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
