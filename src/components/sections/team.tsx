import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const founders = [
  {
    name: 'Zeba',
    caption: 'Makes ads Alive.',
    image: PlaceHolderImages.find((p) => p.id === 'team-zeba'),
  },
  {
    name: 'Hisham',
    caption: 'Makes coffee disappear.',
    image: PlaceHolderImages.find((p) => p.id === 'team-hisham'),
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          The People Behind the Pulse
        </h2>
        <div className="mt-16 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center gap-4">
              {founder.image && (
                <Image
                  src={founder.image.imageUrl}
                  alt={founder.image.description}
                  width={200}
                  height={200}
                  data-ai-hint={founder.image.imageHint}
                  className="h-48 w-48 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
                />
              )}
              <h3 className="font-headline text-2xl font-semibold">{founder.name}</h3>
              <p className="text-muted-foreground">“{founder.caption}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
