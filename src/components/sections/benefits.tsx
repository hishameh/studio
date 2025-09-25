import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const InvisibleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
        <path d="M8.5 10.5c.5-1 1.5-2 4-2s3.5 1 4 2"/>
        <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"/>
        <path d="M22 12c-4.5 0-8-4-8-4"/>
        <path d="M2 12c4.5 0 8-4 8-4"/>
    </svg>
);

const VisibleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
         <circle cx="12" cy="12" r="3" />
         <path d="M12 21a9 9 0 1 1 0-18 99 0 0 1 0 18Z" fill="hsl(var(--primary))" stroke="none" opacity="0.3"/>
    </svg>
);

const SadConsumerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
    </svg>
);

const HappyConsumerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" fill="hsl(var(--primary))" stroke="none" opacity="0.3"/>
    </svg>
);

const StrugglingBrandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 15 6-6" />
        <path d="m15 15-6-6" />
    </svg>
);

const ThrivingBrandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4" />
        <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" fill="hsl(var(--primary))" stroke="none" opacity="0.3"/>
    </svg>
);


const slides = [
  {
    before: {
      title: 'Before Alive',
      icon: InvisibleIcon,
      description: 'Empty, unnoticed shelf space.'
    },
    after: {
      title: 'With Alive',
      icon: VisibleIcon,
      description: 'Dynamic ad space generating income.'
    },
  },
  {
    before: {
        title: 'Before Alive',
        icon: SadConsumerIcon,
        description: 'Consumers overlook new products.'
      },
      after: {
        title: 'With Alive',
        icon: HappyConsumerIcon,
        description: 'Engaging deals capture attention.'
      },
  },
  {
    before: {
        title: 'Before Alive',
        icon: StrugglingBrandIcon,
        description: 'Brands struggle for local visibility.'
      },
      after: {
        title: 'With Alive',
        icon: ThrivingBrandIcon,
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
                           <slide.before.icon />
                        </div>
                        <p>{slide.before.description}</p>
                      </div>
                      <div className="space-y-4 text-center">
                        <h3 className="font-headline text-2xl font-semibold text-primary">{slide.after.title}</h3>
                         <div className="flex justify-center">
                            <slide.after.icon />
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
