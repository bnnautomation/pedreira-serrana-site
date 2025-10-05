import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Construction, Factory, Home } from "lucide-react";
import portfolioImg from "@/assets/portfolio-construction.jpg";
import miningImg from "@/assets/mining-process.jpg";
import britaImg from "@/assets/product-brita.jpg";

const Portfolio = () => {
  const categories = [
    {
      icon: Building2,
      title: "Edifícios Comerciais",
      description: "Fornecimento para grandes empreendimentos comerciais na região",
    },
    {
      icon: Home,
      title: "Condomínios Residenciais",
      description: "Materiais para fundações e infraestrutura residencial",
    },
    {
      icon: Construction,
      title: "Obras de Infraestrutura",
      description: "Pavimentação, pontes e viadutos em rodovias regionais",
    },
    {
      icon: Factory,
      title: "Pisos Industriais",
      description: "Concreto de alto desempenho para galpões e fábricas",
    },
  ];

  const projects = [
    {
      image: portfolioImg,
      title: "Rodovia SP-253",
      category: "Infraestrutura",
      description: "Fornecimento de brita graduada para pavimentação de trecho duplicado",
    },
    {
      image: miningImg,
      title: "Centro Logístico Ribeirão",
      category: "Industrial",
      description: "Pisos industriais de alta resistência com concreto especial",
    },
    {
      image: britaImg,
      title: "Condomínio Jardins do Sol",
      category: "Residencial",
      description: "Base e sub-base para pavimentação interna do condomínio",
    },
    {
      image: portfolioImg,
      title: "Viaduto da Integração",
      category: "Infraestrutura",
      description: "Concreto estrutural para fundação e pilares",
    },
    {
      image: miningImg,
      title: "Shopping Serrana Plaza",
      category: "Comercial",
      description: "Fundações profundas e estrutura do empreendimento",
    },
    {
      image: britaImg,
      title: "Distrito Industrial SP",
      category: "Industrial",
      description: "Pavimentação de vias internas e pátios de manobra",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-44 md:pt-40 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Nossos Projetos
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Portfólio de Obras
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça algumas das obras que contaram com os materiais da Pedreira Serrana 
              para construir estruturas sólidas e duradouras.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-strong transition-smooth text-center"
                >
                  <div className="w-16 h-16 bg-ochre/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-ochre" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Obras em Destaque
            </h2>
            <p className="text-xl text-muted-foreground">
              Alguns dos principais projetos que utilizaram nossos produtos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-strong transition-smooth"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-ochre text-primary px-3 py-1 rounded-full text-xs font-heading font-bold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-ochre mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Obras Realizadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-ochre mb-2">2M+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Toneladas Fornecidas
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-ochre mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Satisfação de Clientes
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-ochre mb-2">47</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              O Que Dizem Nossos Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <p className="text-muted-foreground italic mb-4">
                "A qualidade do material e a transparência da venda a peso nos deram 
                total segurança no orçamento da obra. Recomendo!"
              </p>
              <div className="font-heading font-bold">João Silva</div>
              <div className="text-sm text-muted-foreground">Engenheiro Civil</div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card">
              <p className="text-muted-foreground italic mb-4">
                "Parceria de anos! Sempre entregam no prazo e com material de primeira. 
                A Pedreira Serrana é nossa fornecedora de confiança."
              </p>
              <div className="font-heading font-bold">Maria Costa</div>
              <div className="text-sm text-muted-foreground">Construtora MLC</div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card">
              <p className="text-muted-foreground italic mb-4">
                "A certificação INMETRO faz toda diferença. Não há margem para erro 
                na quantidade, e isso reflete diretamente no custo final da obra."
              </p>
              <div className="font-heading font-bold">Carlos Eduardo</div>
              <div className="text-sm text-muted-foreground">Mestre de Obras</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
