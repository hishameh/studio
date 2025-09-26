import AliveMeter from "../interactive/alive-meter";
import DataPulse from "../interactive/data-pulse";
import ImpactCalculator from "../interactive/impact-calculator";
import KiranaStoreExplorer from "../interactive/kirana-store-explorer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "../ui/card";
import { Tv } from "lucide-react";

const aliveAdImage = PlaceHolderImages.find((p) => p.id === 'alive-ad-in-store');

function AliveInAction() {
    return (
        <div className="text-center">
          <h3 className="font-headline text-2xl font-bold flex items-center justify-center gap-2">
            <Tv /> Experience Alive in Action
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            See how brands come to life right at the shelf in a real store
            environment.
          </p>
          <div className="relative mx-auto mt-8 aspect-video max-w-5xl overflow-hidden rounded-xl bg-secondary shadow-2xl">
            {aliveAdImage && (
              <Image
                src={aliveAdImage.imageUrl}
                alt={aliveAdImage.description}
                data-ai-hint={aliveAdImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
    )
}

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
        
        <AliveInAction />
        <KiranaStoreExplorer />
        <ImpactCalculator />
        <DataPulse />
        <AliveMeter />
      </div>
    </section>
  );
}
