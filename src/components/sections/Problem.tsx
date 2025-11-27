import { AlertTriangle, TrendingDown, Shield } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      stat: "12-32.5%",
      title: "Drawdown",
      description: "Traders consistently lose due to severe information asymmetry in the market",
    },
    {
      icon: AlertTriangle,
      stat: "95%",
      title: "Noisy Signals",
      description: "Most signals on Telegram and Discord are noise or exit liquidity traps",
    },
    {
      icon: Shield,
      stat: "0%",
      title: "Fair Monetization",
      description: "Skilled creators and AI models lack transparent ways to monetize expertise",
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Problem: <span className="text-destructive">Information Asymmetry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The current trading landscape is plagued by issues that hurt both traders and signal generators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group glass-card p-8 hover:border-destructive/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{problem.stat}</div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
