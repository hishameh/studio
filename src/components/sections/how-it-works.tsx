'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Upload, Target } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Step 1: Upload Your Ad',
    description: "Easily upload your brand's video or image creative to our platform. Our system optimizes it for in-store display.",
  },
  {
    icon: Target,
    title: 'Step 2: Target Your Audience',
    description: 'Select the cities, localities, and even individual stores where you want your ad to be seen. Hyper-local targeting made simple.',
  },
  {
    icon: CheckCircle,
    title: 'Step 3: Go Live!',
    description: "Your ad appears on 'Alive' screens in your chosen kiranas, influencing purchase decisions at the exact right moment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Launch your in-store campaign in three simple steps.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2">{step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
