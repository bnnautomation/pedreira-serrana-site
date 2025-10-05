import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mountain, Hammer, Truck, Shield } from "lucide-react";
import miningImg from "@/assets/mining-process.jpg";

const Process = () => {
  const steps = [
    {
      icon: Mountain,
      title: "1. Extração",
      description: "Lavra controlada do basalto com técnicas modernas de desmonte de rocha, respeitando todas as normas ambientais e de segurança.",
      details: [
        "Perfuração precisa com equipamento de última geração",
        "Desmonte controlado com explosivos certificados",
        "Monitoramento ambiental contínuo",
        "Minimização de impactos sonoros e vibratórios",
      ],
    },
    {
      icon: Hammer,
      title: "2. Britagem",
      description: "Processo em múltiplos estágios que transforma blocos brutos em agregados nas granulometrias desejadas.",
      details: [
        "Britagem primária: redução inicial do material",
        "Britagem secundária: refinamento da granulometria",
        "Britagem terciária: produção de agregados finos",
        "Sistemas de controle de poeira e emissões",
      ],
    },
    {
      icon: Truck,
      title: "3. Classificação e Logística",
      description: "Separação por peneiramento e armazenamento organizado para garantir a qualidade e facilitar a logística de entrega.",
      details: [
        "Peneiramento automatizado por granulometria",
        "Pesagem em balança certificada INMETRO",
        "Estocagem em pilhas segregadas por produto",
        "Carregamento ágil e seguro",
      ],
    },
    {
      icon: Shield,
      title: "4. Controle de Qualidade",
      description: "Ensaios laboratoriais periódicos garantem que cada produto atenda aos mais rigorosos padrões técnicos.",
      details: [
        "Análise granulométrica conforme ABNT",
        "Testes de resistência e absorção",
        "Certificados de qualidade para cada lote",
        "Rastreabilidade completa da produção",
      ],
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
                Como Trabalhamos
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Processo de Mineração
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça cada etapa da nossa operação: da extração à entrega de produtos 
              certificados e de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background relative">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            backgroundImage: `url(${miningImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="mb-16 last:mb-0"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-ochre rounded-lg flex items-center justify-center shadow-glow">
                        <Icon className="text-primary" size={40} />
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-card p-8 rounded-lg shadow-card hover:shadow-strong transition-smooth">
                      <h3 className="text-3xl font-heading font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="ml-10 my-6 h-12 w-0.5 bg-ochre/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <Shield className="text-ochre mb-4" size={48} />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Segurança em Primeiro Lugar
              </h3>
              <p className="text-muted-foreground mb-6">
                A segurança de nossos colaboradores é prioridade absoluta. Todos os 
                processos seguem rigorosos protocolos de segurança do trabalho, com 
                equipamentos de proteção individual (EPIs), treinamentos constantes 
                e supervisão qualificada.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Certificação NR-22 (Mineração)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">CIPA ativa e atuante</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Treinamentos periódicos</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Equipamentos de última geração</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card">
              <Mountain className="text-ochre mb-4" size={48} />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Compromisso Ambiental
              </h3>
              <p className="text-muted-foreground mb-6">
                Operamos em total conformidade com a legislação ambiental, com licenças 
                atualizadas e planos de recuperação de áreas degradadas. Investimos em 
                tecnologias que minimizam impactos ao meio ambiente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Licenças ambientais vigentes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Controle de emissões e poeira</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Gestão de recursos hídricos</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                  <span className="text-foreground">Plano de recuperação de áreas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Tecnologia de Ponta
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Investimos continuamente em equipamentos modernos para garantir eficiência, 
              qualidade e segurança em todas as etapas do processo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="font-heading font-bold text-lg mb-2">Britadores</h4>
                <p className="text-sm text-muted-foreground">
                  Equipamentos de alta capacidade e baixo consumo energético
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="font-heading font-bold text-lg mb-2">Peneiras</h4>
                <p className="text-sm text-muted-foreground">
                  Classificação automatizada por granulometria
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="font-heading font-bold text-lg mb-2">Balança INMETRO</h4>
                <p className="text-sm text-muted-foreground">
                  Pesagem certificada para total transparência
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

export default Process;
