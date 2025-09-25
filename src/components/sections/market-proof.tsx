'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCountUp } from '@/hooks/use-count-up';

const marketData = [
  {
    name: 'Kirana Stores',
    value: 13,
    unit: 'M',
    description: 'in India',
  },
  {
    name: 'OoH Ad Market',
    value: 52.8,
    unit: 'B',
    description: 'by 2025 (₹)',
  },
  {
    name: 'Ad Spend p/c',
    value: 37.2,
    unit: '',
    description: 'in India (2025, ₹)',
  },
];

const chartData = [
  {
    country: 'India',
    adSpend: 37.20,
  },
  {
    country: 'China',
    adSpend: 820,
  },
];

const chartConfig = {
  adSpend: {
    label: "Ad Spend (₹)",
    color: "hsl(var(--accent))",
  },
}

function Counter({ end, unit, description }: { end: number; unit: string; description: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <p className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl">
        {count.toLocaleString('en-IN')}{unit}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function MarketProof() {
  return (
    <section id="market-proof" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The Opportunity is Huge.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Retail media is the next frontier, and India's kirana network is the untapped goldmine.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {marketData.map((item) => (
            <Counter key={item.name} end={item.value} unit={item.unit} description={item.description} />
          ))}
        </div>

        <div className="mt-20">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">
                        Untapped Potential: Ad Spend Per Capita (₹)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--secondary))' }}
                                    contentStyle={{
                                        background: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))'
                                    }}
                                />
                                <Bar dataKey="adSpend" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
