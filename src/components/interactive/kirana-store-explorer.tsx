'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { personalizeExplorerAction } from '@/lib/actions';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const bgImage = PlaceHolderImages.find(p => p.id === 'kirana-explorer-bg');

export default function KiranaStoreExplorer() {
  const [location, setLocation] = useState('Bangalore');
  const [preferences, setPreferences] = useState('clean stores, good variety of products');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState('');
  const [error, setError] = useState('');
  
  const handleFind = async () => {
    setIsLoading(true);
    setResults('');
    setError('');
    const response = await personalizeExplorerAction({
      userLocation: location,
      preferredStoreTraits: preferences,
    });
    if (response.success && response.data) {
      setResults(response.data.personalizedStoreList);
    } else {
      setError(response.error || 'Something went wrong.');
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full">
            {bgImage && <Image src={bgImage.imageUrl} alt={bgImage.description} data-ai-hint={bgImage.imageHint} fill className="object-cover rounded-xl" />}
        </div>

        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><MapPin/> Kirana Explorer (AI-Powered)</CardTitle>
            <CardDescription>Find the best stores near you based on your preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="location">Your City</Label>
                <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Koramangala, Bangalore"
                />
            </div>
             <div className="space-y-2">
                <Label htmlFor="preferences">What are you looking for?</Label>
                <Textarea
                id="preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                placeholder="e.g., 'fresh vegetables', 'friendly staff', 'accepts digital payments'"
                />
            </div>


            <Button onClick={handleFind} disabled={isLoading || !location} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Personalizing...' : <> <Search className='mr-2' /> Find Stores </>}
            </Button>

            {results && (
                <Alert>
                    <AlertTitle className='font-headline'>Personalized Results for {location}</AlertTitle>
                    <AlertDescription className="whitespace-pre-wrap">
                        {results}
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
