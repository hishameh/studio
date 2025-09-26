import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import TestimonialCard from '../interactive/testimonial-card';

const testimonials = [
  {
    id: 'consumer',
    name: 'Priya S.',
    role: 'Consumer',
    quote: 'I love discovering new snacks and getting discounts. My grocery runs are so much more fun now!',
    avatar: PlaceHolderImages.find((p) => p.id === 'avatar-consumer'),
  },
  {
    id: 'owner',
    name: 'Ramesh Kumar',
    role: 'Kirana Owner',
    quote: 'Since Alive, I’ve moved stock 2x faster! The extra income is great, and my store looks more modern.',
    avatar: PlaceHolderImages.find((p) => p.id === 'avatar-owner'),
    isAudio: true,
  },
  {
    id: 'brand',
    name: 'Anjali Mehta',
    role: 'Brand Manager',
    quote: 'We saw a 20% sales lift in our target neighborhoods within the first month. Incredible reach!',
    avatar: PlaceHolderImages.find((p) => p.id === 'avatar-brand'),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by Everyone in the Ecosystem
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Hear from the people who are part of the Alive journey.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
             <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
                isAudio={testimonial.isAudio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
