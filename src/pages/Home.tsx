import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Truck, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import britaImg from "@/assets/product-brita.jpg";
import pedriscoImg from "@/assets/product-pedrisco.jpg";
import poBasaltoImg from "@/assets/product-po-basalto.jpg";
import miningImg from "@/assets/mining-process.jpg";
import portfolioImg from "@/assets/portfolio-construction.jpg";

const Home = () => {
  const products = [
    {
      image: britaImg,
      title: "Brita Graduada",
      description: "Agregado graúdo de basalto britado, ideal para concreto e pavimentação.",
      specs: ["Brita 1: 19mm", "Brita 2: 32mm", "Alta resistência"],
    },
    {
      image: pedriscoImg,
      title: "Pedrisco",
      description: "Agregado miúdo para acabamentos e concretos especiais.",
      specs: ["Granulometria 4-9mm", "Uso versátil", "Qualidade superior"],
    },
    {
      image: poBasaltoImg,
      title: "Pó de Basalto",
      description: "Material fino para remineralização de solos e preenchimento.",
      specs: ["Alta pureza", "Aplicação agrícola", "Sustentável"],
    },
  ];

  const differentials = [
    {
      icon: CheckCircle2,
      title: "Venda a Peso Certificada",
      description: "Sistema de pesagem INMETRO garante transparência total nas transações.",
    },
    {
      icon: Shield,
      title: "47 Anos de Credibilidade",
      description: "Quase cinco décadas fornecendo materiais de qualidade para grandes obras.",
    },
    {
      icon: Truck,
      title: "Logística Ágil",
      description: "Frota própria e localização estratégica para entregas pontuais.",
    },
    {
      icon: Clock,
      title: "Atendimento Dedicado",
      description: "Equipe especializada para orientar na escolha do produto ideal.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Produtos em Destaque */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Nossos Produtos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Materiais de Alta Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Linha completa de agregados de basalto para construção civil, 
              pavimentação e aplicações especiais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Por Que Escolher
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-strong transition-smooth text-center"
                >
                  <div className="w-16 h-16 bg-ochre/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-ochre" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini Portfólio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
                <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                  Nosso Impacto
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Obras que Constroem Cidades
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossos materiais estão presentes nas principais obras de infraestrutura 
                da região de Ribeirão Preto e Serrana. Rodovias, pontes, edifícios 
                comerciais e residenciais confiam na qualidade Pedreira Serrana.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-ochre mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Fornecimento para obras de grande porte
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-ochre mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Parceria com construtoras renomadas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-ochre mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Aplicações em pavimentação urbana
                  </span>
                </li>
              </ul>
              <Button asChild variant="cta" size="lg">
                <Link to="/portfolio">
                  Ver Portfólio Completo
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={miningImg}
                  alt="Operação de mineração"
                  className="w-full h-64 object-cover rounded-lg shadow-card"
                />
                <img
                  src={portfolioImg}
                  alt="Obra com nossos produtos"
                  className="w-full h-80 object-cover rounded-lg shadow-card"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={britaImg}
                  alt="Produto brita"
                  className="w-full h-80 object-cover rounded-lg shadow-card"
                />
                <img
                  src={pedriscoImg}
                  alt="Produto pedrisco"
                  className="w-full h-64 object-cover rounded-lg shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 basalt-texture"
          style={{
            backgroundImage: `url(${miningImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Pronto para Começar seu Projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+551633151010">(16) 3315-1010</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
