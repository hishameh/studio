import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { EyeOff, Sparkles } from 'lucide-react';

const slides = [
  {
    before: {
      title: 'Before Alive',
      icon: EyeOff,
      description: 'Empty, unnoticed shelf space.'
    },
    after: {
      title: 'With Alive',
      icon: Sparkles,
      description: 'Dynamic ad space generating income.'
    },
  },
  {
    before: {
        title: 'Before Alive',
        icon: EyeOff,
        description: 'Consumers overlook new products.'
      },
      after: {
        title: 'With Alive',
        icon: Sparkles,
        description: 'Engaging deals capture attention.'
      },
  },
  {
    before: {
        title: 'Before Alive',
        icon: EyeOff,
        description: 'Brands struggle for local visibility.'
      },
      after: {
        title: 'With Alive',
        icon: Sparkles,
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
                      <div className="space-y-4 text-center">
                        <h3 className="font-headline text-2xl font-semibold text-muted-foreground">{slide.before.title}</h3>
                        <div className="flex justify-center">
                           <slide.before.icon className="h-24 w-24 text-muted-foreground" />
                        </div>
                        <p>{slide.before.description}</p>
                      </div>
                      <div className="space-y-4 text-center">
                        <h3 className="font-headline text-2xl font-semibold text-primary">{slide.after.title}</h3>
                         <div className="flex justify-center">
                            <slide.after.icon className="h-24 w-24 text-primary" />
                         </div>
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
