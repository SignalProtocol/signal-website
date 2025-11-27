import { Coins, Zap, Lock } from "lucide-react";

const Solution = () => {
  const solutions = [
    {
      icon: Coins,
      title: "Pay-Per-Signal",
      description: "The first marketplace where traders pay only for signals they use via x402 real-time micropayments. No subscriptions, no upfront fees—pure usage economy.",
      highlight: "x402 Micropayments",
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Every signal use instantly pays the creator in USDC through x402. Real-time value transfer ensures creators are compensated fairly for quality alpha.",
      highlight: "70% Back to Signal Generators",
    },
    {
      icon: Lock,
      title: "Stake to Unlock Signals",
      description: "Stake $SIGNAL tokens to unlock more daily signals and participate in protocol revenue sharing. Higher stakes grant greater access and rewards.",
      highlight: "20% Revenue Share",
    },
  ];

  return (
    <section id="solution" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Solution: <span className="text-gradient-primary">x402 Terminal for Trading Alpha</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A reliable marketplace built on transparency, instant payments, and aligned incentives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative glass-card p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                  {solution.highlight}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
