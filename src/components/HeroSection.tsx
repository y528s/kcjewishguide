import heroImage from "@/assets/hero-kc.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kansas City skyline at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(215, 65%, 20%, 0.82), hsla(35, 80%, 35%, 0.65))" }} />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 animate-fade-up">
        <p className="text-primary-foreground/80 font-body text-lg tracking-widest uppercase mb-4">
          Welcome to the Community
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          Guide to Jewish Life in KC
        </h1>
        <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Everything you need to settle in, connect, and thrive in Kansas City's warm and vibrant Jewish community.
        </p>
        <a
          href="#food"
          className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Explore the Guide ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
