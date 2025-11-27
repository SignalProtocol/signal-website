import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";
import { Link } from "react-router-dom";

const CTA = () => {
  const features = [
    {
      icon: Users,
      title: "Community-First",
      description: "Tokens distributed through engagement and participation",
    },
    {
      icon: FileText,
      title: "Decentralized Governance",
      description: "Empowering users to shape the protocol's future",
    },
    {
      icon: ArrowRight,
      title: "Equal Opportunity",
      description: "A level playing field for all participants",
    },
  ];

  return (
    <section id="join" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join the{" "}
            <span className="text-gradient-primary">Signal402 Revolution</span>
          </h2>

          <div className="inline-block px-6 py-3 rounded-xl glass border-primary/30 mb-8">
            <span className="text-lg font-semibold text-primary">
              Fair Launch Approach
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our project will launch with a fair distribution model, emphasizing
            community ownership and decentralized governance from day one. No
            pre-sales or special allocations.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          {/* Footer note */}
          <p className="text-sm text-muted-foreground">
            DM for data room access and founder introduction
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
