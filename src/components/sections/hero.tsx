import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-kirana-store');

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-secondary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:py-32 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turning everyday kirana visits into discovery moments.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Alive connects small brands, big brands, kirana stores, and consumers—right where purchase decisions happen.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg" >For Brands</Button>
            <Button size="lg" variant="outline">For Kirana Stores</Button>
            <Button size="lg" variant="ghost">For Consumers</Button>
          </div>
        </div>
        <div className="relative h-64 w-full md:h-auto md:w-full md:pl-12">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    data-ai-hint={heroImage.imageHint}
                    className="rounded-lg shadow-2xl object-cover"
                />
            )}
             <div className="absolute -bottom-4 -right-4 w-40 animate-bubble-pop rounded-lg bg-accent p-3 text-center text-sm font-semibold text-accent-foreground shadow-lg">
                <p>New Brand Discovery!</p>
                <p className="text-xs font-normal">Get 20% OFF</p>
            </div>
        </div>
      </div>
    </section>
  );
}
