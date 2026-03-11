import { Award, MapPin, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experience That Matters",
    description:
      "Over the past decade, we've helped dozens of entrepreneurs launch their mobile food businesses. From first-time owners chasing a dream to established brands expanding their reach — we've seen it all and built it all.",
  },
  {
    icon: MapPin,
    title: "Made in Poland",
    description:
      "We're proud of where we come from. Poland is one of Europe's fastest-growing economies — projected to overtake the UK in GDP within the next two years. What does this mean for you? European quality at competitive prices. Skilled craftsmanship without the Western European price tag.",
  },
  {
    icon: Heart,
    title: "Your Success Is Our Success",
    description:
      "Many of our clients started with a simple idea and a phone call. Today, they run thriving businesses, financially independent, doing what they love. That's why we do this.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The Right Partner for Your Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center md:text-left">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
