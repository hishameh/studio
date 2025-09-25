'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, MapPin, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bgImage = PlaceHolderImages.find(p => p.id === 'kirana-explorer-bg');

export default function KiranaStoreExplorer() {
  const [location, setLocation] = useState('Bangalore');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({ stores: 0, impressions: 0, impact: ''});
  
  const handleFind = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        const storeCount = Math.floor(Math.random() * (250 - 150 + 1)) + 150;
        const impressionCount = storeCount * (Math.floor(Math.random() * (450 - 350 + 1)) + 350);
        setResults({
            stores: storeCount,
            impressions: impressionCount,
            impact: 'High consumer engagement & brand recall.'
        });
        setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full">
            {bgImage && <Image src={bgImage.imageUrl} alt={bgImage.description} data-ai-hint={bgImage.imageHint} fill className="object-cover rounded-xl" />}
        </div>

        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-2xl">Kirana Impact Explorer</CardTitle>
            <CardDescription>Estimate the potential Alive impressions in your area.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="location">Enter your city or locality</Label>
                <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Koramangala, Bangalore"
                />
            </div>

            <Button onClick={handleFind} disabled={isLoading || !location} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Calculating...' : 'Estimate Impact'}
            </Button>

            {results.stores > 0 && (
                <div className="mt-4 rounded-md border bg-secondary/50 p-4 space-y-4">
                    <h4 className="font-semibold text-center">Estimated Reach in <span className="text-primary">{location}</span>:</h4>
                    <div className="flex justify-around text-center">
                        <div>
                            <MapPin className="h-8 w-8 mx-auto text-accent"/>
                            <p className="text-2xl font-bold">{results.stores.toLocaleString()}+</p>
                            <p className="text-sm text-muted-foreground">Stores</p>
                        </div>
                        <div>
                            <Users className="h-8 w-8 mx-auto text-accent"/>
                            <p className="text-2xl font-bold">{results.impressions.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">Weekly Impressions</p>
                        </div>
                    </div>
                     <div className="text-center pt-2">
                        <TrendingUp className="h-8 w-8 mx-auto text-accent"/>
                        <p className="text-lg font-bold">{results.impact}</p>
                        <p className="text-sm text-muted-foreground">Potential Impact</p>
                    </div>
                </div>
            )}
            </CardContent>
        </Card>
    </div>
  );
}
