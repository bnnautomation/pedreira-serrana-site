import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-ochre rounded flex items-center justify-center font-heading font-bold text-xl text-primary">
                PS
              </div>
              <div className="font-heading font-bold text-lg">
                Pedreira Serrana
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              47 anos fornecendo materiais de qualidade para construção civil. 
              Extração e britagem de basalto com certificação INMETRO.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-ochre transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-ochre transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-ochre transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/processo" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Processo de Mineração
                </Link>
              </li>
              <li>
                <Link to="/venda-peso" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Venda a Peso
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-ochre transition-smooth">
                  Portfólio
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Brita Graduada</li>
              <li>Brita 1 (19mm)</li>
              <li>Brita 2 (32mm)</li>
              <li>Pedrisco</li>
              <li>Pó de Basalto</li>
              <li>Rachão</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-ochre mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rod. Abrão Assed, Km 347<br />
                  Serrana - SP, 14150-000
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-ochre flex-shrink-0" />
                <a href="tel:+551633151010" className="text-muted-foreground hover:text-ochre transition-smooth">
                  (16) 3315-1010
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-ochre flex-shrink-0" />
                <a href="mailto:contato@pedreiraserrana.com.br" className="text-muted-foreground hover:text-ochre transition-smooth">
                  contato@pedreiraserrana.com.br
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="text-ochre mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Seg - Sex: 7h às 17h<br />
                  Sáb: 7h às 12h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-dark pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Pedreira Serrana. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-ochre transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-ochre transition-smooth">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
