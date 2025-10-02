import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import britaImg from "@/assets/product-brita.jpg";
import pedriscoImg from "@/assets/product-pedrisco.jpg";
import poBasaltoImg from "@/assets/product-po-basalto.jpg";

const Products = () => {
  const products = [
    {
      image: britaImg,
      title: "Brita 1 (19mm)",
      description: "Agregado graúdo ideal para fabricação de concreto estrutural, pisos industriais e pavimentação asfáltica.",
      specs: [
        "Granulometria: 9,5 a 19mm",
        "Alta resistência mecânica",
        "Baixa absorção de água",
        "Aplicação: Concreto e pavimentação",
      ],
    },
    {
      image: britaImg,
      title: "Brita 2 (32mm)",
      description: "Agregado de maior granulometria para concreto massa, fundações profundas e obras de grande porte.",
      specs: [
        "Granulometria: 19 a 32mm",
        "Máxima resistência",
        "Uso em grandes estruturas",
        "Aplicação: Fundações e concreto massa",
      ],
    },
    {
      image: britaImg,
      title: "Brita Graduada",
      description: "Mistura controlada de diferentes granulometrias para sub-base de pavimentos e regularização.",
      specs: [
        "Mix de granulometrias",
        "Alta densidade após compactação",
        "Excelente estabilidade",
        "Aplicação: Pavimentação e aterros",
      ],
    },
    {
      image: pedriscoImg,
      title: "Pedrisco",
      description: "Agregado miúdo de basalto para acabamentos, argamassas e concretos com baixa espessura.",
      specs: [
        "Granulometria: 4,8 a 9,5mm",
        "Ideal para acabamentos",
        "Excelente compactação",
        "Aplicação: Pisos e concretos finos",
      ],
    },
    {
      image: poBasaltoImg,
      title: "Pó de Basalto",
      description: "Material fino resultante da britagem, utilizado em remineralização de solos e preenchimento.",
      specs: [
        "Granulometria < 0,075mm",
        "Rico em minerais",
        "Aplicação agrícola",
        "Melhora estrutura do solo",
      ],
    },
    {
      image: britaImg,
      title: "Rachão",
      description: "Pedra de grande dimensão para enrocamento, gabiões e obras de contenção.",
      specs: [
        "Blocos grandes (acima de 100mm)",
        "Altíssima resistência",
        "Ideal para contenções",
        "Aplicação: Muros e enrocamentos",
      ],
    },
  ];

  const applications = [
    "Concreto Estrutural",
    "Pavimentação Asfáltica",
    "Pavimentação Intertravada",
    "Fundações",
    "Pisos Industriais",
    "Drenagem",
    "Obras de Arte (Pontes e Viadutos)",
    "Aterros e Regularização",
    "Argamassas",
    "Remineralização de Solos",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Catálogo Completo
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-muted-foreground">
              Linha completa de agregados de basalto para as mais diversas aplicações 
              na construção civil e infraestrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Aplicações
              </h2>
              <p className="text-xl text-muted-foreground">
                Nossos produtos são utilizados nas mais diversas obras
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg shadow-card text-center hover:shadow-strong transition-smooth"
                >
                  <span className="text-sm font-heading font-semibold">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card p-12 rounded-lg shadow-strong text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Garantia de Qualidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Todos os nossos produtos passam por rigoroso controle de qualidade. 
              Realizamos ensaios periódicos em laboratório certificado para garantir 
              que cada entrega atenda às especificações técnicas exigidas pelas normas 
              ABNT e DNIT. Nossa venda a peso com balança INMETRO assegura total 
              transparência na comercialização.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-heading font-semibold">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ochre rounded-full" />
                <span>Controle de Qualidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ochre rounded-full" />
                <span>Ensaios Laboratoriais</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ochre rounded-full" />
                <span>Rastreabilidade Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
