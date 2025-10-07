import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

interface Customer {
  name: string;
  logo: string;
}

interface CustomerCarouselProps {
  customers: Customer[];
}

const CustomerCarousel = ({ customers }: CustomerCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({ 
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8 md:gap-12">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex-[0_0_200px] md:flex-[0_0_250px] min-w-0"
          >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-card hover:shadow-strong transition-smooth h-32 md:h-40 flex items-center justify-center">
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {customers.map((customer, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-[0_0_200px] md:flex-[0_0_250px] min-w-0"
          >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-card hover:shadow-strong transition-smooth h-32 md:h-40 flex items-center justify-center">
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCarousel;
