'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Building, HeartHandshake, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const slides = [
  {
    for: 'Kirana Stores',
    icon: Building,
    before: {
      title: 'Before Alive',
      description: 'Unused shelf space, unrealized income.'
    },
    after: {
      title: 'With Alive',
      description: 'A new revenue stream from dynamic ads.'
    },
  },
  {
    for: 'Consumers',
    icon: ShoppingCart,
    before: {
        title: 'Before Alive',
        description: 'Overlooked products and missed deals.'
      },
      after: {
        title: 'With Alive',
        description: 'Discover new products and save money.'
      },
  },
  {
    for: 'Brands',
    icon: Package,
    before: {
        title: 'Before Alive',
        description: 'Struggling for visibility at the local level.'
      },
      after: {
        title: 'With Alive',
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
                        <h3 className="font-headline text-xl font-semibold text-muted-foreground">{slide.before.title}</h3>
                        <div className="flex justify-center">
                           <slide.icon className="h-16 w-16 text-muted-foreground/50"/>
                        </div>
                        <p>{slide.before.description}</p>
                      </div>
                      <div className="space-y-4 text-center">
                        <h3 className="font-headline text-xl font-semibold text-primary">{slide.after.title}</h3>
                         <div className="flex justify-center">
                            <div className="relative">
                               <slide.icon className="h-16 w-16 text-primary" />
                               <TrendingUp className="absolute -bottom-2 -right-2 h-8 w-8 text-green-500 bg-background rounded-full p-1" />
                            </div>
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
