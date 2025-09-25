
const brands = [
  'Parle',
  'Britannia',
  'Dutch Corner',
  'Campco',
  'Landtrades',
  'Amul',
  'ITC',
  'Nestle',
];

export default function Brands() {
  const extendedBrands = [...brands, ...brands]; // Duplicate for seamless scrolling

  return (
    <section id="brands" className="bg-background py-12 sm:py-16">
      <div className="container mx-auto">
        <h2 className="text-center font-headline text-2xl font-semibold text-muted-foreground">
          Trusted by the India's most innovative brands
        </h2>
        <div className="brand-logos mt-12">
          <div className="brand-logos-track">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="font-headline text-2xl font-bold text-muted-foreground transition-colors duration-300 hover:text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
