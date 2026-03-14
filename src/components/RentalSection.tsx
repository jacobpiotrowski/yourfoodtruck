import { useTranslation } from "react-i18next";
import { Calendar, ChefHat, TrendingUp, Clock } from "lucide-react";

const icons = [Clock, ChefHat, TrendingUp, Calendar];

const RentalSection = () => {
  const { t } = useTranslation();
  const benefits = t("rental.benefits", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="rental" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            {t("rental.label")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t("rental.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("rental.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/48571433588"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-10 py-5 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            {t("rental.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default RentalSection;
