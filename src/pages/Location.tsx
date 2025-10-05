import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-36 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Como Chegar
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Localização
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos estrategicamente localizados em Serrana/SP para melhor atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-strong overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d-47.581789!3d-21.196206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzQ2LjMiUyA0N8KwMzQnNTQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Pedreira Serrana"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  asChild
                  variant="cta"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <a
                    href="https://maps.google.com/?q=-21.196206,-47.581789"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2" size={20} />
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-ochre" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Endereço</h3>
                      <p className="text-muted-foreground text-sm">
                        Rod. Mário Donegá, KM 6,5<br />
                        Serrana/SP<br />
                        CEP 14150-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-ochre" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Telefone</h3>
                      <a 
                        href="tel:+551639879500"
                        className="text-muted-foreground hover:text-ochre transition-colors text-sm"
                      >
                        (16) 3987-9500
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-ochre" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">E-mail</h3>
                      <a 
                        href="mailto:contato@pedreiraserrana.com.br"
                        className="text-muted-foreground hover:text-ochre transition-colors text-sm break-all"
                      >
                        contato@pedreiraserrana.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-ochre" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Horário</h3>
                      <p className="text-muted-foreground text-sm">
                        Segunda a Sexta: 7h às 17h<br />
                        Sábado: 7h às 12h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-ochre/10 p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-4">Acesso Rápido</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nosso acesso é direto pela Rod. Mário Donegá. Estamos próximos 
                  a Ribeirão Preto e com fácil conexão às principais rodovias da região.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full" />
                    <span>15 km de Ribeirão Preto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full" />
                    <span>Próximo à SP-253</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full" />
                    <span>Frota própria de entrega</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Como Chegar
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
                  Vindo de Ribeirão Preto
                </h3>
                <p className="text-muted-foreground text-sm">
                  Siga pela Rodovia Abrão Assed (SP-333) em direção a Serrana. 
                  Após entrar na cidade, pegue a Rod. Mário Donegá e siga por 6,5 km. 
                  A Pedreira Serrana estará à sua direita.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
                  Vindo de São Paulo
                </h3>
                <p className="text-muted-foreground text-sm">
                  Pela Anhanguera (SP-330), siga até Ribeirão Preto. Pegue a saída 
                  para Serrana pela SP-333. Continue pela Rod. Mário Donegá por 6,5 km 
                  até encontrar a Pedreira Serrana.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
                  Vindo de Campinas
                </h3>
                <p className="text-muted-foreground text-sm">
                  Acesse a Rodovia Anhanguera (SP-330) em direção a Ribeirão Preto. 
                  Siga as orientações para quem vem de São Paulo após chegar à região 
                  de Serrana.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-heading font-bold mb-4 text-ochre">
                  GPS / Coordenadas
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Para utilizar GPS, use as coordenadas:
                </p>
                <p className="font-mono text-sm bg-muted p-2 rounded">
                  -21.196206, -47.581789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
