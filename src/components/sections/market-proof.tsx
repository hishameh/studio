'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

const cpiData = [
    { name: 'Alive', value: 0.13 },
    { name: 'Traditional', value: 0.50 }
];

const salesUpliftData = [
  { name: 'Week 1', uplift: 2.5 },
  { name: 'Week 2', uplift: 3.8 },
  { name: 'Week 3', uplift: 5.1 },
  { name: 'Week 4', uplift: 7.2 },
];

const COLORS = {
  digital: 'hsl(var(--primary))',
  traditional: 'hsl(var(--muted))',
  pie: ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-popover p-2 text-popover-foreground shadow-sm">
        <p className="font-bold">{`${payload[0].name}: ₹${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};


export default function MarketProof() {
  return (
    <section id="market-proof" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The Digital Advantage in Retail
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            In-store digital media isn't just new, it's quantifiably better. We turn passive shoppers into active buyers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Ad Effectiveness</CardTitle>
                    <CardDescription>Key marketing metrics.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                                data={comparisonData}
                                layout="vertical"
                                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                barGap={10}
                            >
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                                <YAxis dataKey="metric" type="category" stroke="hsl(var(--muted-foreground))" fontSize={10} width={80} />
                                <Tooltip
                                    cursor={{fill: 'hsl(var(--muted))'}}
                                    animationDuration={300}
                                    contentStyle={{
                                        background: 'hsl(var(--popover))',
                                        borderColor: 'hsl(var(--border))',
                                        color: 'hsl(var(--popover-foreground))'
                                    }}
                                />
                                <Bar dataKey="digital" name="Alive" radius={[0, 4, 4, 0]} fill={COLORS.digital} animationDuration={1500} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Cost Per Impression</CardTitle>
                    <CardDescription>Average cost for an ad view.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={cpiData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    label={(props) => `₹${props.value.toFixed(2)}`}
                                    animationDuration={1500}
                                >
                                    {cpiData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.digital : COLORS.traditional} stroke={index === 0 ? COLORS.digital : COLORS.traditional} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    cursor={false}
                                    animationDuration={300}
                                    content={ <CustomTooltip /> }
                                />
                                <Legend wrapperStyle={{ fontSize: '0.8rem', color: 'hsl(var(--foreground))' }} iconSize={10} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Sales Uplift Over Time</CardTitle>
                    <CardDescription>Campaign impact on sales.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={salesUpliftData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                                <Tooltip
                                    cursor={false}
                                    animationDuration={300}
                                    contentStyle={{
                                        background: 'hsl(var(--popover))',
                                        borderColor: 'hsl(var(--border))',
                                        color: 'hsl(var(--popover-foreground))'
                                    }}
                                />
                                <defs>
                                    <linearGradient id="colorUplift" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={COLORS.digital} stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor={COLORS.digital} stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="uplift" stroke={COLORS.digital} fill="url(#colorUplift)" strokeWidth={2} animationDuration={1500} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Traditional Ad Decay</CardTitle>
                    <CardDescription>Recall of print/radio ads over time.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={[{name: 'Day 1', recall: 30}, {name: 'Day 7', recall: 15}, {name: 'Day 30', recall: 5}]} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                                <Tooltip
                                    cursor={false}
                                    animationDuration={300}
                                    contentStyle={{
                                        background: 'hsl(var(--popover))',
                                        borderColor: 'hsl(var(--border))',
                                        color: 'hsl(var(--popover-foreground))'
                                    }}
                                />
                                <defs>
                                    <linearGradient id="colorDecay" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={COLORS.traditional} stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor={COLORS.traditional} stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="recall" stroke={COLORS.traditional} fill="url(#colorDecay)" strokeWidth={2} animationDuration={1500} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
