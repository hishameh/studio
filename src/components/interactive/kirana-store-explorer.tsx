'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { personalizeExplorerAction } from '@/lib/actions';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const bgImage = PlaceHolderImages.find(p => p.id === 'kirana-explorer-bg');

const locations: Record<string, string[]> = {
    'Bangalore': ['Koramangala', 'Indiranagar', 'Jayanagar', 'Whitefield', 'HSR Layout', 'BTM Layout'],
    'Mumbai': ['Bandra', 'Andheri', 'Dadar', 'Colaba', 'Thane', 'Juhu'],
    'Delhi': ['Connaught Place', 'Hauz Khas', 'Karol Bagh', 'Chandni Chowk', 'Noida', 'Gurgaon'],
    'Chennai': ['T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery'],
    'Kolkata': ['Park Street', 'Salt Lake', 'Howrah', 'Ballygunge'],
    'Hyderabad': ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City'],
    'Pune': ['Koregaon Park', 'Deccan Gymkhana', 'Hinjewadi', 'Viman Nagar'],
};

const cities = Object.keys(locations);

export default function KiranaStoreExplorer() {
  const [city, setCity] = useState(cities[0]);
  const [locality, setLocality] = useState(locations[cities[0]][0]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{impressions: number, shops: number} | null>(null);
  const [error, setError] = useState('');
  
  const handleFind = async () => {
    setIsLoading(true);
    setResults(null);
    setError('');
    const response = await personalizeExplorerAction({
      city,
      locality,
    });
    if (response.success && response.data) {
      setResults(response.data);
    } else {
      setError(response.error || 'Something went wrong.');
    }
    setIsLoading(false);
  };

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setLocality(locations[newCity][0]);
    setResults(null);
  }

  const handleLocalityChange = (newLocality: string) => {
    setLocality(newLocality);
    setResults(null);
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full">
            {bgImage && <Image src={bgImage.imageUrl} alt={bgImage.description} data-ai-hint={bgImage.imageHint} fill className="object-cover rounded-xl" />}
        </div>

        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><MapPin/> Kirana Impact Explorer</CardTitle>
            <CardDescription>Estimate your brand's reach in a specific area.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="city">Your City</Label>
                        <Select value={city} onValueChange={handleCityChange}>
                            <SelectTrigger id="city">
                                <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="locality">Target Locality</Label>
                        <Select value={locality} onValueChange={handleLocalityChange}>
                            <SelectTrigger id="locality">
                                <SelectValue placeholder="Select a locality" />
                            </SelectTrigger>
                            <SelectContent>
                                {locations[city].map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

            <Button onClick={handleFind} disabled={isLoading || !locality} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Calculating...' : <> <Search className='mr-2' /> Estimate Reach </>}
            </Button>

            {results && (
                <Alert>
                    <AlertTitle className='font-headline'>Estimated Reach in {locality}</AlertTitle>
                    <AlertDescription>
                        <div className='flex justify-around mt-4'>
                            <div className='text-center'>
                                 <p className='text-muted-foreground text-sm'>Partner Shops</p>
                                 <p className='text-2xl font-bold text-primary'>{results.shops}</p>
                            </div>
                            <div className='text-center'>
                                 <p className='text-muted-foreground text-sm'>Monthly Impressions</p>
                                 <p className='text-2xl font-bold text-primary'>{results.impressions.toLocaleString('en-IN')}+</p>
                            </div>
                        </div>
                         <p className='text-xs text-muted-foreground mt-4 text-center'>(Estimates for a 5km radius)</p>
                    </AlertDescription>
                </Alert>
            )}
             {error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>
            )}
            </CardContent>
        </Card>
    </div>
  );
}
