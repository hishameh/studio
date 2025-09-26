import { Button } from '@/components/ui/button';

export default function ClosingCta() {
  return (
    <section id="closing-cta" className="bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Be Alive With Us.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Ready to join the retail revolution? Choose your path and let's get started.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">Join as a Brand</Button>
          <Button size="lg" variant="outline">Partner as a Kirana</Button>
          <Button size="lg" variant="ghost">Get Deals as a Consumer</Button>
        </div>
      </div>
    </section>
  );
}
