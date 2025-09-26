import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check } from 'lucide-react';

const plans = [
  { screens: 1, plays: '~144', views: '~4,320', fee: '₹799' },
  { screens: 2, plays: '~288', views: '~8,640', fee: '₹1499' },
  { screens: 3, plays: '~432', views: '~12,960', fee: '₹2399' },
];

const features = [
  'Targeted Reach: ~200 daily shoppers per store (~6,000+ monthly views per screen).',
  'Affordable Plans: Starting at just ₹799 per month, scale across multiple screens.',
  'Extra Advantage: Option to distribute free product samples in stores for direct consumer trials.',
  'High Recall, High Impact - 12 hours of daily screen time with repeated exposure to increase stronger brand memory.',
];

export default function BusinessModel() {
  return (
    <section id="business-model" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Brand Spotlight Plans
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          10-sec ads, played every 2 minutes. Best for: Local shops, trial
          campaigns, single-product promos.
        </p>

        <Card className="mt-12 w-full max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="font-sans text-xl font-semibold text-primary">
              Starts at just{' '}
              <span className="text-3xl font-bold">₹799</span> per shop, per
              month.
            </div>
            <p className="text-sm text-muted-foreground">
              That’s only ₹0.13 per ad impression.
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Screens</TableHead>
                  <TableHead className="text-center">
                    Frequency (per screen/day)
                  </TableHead>
                  <TableHead className="text-center">Monthly Views</TableHead>
                  <TableHead className="text-center">Monthly Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan) => (
                  <TableRow key={plan.screens}>
                    <TableCell className="text-center font-medium">
                      {plan.screens}
                    </TableCell>
                    <TableCell className="text-center">{plan.plays}</TableCell>
                    <TableCell className="text-center">{plan.views}</TableCell>
                    <TableCell className="text-center font-bold text-primary">
                      {plan.fee}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-16 text-left max-w-4xl mx-auto">
           <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
