'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { personalizeExplorerAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MapPin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type Location = {
  lat: number;
  lon: number;
};

const bgImage = PlaceHolderImages.find(p => p.id === 'kirana-explorer-bg');

export default function KiranaStoreExplorer() {
  const [location, setLocation] = useState<Location | null>(null);
  const [preferredTraits, setPreferredTraits] = useState('cleanliness, variety of products, friendly staff');
  const [personalizedResult, setPersonalizedResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      () => {
        // Fallback location (e.g., Bangalore) if user denies permission
        setLocation({ lat: 12.9716, lon: 77.5946 });
        toast({
            title: 'Location Access Denied',
            description: 'Using a default location. Allow location access for better results.',
        });
      }
    );
  }, [toast]);

  const handlePersonalize = async () => {
    if (!location) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not determine your location.',
      });
      return;
    }

    setIsLoading(true);
    setPersonalizedResult('');

    const input = {
      userLocation: `Lat: ${location.lat}, Lon: ${location.lon}`,
      preferredStoreTraits: preferredTraits,
    };

    const result = await personalizeExplorerAction(input);

    if (result.success && result.data) {
      setPersonalizedResult(result.data.personalizedStoreList);
    } else {
      toast({
        variant: 'destructive',
        title: 'Personalization Failed',
        description: result.error || 'An unknown error occurred.',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full">
            {bgImage && <Image src={bgImage.imageUrl} alt={bgImage.description} data-ai-hint={bgImage.imageHint} fill className="object-cover rounded-xl" />}
            <Popover>
                <PopoverTrigger asChild>
                    <div className="absolute top-[40%] left-[25%] h-16 w-12 cursor-pointer rounded bg-accent/50 animate-pulse hover:bg-accent/80 transition-colors"></div>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                    <p className="font-bold">Fresh Produce Aisle</p>
                    <p className="text-sm">Discount on local snacks!</p>
                </PopoverContent>
            </Popover>
             <Popover>
                <PopoverTrigger asChild>
                    <div className="absolute top-[35%] right-[30%] h-24 w-16 cursor-pointer rounded bg-accent/50 animate-pulse hover:bg-accent/80 transition-colors"></div>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                    <p className="font-bold">Beverages</p>
                    <p className="text-sm">New cold-brew coffee now available.</p>
                </PopoverContent>
            </Popover>
        </div>

        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-2xl">Virtual Kirana Store Explorer</CardTitle>
            <CardDescription>A description of the preferred traits of kirana stores for the user, such as cleanliness, variety of products, and friendliness of staff.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="traits">What do you look for in a store?</Label>
                <Input
                id="traits"
                value={preferredTraits}
                onChange={(e) => setPreferredTraits(e.target.value)}
                placeholder="e.g., friendly staff, good prices"
                />
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-accent" />
                {location ? `Location: ${location.lat.toFixed(2)}, ${location.lon.toFixed(2)}` : 'Fetching location...'}
            </div>

            <Button onClick={handlePersonalize} disabled={isLoading || !location} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Personalizing...' : 'Find My Stores'}
            </Button>

            {personalizedResult && (
                <div className="mt-4 rounded-md border bg-secondary p-4">
                <h4 className="font-semibold">Your Personalized Kirana List:</h4>
                <p className="mt-2 whitespace-pre-wrap text-sm">{personalizedResult}</p>
                </div>
            )}
            </CardContent>
        </Card>
    </div>
  );
}
