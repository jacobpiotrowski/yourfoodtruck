import { useTranslation } from "react-i18next";
import { Truck, ShieldCheck, Building2 } from "lucide-react";

const icons = [Truck, ShieldCheck, Building2];

const ServicesSection = () => {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">{t("services.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-secondary/50 border border-border rounded-lg p-8 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
