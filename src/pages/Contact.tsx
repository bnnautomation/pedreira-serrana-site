import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-44 md:pt-40 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 rounded-full">
              <span className="text-ochre font-heading font-semibold text-sm uppercase tracking-wider">
                Fale Conosco
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para atender seu projeto. Solicite um orçamento ou tire 
              suas dúvidas com nossa equipe especializada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-ochre" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rod. Abrão Assed, Km 347<br />
                        Serrana - SP, 14150-000
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
                        href="tel:+551633151010"
                        className="text-muted-foreground hover:text-ochre transition-smooth"
                      >
                        (16) 3315-1010
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
                        className="text-muted-foreground hover:text-ochre transition-smooth"
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
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 7h às 17h<br />
                        Sábado: 7h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ochre/10 p-6 rounded-lg border border-ochre">
                <h3 className="font-heading font-bold text-lg mb-3">
                  Parcerias & Novos Negócios
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interessado em estabelecer parceria comercial? Entre em contato 
                  com nosso departamento comercial.
                </p>
                <a
                  href="mailto:comercial@pedreiraserrana.com.br"
                  className="text-ochre hover:text-ochre-dark font-medium transition-smooth"
                >
                  comercial@pedreiraserrana.com.br
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-strong">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Solicite seu Orçamento
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-heading font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-heading font-semibold mb-2">
                        Empresa
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-heading font-semibold mb-2">
                        Telefone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(16) 99999-9999"
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-heading font-semibold mb-2">
                        E-mail *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-heading font-semibold mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto e os produtos que necessita..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Enviar Mensagem
                    <Send className="ml-2" size={18} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Seus dados serão tratados com total confidencialidade.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-muted-foreground">
              Visite nossa pedreira em Serrana/SP
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-lg shadow-strong overflow-hidden" style={{ height: "500px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29663.847765432256!2d-47.58!3d-21.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf7c8e3c1b97%3A0x0!2zMjHCsDEyJzM2LjAiUyA0N8KwMzQnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
