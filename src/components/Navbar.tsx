import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSerrana from "@/assets/logo-pedreira-serrana.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Produtos", path: "/produtos" },
    { name: "Venda a Peso", path: "/venda-peso" },
    { name: "Mineração", path: "/processo" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Localização", path: "/localizacao" },
    { name: "Contato", path: "/contato" },
    { name: "Trabalhe conosco", path: "/carreiras" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-stone-900 text-white py-3 text-xs">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
            <span className="text-[11px] sm:text-xs">
              PEDREIRA SERRANA | HÁ 47 ANOS TRABALHANDO PELO DESENVOLVIMENTO
            </span>
            <Link 
              to="/contato?acao=parceiro" 
              className="text-ochre hover:underline font-semibold text-xs sm:text-sm px-3 py-1 bg-ochre/10 rounded hover:bg-ochre/20 transition-smooth whitespace-nowrap"
            >
              SEJA NOSSO PARCEIRO
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary shadow-strong">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img 
                src={logoSerrana} 
                alt="Pedreira Serrana Logo" 
                className="h-14 w-auto object-contain rounded-lg transition-smooth group-hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded font-heading font-medium text-xs xl:text-sm transition-smooth ${
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
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a href="tel:+551639879500" className="flex items-center space-x-2 text-primary-foreground hover:text-ochre transition-smooth">
                <Phone size={18} />
                <span className="font-medium text-sm">(16) 3987-9500</span>
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
                  href="tel:+551639879500"
                  className="flex items-center justify-center space-x-2 text-primary-foreground py-3"
                >
                  <Phone size={18} />
                  <span className="font-medium">(16) 3987-9500</span>
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
    </div>
  );
};

export default Navbar;
