import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Scale, Leaf, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-quarry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-44 md:pt-40 pb-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-ochre/20 backdrop-blur-sm border border-ochre rounded-full">
            <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
              Desde 1978 • 47 Anos de Excelência
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary-foreground mb-6 leading-tight">
            Materiais Robustos para Construir o Futuro
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Extração, britagem e comercialização de basalto de alta qualidade em Serrana/SP. 
            Pioneiros em venda a peso certificada INMETRO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild variant="hero" size="xl">
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/produtos">Ver Produtos</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-stone-medium/30">
              <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="text-ochre" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-1">
                  Venda a Peso
                </h3>
                <p className="text-sm text-gray-400">
                  Balança certificada INMETRO
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-stone-medium/30">
              <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="text-ochre" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-1">
                  47 Anos
                </h3>
                <p className="text-sm text-gray-400">
                  De experiência no mercado
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-stone-medium/30">
              <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Leaf className="text-ochre" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-1">
                  Sustentabilidade
                </h3>
                <p className="text-sm text-gray-400">
                  Práticas ambientais certificadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Construction className="text-ochre" size={32} />
      </div>
    </section>
  );
};

export default Hero;
