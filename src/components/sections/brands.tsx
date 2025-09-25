import { CocaColaIcon, GoogleIcon, MicrosoftIcon, NetflixIcon, NvidiaIcon, OpenAIIcon, PepsiIcon, TeslaIcon, ToyotaIcon } from "../icons/brands";

const brands = [
  { name: 'Google', icon: GoogleIcon },
  { name: 'Coca-Cola', icon: CocaColaIcon },
  { name: 'Microsoft', icon: MicrosoftIcon },
  { name: 'Pepsi', icon: PepsiIcon },
  { name: 'Netflix', icon: NetflixIcon },
  { name: 'Nvidia', icon: NvidiaIcon },
  { name: 'OpenAI', icon: OpenAIIcon },
  { name: 'Tesla', icon: TeslaIcon },
  { name: 'Toyota', icon: ToyotaIcon },
];

export default function Brands() {
  const extendedBrands = [...brands, ...brands]; // Duplicate for seamless scrolling

  return (
    <section id="brands" className="bg-background py-12 sm:py-16">
      <div className="container mx-auto">
        <h2 className="text-center font-headline text-2xl font-semibold text-muted-foreground">
          Trusted by the world's most innovative brands
        </h2>
        <div className="brand-logos mt-12">
          <div className="brand-logos-track">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center">
                <brand.icon className="h-10 w-auto text-muted-foreground transition-colors duration-300 hover:text-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
