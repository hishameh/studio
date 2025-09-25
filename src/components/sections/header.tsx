import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Package, Store, Users } from 'lucide-react';
import { Logo } from '../icons/logo';

const navLinks = [
  { href: '#brands', label: 'For Brands', icon: Package },
  { href: '#stores', label: 'For Kirana Stores', icon: Store },
  { href: '#consumers', label: 'For Consumers', icon: Users },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-sm">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden text-primary hover:text-primary/90 md:flex">
            Get Started
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <a href="#" className="flex items-center gap-2">
                    <Logo />
                </a>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 rounded-md p-2 text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  ))}
                </nav>
                 <Button variant="default">
                    Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
