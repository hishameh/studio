'use client';

import { useCountUp } from '@/hooks/use-count-up';
import { Building, Eye, Sparkles } from 'lucide-react';

const pulseData = [
  {
    icon: Building,
    end: 10,
    label: 'Stores Onboarded',
  },
  {
    icon: Eye,
    end: 250000,
    label: 'Impressions Today',
    duration: 2500,
  },
  {
    icon: Sparkles,
    end: 42,
    label: 'Brands Discovered This Month',
  },
];

function PulseCounter({ icon: Icon, end, label, duration = 2000 }: (typeof pulseData)[0]) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <Icon className="h-10 w-10 text-accent" />
      <p className="font-headline text-4xl font-bold text-primary">{count.toLocaleString()}+</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function DataPulse() {
  return (
    <div className="rounded-xl bg-secondary p-8 md:p-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {pulseData.map((item) => (
          <PulseCounter key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
