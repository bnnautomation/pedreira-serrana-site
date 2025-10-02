import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Scale, TrendingUp, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WeightSales = () => {
  const advantages = [
    {
      title: "Transparência Total",
      description: "Você paga exatamente pelo que está levando, sem margem para erros ou discrepâncias.",
    },
    {
      title: "Economia Garantida",
      description: "Evite pagar por ar ou espaços vazios. Na venda a peso, cada real investido é material útil.",
    },
    {
      title: "Certificação INMETRO",
      description: "Nossa balança é regularmente calibrada e certificada, garantindo precisão máxima.",
    },
    {
      title: "Rastreabilidade",
      description: "Cada nota fiscal com peso exato permite controle total do seu estoque e orçamento.",
    },
  ];

  const comparisonOld = [
    "Medição por volume (m³) imprecisa",
    "Variação de densidade não considerada",
    "Dificuldade em controlar estoque",
    "Margem para disputas comerciais",
    "Falta de rastreabilidade exata",
  ];

  const comparisonNew = [
    "Pesagem certificada INMETRO",
    "Precisão de até 0,5%",
    "Controle exato de quantidade",
    "Transparência total na transação",
    "Nota fiscal com peso real",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-36 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Inovação
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Venda a Peso Certificada
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pioneiros na região, oferecemos venda a peso com balança certificada INMETRO. 
              Transparência, precisão e economia para seu projeto.
            </p>
            <Scale className="text-ochre mx-auto" size={80} />
          </div>
        </div>
      </section>

      {/* Why Weight Sales */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Por Que Venda a Peso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O método tradicional de comercialização por volume (m³) está ultrapassado. 
              A venda a peso traz benefícios reais para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-strong transition-smooth"
              >
                <TrendingUp className="text-ochre mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Método Tradicional × Venda a Peso
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja a diferença entre os métodos
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old Method */}
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                  <XCircle className="text-destructive" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Método Antigo (Volume)
              </h3>
              <ul className="space-y-4">
                {comparisonOld.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="text-destructive mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Method */}
            <div className="bg-ochre/10 p-8 rounded-lg shadow-strong border-2 border-ochre relative">
              <div className="absolute -top-4 right-4 bg-ochre text-primary px-4 py-1 rounded-full text-xs font-heading font-bold uppercase">
                Recomendado
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-ochre rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Venda a Peso (INMETRO)
              </h3>
              <ul className="space-y-4">
                {comparisonNew.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-ochre mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Como Funciona na Prática
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-ochre rounded-full flex items-center justify-center font-heading font-bold text-xl text-primary flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Pesagem de Entrada</h3>
                  <p className="text-muted-foreground">
                    O caminhão é pesado vazio em nossa balança certificada INMETRO antes do carregamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-ochre rounded-full flex items-center justify-center font-heading font-bold text-xl text-primary flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Carregamento</h3>
                  <p className="text-muted-foreground">
                    O produto é carregado com a quantidade solicitada, sempre com supervisão da nossa equipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-ochre rounded-full flex items-center justify-center font-heading font-bold text-xl text-primary flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Pesagem de Saída</h3>
                  <p className="text-muted-foreground">
                    O caminhão carregado é pesado novamente. A diferença entre as pesagens é o peso líquido exato do material.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-ochre rounded-full flex items-center justify-center font-heading font-bold text-xl text-primary flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Nota Fiscal</h3>
                  <p className="text-muted-foreground">
                    A nota fiscal é emitida com o peso líquido real, garantindo total rastreabilidade e conformidade fiscal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Experimente a Diferença
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Solicite seu orçamento e descubra como a venda a peso pode trazer 
              economia e transparência para seu projeto.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contato">
                Solicitar Orçamento com Venda a Peso
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeightSales;
