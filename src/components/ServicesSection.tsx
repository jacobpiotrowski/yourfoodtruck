import { Truck, ShieldCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Custom Food Trucks & Trailers",
    description:
      "Every vehicle we build is tailored to your needs. Whether you're launching a pizza truck in Berlin, a taco trailer in Stockholm, or a coffee van in London — we design and build it from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Turnkey Solutions",
    description:
      "We don't just build vehicles. We help you navigate the often complex regulations of your target market. Our experience with German TÜV, Scandinavian food safety standards, and other European requirements means your truck arrives ready to work — fully compliant, fully legal.",
  },
  {
    icon: Building2,
    title: "HORECA Partnerships",
    description:
      "We also work with restaurants, hotels, and food brands who want to take their products on the road. A mobile showroom. A promotional vehicle. A pop-up kitchen. We make it happen.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            End-to-End Food Truck Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary/50 border border-border rounded-lg p-8 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
