
const brands = [
  'Parle',
  'Britannia',
  'Dutch Corner',
  'Campco',
  'Landtrades',
  'Amul',
  'ITC',
  'Nestle',
  'Hayyatibb',
  'Tecfides',
  'Marian Builders',
  'Fern',
  'Kerepedals',
  'Kissa',
];

export default function Brands() {
  const extendedBrands = [...brands, ...brands]; // Duplicate for seamless scrolling

  return (
    <section id="brands" className="bg-background py-12 sm:py-16">
      <div className="container mx-auto">
        <h2 className="text-center font-headline text-xl font-semibold text-muted-foreground">
          Trusted by India's most innovative brands
        </h2>
        <div className="brand-logos mt-12">
          <div className="brand-logos-track">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center" style={{ width: 'auto', flexShrink: 0 }}>
                <span className="font-headline text-xl font-bold text-muted-foreground transition-colors duration-300 hover:text-foreground whitespace-nowrap px-4">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
