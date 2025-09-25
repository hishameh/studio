import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ScanLine } from 'lucide-react';

const shelfImage = PlaceHolderImages.find((p) => p.id === 'deal-scanner-shelf');

export default function DealScanner() {
  return (
    <div className="text-center">
        <h3 className="font-headline text-2xl font-bold">Consumer Deal Scanner</h3>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Hover over products on the shelf to simulate scanning and discover deals.
        </p>
        <div className="relative mx-auto mt-8 aspect-video max-w-4xl">
            {shelfImage && (
                <Image
                src={shelfImage.imageUrl}
                alt={shelfImage.description}
                data-ai-hint={shelfImage.imageHint}
                fill
                className="rounded-lg object-cover"
                />
            )}
            <div className="absolute inset-0">
                {/* Hotspot 1 */}
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="group absolute top-[50%] left-[20%] h-20 w-16 cursor-pointer rounded-md" aria-label="Scan product 1">
                            <div className="absolute inset-0 rounded-md bg-accent/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <ScanLine className="absolute inset-0 m-auto h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="border-accent bg-background">
                        <p className="font-bold text-primary">Crispy Chips</p>
                        <p className="font-semibold text-destructive">25% OFF!</p>
                        <p className="text-xs text-muted-foreground">Scan in-store to redeem.</p>
                    </PopoverContent>
                </Popover>

                {/* Hotspot 2 */}
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="group absolute top-[30%] left-[55%] h-24 w-12 cursor-pointer rounded-md" aria-label="Scan product 2">
                            <div className="absolute inset-0 rounded-md bg-accent/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <ScanLine className="absolute inset-0 m-auto h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="border-accent bg-background">
                        <p className="font-bold text-primary">Organic Juice</p>
                        <p className="font-semibold text-destructive">Buy 1 Get 1 Free</p>
                        <p className="text-xs text-muted-foreground">Limited time offer.</p>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    </div>
  );
}
