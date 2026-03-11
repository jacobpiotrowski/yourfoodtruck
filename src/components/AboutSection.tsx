import { useTranslation } from "react-i18next";
import truckRender from "@/assets/truck-render.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">{t("about.label")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.text")}
            </p>
          </div>
          <div className="relative">
            <img
              src={truckRender}
              alt="Custom food truck render"
              className="rounded-lg w-full object-cover aspect-video"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
