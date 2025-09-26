import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '799',
    description: 'Perfect for getting started and testing the waters in a single high-traffic location.',
    shops: '1 Shop',
    screens: '1 Screen',
    features: [
      '~144 plays per day',
      '~4,320 monthly views',
      'Targeted local reach',
      'Basic performance analytics'
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '2,249',
    description: 'Expand your reach across multiple key stores to capture a larger audience.',
    shops: '3 Shops',
    screens: '3 Screens',
    features: [
      '~432 plays per day',
      '~12,960 monthly views',
      'Multi-store campaign management',
      'Detailed analytics & insights',
      'Priority support'
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Maximum impact with wide-scale deployment and tailored solutions.',
    shops: '5+ Shops',
    screens: 'Custom',
    features: [
      'Volume-based pricing',
      'Dedicated account manager',
      'API access & integrations',
      'Custom creative services'
    ],
    isPopular: false,
  },
];

type BusinessModelProps = {
  onGetStartedClick: () => void;
};

export default function BusinessModel({ onGetStartedClick }: BusinessModelProps) {
  return (
    <section id="business-model" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Find a Plan That Works for You
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Affordable, scalable plans designed to put your brand in the spotlight.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary border-2' : ''}`}>
               {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-sm font-bold py-1 px-4 rounded-t-lg -mt-px flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              <CardHeader className="text-left">
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6 text-left">
                 <div>
                    <span className="font-headline text-4xl font-bold">
                        {plan.price !== 'Custom' ? '₹' + plan.price : 'Custom'}
                    </span>
                    <span className="text-muted-foreground">
                        {plan.price !== 'Custom' ? ' /mo' : ''}
                    </span>
                 </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === 'Growth' ? 'default' : 'outline'} onClick={onGetStartedClick}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
