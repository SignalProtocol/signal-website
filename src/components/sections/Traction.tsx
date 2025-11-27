import { TrendingUp, Users, Target } from "lucide-react";

const Traction = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$200+",
      label: "Earnings",
      description: "Growing creator earnings",
    },
    {
      icon: Users,
      value: "200+",
      label: "Weekly Signals",
      description: "Verified, high-quality trading signals",
    },
    {
      icon: Target,
      value: "68%+",
      label: "Accuracy",
      description: "Proven in closed beta testing",
    },
  ];

  return (
    <section id="traction" className="relative py-24 sm:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-semibold mb-6">
            December 2025
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="text-gradient-primary">Traction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-8 text-center group hover:border-success/30 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-success/10 border border-success/20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-success" />
              </div>
              <div className="text-4xl font-black text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Strong Backing</h3>
            <p className="text-muted-foreground">
              Supported by x402 core contributors and experienced nine-figure perpetual futures traders who understand the market intimately.
            </p>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Launch Ready</h3>
            <p className="text-muted-foreground">
              Liquidity bootstrapping programme commences this month to ensure deep markets and seamless trading experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
