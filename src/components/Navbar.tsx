import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Produtos", path: "/produtos" },
    { name: "Processo", path: "/processo" },
    { name: "Venda a Peso", path: "/venda-peso" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-ochre rounded flex items-center justify-center font-heading font-bold text-2xl text-primary transition-smooth group-hover:shadow-glow">
              PS
            </div>
            <div className="hidden md:block">
              <div className="font-heading font-bold text-xl text-primary-foreground">
                Pedreira Serrana
              </div>
              <div className="text-xs text-ochre uppercase tracking-wider">
                Desde 1978
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded font-heading font-medium text-sm transition-smooth ${
                  isActive(item.path)
                    ? "bg-ochre text-primary"
                    : "text-primary-foreground hover:bg-stone-dark hover:text-ochre"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+551633151010" className="flex items-center space-x-2 text-primary-foreground hover:text-ochre transition-smooth">
              <Phone size={18} />
              <span className="font-medium">(16) 3315-1010</span>
            </a>
            <Button asChild variant="cta" size="lg">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground hover:text-ochre transition-smooth"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded font-heading font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-ochre text-primary"
                    : "text-primary-foreground hover:bg-stone-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:+551633151010"
                className="flex items-center justify-center space-x-2 text-primary-foreground py-3"
              >
                <Phone size={18} />
                <span className="font-medium">(16) 3315-1010</span>
              </a>
              <Button asChild variant="cta" size="lg" className="w-full">
                <Link to="/contato" onClick={() => setIsOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
