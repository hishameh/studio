import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '₹5,000',
    description: 'Perfect for new brands testing the waters.',
    features: ['10 Stores', 'Up to 50,000 Impressions', 'Basic Analytics'],
    isFeatured: false,
  },
  {
    name: 'Growth',
    price: '₹25,000',
    description: 'Ideal for growing brands aiming for regional impact.',
    features: ['50 Stores', 'Up to 300,000 Impressions', 'Advanced Analytics', 'A/B Testing'],
    isFeatured: true,
  },
  {
    name: 'Scale',
    price: 'Contact Us',
    description: 'For established brands seeking nationwide reach.',
    features: ['500+ Stores', 'Unlimited Impressions', 'Dedicated Support', 'Custom Integrations'],
    isFeatured: false,
  },
];

export default function BusinessModel() {
  return (
    <section id="business-model" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent, and Effective
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Our model is designed to deliver value at every step. Choose the plan that fits your ambition.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex flex-col ${pkg.isFeatured ? 'border-2 border-primary shadow-2xl' : ''}`}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <p className="text-4xl font-bold">{pkg.price}
                    {pkg.price.startsWith('₹') && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
                </p>
                <ul className="space-y-3 text-left">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${pkg.name === 'Scale' ? 'text-base' : ''}`} variant={pkg.isFeatured ? 'default' : 'outline'}>
                  {pkg.name === 'Scale' ? 'Contact Us' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
