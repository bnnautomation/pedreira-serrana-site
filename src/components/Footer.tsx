import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const sitemapColumn1 = [
    { name: "HOME", path: "/" },
    { name: "SOBRE NÓS", path: "/sobre" },
    { name: "MINERAÇÃO", path: "/processo" },
    { name: "VENDA A PESO", path: "/venda-peso" },
  ];

  const sitemapColumn2 = [
    { name: "PRODUTOS", path: "/produtos" },
    { name: "PORTFÓLIO", path: "/portfolio" },
    { name: "LOCALIZAÇÃO", path: "/localizacao" },
    { name: "CONTATO", path: "/contato" },
  ];

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
              Mapa do Site
            </h3>
            <p className="text-stone-300 mb-4 text-sm">
              Encontre de maneira facilitada as informações.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div className="space-y-2">
                {sitemapColumn1.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-stone-300 hover:text-ochre transition-colors text-sm"
                  >
                    - {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                {sitemapColumn2.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-stone-300 hover:text-ochre transition-colors text-sm"
                  >
                    - {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
              Localização
            </h3>
            <p className="text-stone-300 mb-4 text-sm">
              Saiba como nos encontrar.
            </p>
            <div className="space-y-3 text-stone-300 text-sm mb-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                <p>
                  Rod. Mário Donegá, KM 6,5
                  <br />
                  Serrana/SP - CEP 14150-000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ochre flex-shrink-0" />
                <a 
                  href="tel:+551639879500"
                  className="hover:text-ochre transition-colors"
                >
                  (16) 3987-9500
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ochre flex-shrink-0" />
                <a
                  href="mailto:contato@pedreiraserrana.com.br"
                  className="hover:text-ochre transition-colors"
                >
                  contato@pedreiraserrana.com.br
                </a>
              </div>
            </div>
            <Link
              to="/localizacao"
              className="inline-block text-ochre hover:underline font-semibold text-sm"
            >
              Ver no mapa →
            </Link>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link 
              to="/"
              className="text-3xl font-heading font-bold text-ochre mb-4 hover:opacity-80 transition-opacity"
            >
              PEDREIRA SERRANA
            </Link>
            <p className="text-stone-300 text-sm text-center md:text-left mb-6">
              47 anos de experiência em extração, britagem e comercialização de
              basalto com qualidade certificada.
            </p>
            <div className="text-xs text-stone-400">
              <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
              <p>Inscrição Estadual: XXX.XXX.XXX.XXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 bg-stone-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
            <p className="mb-2 md:mb-0">2025 - TODOS OS DIREITOS RESERVADOS</p>
            <p>PEDREIRA SERRANA LTDA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
