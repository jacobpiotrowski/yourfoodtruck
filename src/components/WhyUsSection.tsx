import { useTranslation } from "react-i18next";
import { Award, MapPin, Heart } from "lucide-react";

const icons = [Award, MapPin, Heart];

const WhyUsSection = () => {
  const { t } = useTranslation();
  const items = t("whyUs.items", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">{t("whyUs.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("whyUs.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((reason, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center md:text-left">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
