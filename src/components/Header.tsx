import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg"></div>
            <span className="text-xl font-semibold">Liritas</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-emerald-600 transition-colors">Services</a>
            <a href="#solutions" className="text-sm hover:text-emerald-600 transition-colors">Solutions</a>
            <a href="#about" className="text-sm hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="text-sm hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
