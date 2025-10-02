import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  specs?: string[];
}

const ProductCard = ({ image, title, description, specs }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-strong transition-smooth border border-border">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        {specs && specs.length > 0 && (
          <ul className="space-y-2 mb-6">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-ochre rounded-full mr-2" />
                {spec}
              </li>
            ))}
          </ul>
        )}
        
        <Button asChild variant="cta" className="w-full group">
          <Link to="/contato">
            Solicitar Orçamento
            <ArrowRight className="ml-2 transition-smooth group-hover:translate-x-1" size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
