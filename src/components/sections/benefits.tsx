'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const KiranaIconBefore = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <path d="M4 21V10.957C4 10.428 4.21 9.92 4.586 9.586l6-5.25a2 2 0 0 1 2.828 0l6 5.25C19.79 9.92 20 10.428 20 10.957V21"/><path d="M12 21V15"/><path d="M7 21v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M15 10h2"/><path d="M7 10h2"/>
        <line x1="8" y1="18" x2="16" y2="18" strokeDasharray="4 2"/>
    </svg>
);

const KiranaIconAfter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
        <path d="M4 21V10.957C4 10.428 4.21 9.92 4.586 9.586l6-5.25a2 2 0 0 1 2.828 0l6 5.25C19.79 9.92 20 10.428 20 10.957V21"/><path d="M12 21V15"/><path d="M7 21v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/>
        <path d="M15.5 10.5 17 12l-1.5 1.5"/>
        <path d="M8.5 10.5 7 12l1.5 1.5"/>
        <path d="M12 8l1 2-1 2-1-2z"/>
        <path d="M10 18h4" className="stroke-[3px]"/>
    </svg>
);

const ConsumerIconBefore = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
        <path d="M5.1 5.1 18.9 18.9" />
    </svg>
);

const ConsumerIconAfter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
        <path d="M12 6.5c-3.5 0-6 2-6 2s1.5 2 6 2 6-2 6-2-2.5-2-6-2z" fill="hsl(var(--primary))" opacity="0.3" stroke="none" />
        <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    </svg>
);

const BrandIconBefore = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-muted-foreground">
        <path d="M21.73 18a2.64 2.64 0 0 1-2.05 1H4.32a2.64 2.64 0 0 1-2.05-1L.22 13.15a1.29 1.29 0 0 1 .58-1.56L3 10.7V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.7l2.2.89a1.29 1.29 0 0 1 .58 1.56Z"/><path d="M9 10v-.5a3.5 3.5 0 1 1 7 0V10"/>
        <line x1="6" y1="2" x2="6" y2="4" /><line x1="18" y1="2" x2="18" y2="4" />
        <path d="M12 19a4 4 0 0 0-4-4h8a4 4 0 0 0-4 4Z"/>
    </svg>
);

const BrandIconAfter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary">
        <path d="M5 22h14"/><path d="M5 22a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4Z"/><path d="M5 18a14 14 0 0 1 14 0"/><path d="M9 14h6"/>
        <path d="M9 10h6"/>
        <path d="M15 6H9"/>
        <path d="m14 14 3-3"/><path d="m7 11 3 3"/>
    </svg>
);


const slides = [
  {
    before: {
      title: 'Before Alive',
      icon: KiranaIconBefore,
      description: 'Unused shelf space, unrealized income.'
    },
    after: {
      title: 'With Alive',
      icon: KiranaIconAfter,
      description: 'A new revenue stream from dynamic ads.'
    },
  },
  {
    before: {
        title: 'Before Alive',
        icon: ConsumerIconBefore,
        description: 'Overlooked products and missed deals.'
      },
      after: {
        title: 'With Alive',
        icon: ConsumerIconAfter,
        description: 'Discover new products and save money.'
      },
  },
  {
    before: {
        title: 'Before Alive',
        icon: BrandIconBefore,
        description: 'Struggling for visibility at the local level.'
      },
      after: {
        title: 'With Alive',
        icon: BrandIconAfter,
        description: 'Hyper-targeted ads that drive trial and sales.'
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
