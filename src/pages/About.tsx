import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";
import miningImg from "@/assets/mining-process.jpg";
import logoDnpm from "@/assets/logo-dnpm.png";

const About = () => {
  const timeline = [
    { year: "1978", event: "Fundação da Pedreira Serrana" },
    { year: "1985", event: "Expansão da capacidade de britagem" },
    { year: "1995", event: "Certificação ambiental" },
    { year: "2010", event: "Implantação de venda a peso certificada" },
    { year: "2020", event: "Modernização completa do maquinário" },
    { year: "2025", event: "47 anos liderando o mercado regional" },
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
                Nossa História
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              47 Anos Construindo com Solidez
            </h1>
            <p className="text-xl text-muted-foreground">
              Desde 1978, a Pedreira Serrana é referência em extração e comercialização 
              de basalto na região de Ribeirão Preto e Serrana.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Uma Trajetória de Excelência
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada em 1978, a Pedreira Serrana nasceu com o propósito de fornecer 
                  materiais de qualidade superior para a construção civil. Ao longo de quase 
                  cinco décadas, consolidamos nossa posição como uma das principais fornecedoras 
                  de agregados de basalto da região.
                </p>
                <p>
                  Nossa jornada é marcada por investimentos constantes em tecnologia, segurança 
                  e sustentabilidade. Fomos pioneiros na região ao implementar o sistema de 
                  venda a peso com balança certificada INMETRO, garantindo transparência total 
                  nas transações comerciais.
                </p>
                <p>
                  Hoje, com uma equipe altamente qualificada e equipamentos de última geração, 
                  continuamos firmes em nosso compromisso de entregar produtos que atendem aos 
                  mais rigorosos padrões de qualidade, contribuindo para o desenvolvimento de 
                  obras que transformam cidades.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={miningImg}
                alt="Pedreira Serrana operação"
                className="w-full h-[500px] object-cover rounded-lg shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 bg-ochre text-primary p-8 rounded-lg shadow-strong">
                <div className="text-5xl font-heading font-bold mb-2">47+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">
                  Anos de Mercado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nossa Linha do Tempo
            </h2>
            <p className="text-xl text-muted-foreground">
              Marcos importantes da nossa trajetória
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ochre/30 md:left-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className={`bg-card p-6 rounded-lg shadow-card ml-16 md:ml-0 ${
                      index % 2 === 0 ? "" : "md:text-left"
                    }`}>
                      <div className="text-3xl font-heading font-bold text-ochre mb-2">
                        {item.year}
                      </div>
                      <p className="text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ochre rounded-full border-4 border-background -translate-x-1/2 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-ochre/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="text-ochre" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Fornecer agregados de basalto de alta qualidade, com excelência no 
                atendimento, praticando preços justos e contribuindo para o desenvolvimento 
                sustentável da região.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-ochre/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Eye className="text-ochre" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como a pedreira mais confiável e inovadora da região, 
                referência em qualidade, sustentabilidade e compromisso com nossos clientes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-ochre/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="text-ochre" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Valores</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Integridade e ética</li>
                <li>• Qualidade sem concessões</li>
                <li>• Compromisso ambiental</li>
                <li>• Respeito às pessoas</li>
                <li>• Inovação contínua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Award className="text-ochre mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-heading font-bold mb-6">
              Certificações e Compromissos
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Operamos em conformidade com todas as normas ambientais e de segurança. 
              Nossa balança é certificada pelo INMETRO, garantindo precisão e transparência 
              em todas as transações. Mantemos licenças ambientais atualizadas e seguimos 
              rigorosos protocolos de segurança do trabalho.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card px-6 py-3 rounded-full shadow-card">
                <img 
                  src={logoDnpm} 
                  alt="DNPM Certificado" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="bg-card px-6 py-3 rounded-full shadow-card">
                <span className="font-heading font-semibold">INMETRO Certificado</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full shadow-card">
                <span className="font-heading font-semibold">Licença Ambiental</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full shadow-card">
                <span className="font-heading font-semibold">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
