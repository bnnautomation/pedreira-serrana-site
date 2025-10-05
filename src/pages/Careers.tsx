import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-44 md:pt-40 pb-20 bg-muted min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Carreiras
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Trabalhe Conosco
            </h1>
            
            <div className="bg-card p-8 rounded-lg shadow-card mb-8">
              <p className="text-lg text-muted-foreground mb-8">
                Faça parte da equipe da Pedreira Serrana. Envie seu currículo para nosso departamento de Recursos Humanos.
              </p>
              
              <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-ochre/5 rounded-lg">
                <Mail className="text-ochre" size={24} />
                <a 
                  href="mailto:rh@pedreiraserrana.com.br"
                  className="text-lg font-semibold text-ochre hover:underline"
                >
                  rh@pedreiraserrana.com.br
                </a>
              </div>
              
              <Button 
                asChild 
                variant="cta" 
                size="lg"
                className="w-full md:w-auto"
              >
                <a href="mailto:rh@pedreiraserrana.com.br">
                  <Mail className="mr-2" size={20} />
                  Enviar Currículo por E-mail
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Junte-se a uma empresa com 47 anos de experiência e tradição no mercado.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
