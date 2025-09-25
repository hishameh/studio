'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, LocateIcon, Users, HandCoins } from 'lucide-react';


const comparisonData = [
  {
    metric: 'Brand Recall',
    digital: 74,
    traditional: 29,
    description: 'Consumers remember ads seen at the point of purchase.'
  },
  {
    metric: 'Purchase Intent',
    digital: 62,
    traditional: 15,
    description: 'In-store digital ads drive immediate consideration.'
  },
  {
    metric: 'Ad Engagement',
    digital: 45,
    traditional: 10,
    description: 'Interactive digital content captures more attention.'
  },
];

const cpaData = [
    { name: 'Alive', value: 0.50 },
    { name: 'Traditional', value: 2.00 }
];

const COLORS = {
  digital: 'hsl(var(--primary))',
  traditional: 'hsl(var(--muted))',
  pie: ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']
};

export default function MarketProof() {
  return (
    <section id="market-proof" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The Digital Advantage in Retail
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            In-store digital media isn't just new, it's quantifiably better. We turn passive shoppers into active buyers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {comparisonData.map((item) => (
            <Card key={item.metric} className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline">{item.metric}</CardTitle>
                    <CardDescription className="h-10">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                            <TrendingUp className="mx-auto h-8 w-8 text-primary" />
                            <p className="text-4xl font-bold text-primary">{`${item.digital}%`}</p>
                            <p className="text-sm font-semibold">Alive (Digital)</p>
                        </div>
                        <div className="rounded-lg bg-muted/50 p-4">
                            <TrendingDown className="mx-auto h-8 w-8 text-muted-foreground" />
                             <p className="text-4xl font-bold text-muted-foreground">{`${item.traditional}%`}</p>
                            <p className="text-sm font-semibold">Traditional</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">
                        Ad Effectiveness Comparison
                    </CardTitle>
                    <CardDescription>Percentage increase in key marketing metrics.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                                data={comparisonData}
                                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                                barGap={10}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                <YAxis stroke="hsl(var(--muted-foreground))" unit="%"/>
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--secondary))' }}
                                    contentStyle={{
                                        background: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))'
                                    }}
                                />
                                <Legend wrapperStyle={{ fontSize: '0.8rem' }} />
                                <Bar dataKey="digital" name="Alive (Digital)" radius={[4, 4, 0, 0]} fill={COLORS.digital} />
                                <Bar dataKey="traditional" name="Traditional" radius={[4, 4, 0, 0]} fill={COLORS.traditional} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">
                        Cost Per Acquisition (CPA)
                    </CardTitle>
                    <CardDescription>Average cost to acquire a new customer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={cpaData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label={(props) => `₹${props.value.toFixed(2)}`}
                                >
                                    {cpaData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.digital : COLORS.traditional} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--secondary))' }}
                                    contentStyle={{
                                        background: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))'
                                    }}
                                />
                                <Legend wrapperStyle={{ fontSize: '0.8rem' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
