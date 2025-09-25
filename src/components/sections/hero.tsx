import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-kirana-store');
const collageImages = [
    PlaceHolderImages.find(p => p.id === 'collage-1'),
    PlaceHolderImages.find(p => p.id === 'collage-2'),
    PlaceHolderImages.find(p => p.id === 'collage-3'),
    PlaceHolderImages.find(p => p.id === 'collage-4'),
    PlaceHolderImages.find(p => p.id === 'collage-5'),
].filter(Boolean) as typeof PlaceHolderImages;

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-secondary">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:py-32 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-primary">Seen.</span> Remembered. Bought.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Alive connects brands, kirana stores, and consumers—right where purchase decisions happen.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
             <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary">For Brands</Button>
             <Button size="lg" className="bg-primary/80 text-primary-foreground hover:bg-primary">For Kirana Stores</Button>
             <Button size="lg" className="bg-primary/70 text-primary-foreground hover:bg-primary">For Consumers</Button>
          </div>
        </div>
        <div className="relative h-96 w-full lg:h-[500px]">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    data-ai-hint={heroImage.imageHint}
                    className="rounded-lg shadow-2xl object-cover"
                    priority
                />
            )}
             <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
             {collageImages[0] && (
                <Image
                    src={collageImages[0].imageUrl}
                    alt={collageImages[0].description}
                    width={120}
                    height={120}
                    data-ai-hint={collageImages[0].imageHint}
                    className="absolute top-4 left-4 rounded-lg object-cover shadow-lg border-4 border-white transform -rotate-12 transition-transform hover:scale-125"
                />
             )}
             {collageImages[1] && (
                <Image
                    src={collageImages[1].imageUrl}
                    alt={collageImages[1].description}
                    width={100}
                    height={100}
                    data-ai-hint={collageImages[1].imageHint}
                    className="absolute bottom-8 right-8 rounded-full object-cover shadow-lg border-4 border-white transform rotate-6 transition-transform hover:scale-125"
                />
             )}
             {collageImages[2] && (
                <Image
                    src={collageImages[2].imageUrl}
                    alt={collageImages[2].description}
                    width={80}
                    height={80}
                    data-ai-hint={collageImages[2].imageHint}
                    className="absolute top-1/2 left-1/3 rounded-md object-cover shadow-lg border-4 border-white transform rotate-3 transition-transform hover:scale-125"
                />
             )}
             {collageImages[3] && (
                <Image
                    src={collageImages[3].imageUrl}
                    alt={collageImages[3].description}
                    width={90}
                    height={90}
                    data-ai-hint={collageImages[3].imageHint}
                    className="absolute top-8 right-12 rounded-lg object-cover shadow-lg border-4 border-white transform rotate-12 transition-transform hover:scale-125"
                />
             )}
              {collageImages[4] && (
                <Image
                    src={collageImages[4].imageUrl}
                    alt={collageImages[4].description}
                    width={70}
                    height={70}
                    data-ai-hint={collageImages[4].imageHint}
                    className="absolute bottom-8 left-16 rounded-full object-cover shadow-lg border-4 border-white transform -rotate-6 transition-transform hover:scale-125"
                />
             )}
        </div>
      </div>
    </section>
  );
}
