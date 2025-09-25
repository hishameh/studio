import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const slides = [
  {
    before: {
      title: 'Before Alive',
      image: PlaceHolderImages.find((p) => p.id === 'before-alive-1'),
      description: 'Empty, unnoticed shelf space.'
    },
    after: {
      title: 'With Alive',
      image: PlaceHolderImages.find((p) => p.id === 'with-alive-1'),
      description: 'Dynamic ad space generating income.'
    },
  },
  {
    before: {
        title: 'Before Alive',
        image: PlaceHolderImages.find((p) => p.id === 'before-alive-2'),
        description: 'Consumers overlook new products.'
      },
      after: {
        title: 'With Alive',
        image: PlaceHolderImages.find((p) => p.id === 'with-alive-2'),
        description: 'Engaging deals capture attention.'
      },
  },
  {
    before: {
        title: 'Before Alive',
        image: PlaceHolderImages.find((p) => p.id === 'before-alive-3'),
        description: 'Brands struggle for local visibility.'
      },
      after: {
        title: 'With Alive',
        image: PlaceHolderImages.find((p) => p.id === 'with-alive-3'),
        description: 'Targeted exposure drives sales.'
      },
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          A Tangible Transformation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          See the difference Alive makes at the point of purchase.
        </p>

        <Carousel opts={{ loop: true }} className="mt-12 w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="font-headline text-2xl font-semibold text-muted-foreground">{slide.before.title}</h3>
                        {slide.before.image && (
                          <Image
                            src={slide.before.image.imageUrl}
                            alt={slide.before.image.description}
                            width={600}
                            height={400}
                            data-ai-hint={slide.before.image.imageHint}
                            className="aspect-video w-full rounded-lg object-cover"
                          />
                        )}
                        <p>{slide.before.description}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-headline text-2xl font-semibold text-primary">{slide.after.title}</h3>
                        {slide.after.image && (
                          <Image
                            src={slide.after.image.imageUrl}
                            alt={slide.after.image.description}
                            width={600}
                            height={400}
                            data-ai-hint={slide.after.image.imageHint}
                            className="aspect-video w-full rounded-lg object-cover border-2 border-accent"
                          />
                        )}
                        <p className="font-semibold">{slide.after.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 hidden sm:flex" />
          <CarouselNext className="mr-12 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
