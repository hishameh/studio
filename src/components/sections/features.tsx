import AliveMeter from "../interactive/alive-meter";
import DataPulse from "../interactive/data-pulse";
import ImpactCalculator from "../interactive/impact-calculator";
import KiranaStoreExplorer from "../interactive/kirana-store-explorer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const adImage = PlaceHolderImages.find((p) => p.id === 'alive-ad-in-store');

export default function Features() {
  return (
    <section id="features" className="bg-background">
      <div className="container mx-auto space-y-32 px-4">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Experience Alive in Action
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Interact with our tools to see how we're revolutionizing retail media.
            </p>
        </div>
        
        {adImage && <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <Image src={adImage.imageUrl} alt={adImage.description} data-ai-hint={adImage.imageHint} fill className="object-cover"/>
        </div>}
        <KiranaStoreExplorer />
        <ImpactCalculator />
        <DataPulse />
        <AliveMeter />
      </div>
    </section>
  );
}
