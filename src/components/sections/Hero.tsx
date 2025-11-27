import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-slide-up opacity-0 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Live on Solana
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="animate-slide-up opacity-0 animate-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="text-gradient-primary">Signal402</span>
          </h1>

          {/* Tagline */}
          <p className="animate-slide-up opacity-0 animate-delay-200 text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-4">
            Pay-per-signal marketplace
          </p>
          <p className="animate-slide-up opacity-0 animate-delay-300 text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl">
            Tokenised alpha for perp traders. Access verified trading signals
            with x402 micropayments.
          </p>

          {/* CTA buttons */}
          <div className="animate-slide-up opacity-0 animate-delay-400 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://app.signal402.xyz/"
              target="_blank"
              className="bg-transparent border-0"
            >
              <Button variant="hero" size="xl">
                Launch App
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/whitelist">
              <Button variant="outline" size="xl">
                Join Whitelist
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-slide-up opacity-0 animate-delay-500 grid grid-cols-3 gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-foreground mb-1">
                $15B+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Daily Perps Volume
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">
                68%+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-foreground mb-1">
                200+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Weekly Signals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
