import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <button
            data-cal-link="yourfoodtruck/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-10 py-5 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            {t("cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
