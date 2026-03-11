import truckYellow from "@/assets/truck-yellow.jpg";
import truckDark from "@/assets/truck-dark.jpg";
import truckSilver from "@/assets/truck-silver.jpg";
import truckWhite from "@/assets/truck-white.jpg";
import interiorPizza from "@/assets/interior-pizza-oven.jpg";
import interiorSteel from "@/assets/interior-steel.jpg";
import interiorWood from "@/assets/interior-wood.jpg";
import interiorStainless from "@/assets/interior-stainless.jpg";
import interiorModern from "@/assets/interior-modern.jpg";

const images = [
  { src: truckYellow, alt: "Yellow food truck exterior" },
  { src: interiorWood, alt: "Wood-finished interior with pizza oven" },
  { src: truckDark, alt: "Dark grey food truck" },
  { src: interiorPizza, alt: "Interior with red pizza oven" },
  { src: truckSilver, alt: "Silver food truck" },
  { src: interiorSteel, alt: "Stainless steel interior" },
  { src: truckWhite, alt: "White food truck" },
  { src: interiorStainless, alt: "Professional kitchen interior" },
  { src: interiorModern, alt: "Modern interior finish" },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-primary font-semibold tracking-wide uppercase text-sm mb-4">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Built With Precision</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${i === 0 || i === 3 ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
