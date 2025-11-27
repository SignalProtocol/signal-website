import { BarChart3, TrendingUp, Percent } from "lucide-react";

const Market = () => {
  const opportunities = [
    {
      icon: BarChart3,
      value: "$15B+",
      label: "Daily Perps Volume",
      description: "Daily perpetual futures trading volume across the Solana ecosystem",
    },
    {
      icon: TrendingUp,
      value: "$800M+",
      label: "Signals Market",
      description: "Addressable market growing 5× year-over-year",
    },
    {
      icon: Percent,
      value: "10%",
      label: "Take Rate",
      description: "Captured on every paid signal transaction",
    },
  ];

  return (
    <section id="market" className="relative py-24 sm:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Massive Market <span className="text-gradient-primary">Opportunity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As the first pay-per-signal marketplace on Solana, we're uniquely positioned to capture this rapidly expanding opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {opportunities.map((item) => (
            <div key={item.label} className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mx-auto mb-6 group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-black text-gradient-primary mb-2">{item.value}</div>
              <div className="text-lg font-semibold mb-3">{item.label}</div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8 text-center">
          <p className="text-lg text-muted-foreground">
            Positioned at the <span className="text-primary font-semibold">intersection of DeFi and algorithmic trading signals</span> — two explosive markets converging into one massive opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Market;
