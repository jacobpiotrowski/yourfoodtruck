const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/i-mpPrmTcJI?autoplay=1&mute=1&loop=1&playlist=i-mpPrmTcJI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] min-w-full min-h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Food truck manufacturing"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="section-divider mx-auto mb-8" />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          We Build <span className="text-gradient">Food Trucks</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Custom-built mobile kitchens from Poland. Delivered anywhere in Europe. Ready to work.
        </p>
        <button
          data-cal-link="yourfoodtruck/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"week_view"}'
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
        >
          Book a Call
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-muted-foreground/30 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
