import { Wallet, CreditCard, LineChart, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      step: "01",
      title: "Stake $SIGNAL Tokens",
      description: "Stake or hold $SIGNAL to receive your daily signal quota based on tier level",
    },
    {
      icon: CreditCard,
      step: "02",
      title: "Pay with x402",
      description: "Pay tiny amounts in USDC via x402 protocol—signal unlocks instantly",
    },
    {
      icon: LineChart,
      step: "03",
      title: "Execute Trades",
      description: "Trade long or short positions on Drift, Hyperliquid, Jupiter Perps",
    },
    {
      icon: Gift,
      step: "04",
      title: "Rewards Auto-Split",
      description: "Revenue distributed: 70% to creator, 20% to stakers, 10% to protocol",
    },
  ];

  const tiers = [
    { name: "Bronze", stake: "69", signals: "1 signal/day", color: "from-amber-700 to-amber-500" },
    { name: "Silver", stake: "420", signals: "5 signals/day", color: "from-slate-400 to-slate-300" },
    { name: "Gold", stake: "1,008", signals: "10 signals/day", color: "from-yellow-500 to-yellow-300" },
    { name: "Platinum", stake: "10,008+", signals: "100 signals/day", color: "from-primary to-cyan-300" },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect wallet → browse signals → pay with x402 → execute trades immediately
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-black text-primary/20">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Staking Tiers */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Staking Tiers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-2xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                  {tier.name}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  <span className="font-mono text-foreground">{tier.stake}</span> $SIGNAL
                </div>
                <div className="text-xs font-medium text-primary">{tier.signals}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
