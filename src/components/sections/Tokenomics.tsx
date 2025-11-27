import { Coins, Flame, Calendar } from "lucide-react";

const Tokenomics = () => {
  const distribution = [
    { label: "Creators", percentage: 70, color: "bg-primary" },
    { label: "Stakers", percentage: 20, color: "bg-accent" },
    { label: "Protocol", percentage: 10, color: "bg-success" },
  ];

  return (
    <section id="tokenomics" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">$SIGNAL</span> Token
          </h2>
          <p className="text-lg text-muted-foreground">
            Staking grants daily signal access. The more you stake, the more signals you can access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Token Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Total Supply</h3>
                  <p className="text-muted-foreground">1 Billion Tokens</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                A portion of every transaction fee flows into buyback and burn mechanisms, creating deflationary pressure over time.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20">
                  <Flame className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Buyback & Burn</h3>
                  <p className="text-muted-foreground">Deflationary Mechanics</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                20% of protocol fees are used to buy back $SIGNAL tokens from the market and permanently burn them.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">TGE & IDO</h3>
                  <p className="text-muted-foreground">Q4 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Launch on Tier-1 launchpads with fair distribution model and community-first approach.
              </p>
            </div>
          </div>

          {/* Revenue Distribution */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8">Revenue Distribution</h3>
            
            <div className="space-y-6">
              {distribution.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.label}</span>
                    <span className="font-mono text-primary">{item.percentage}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">70%</div>
                  <div className="text-xs text-muted-foreground">to Creators</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">20%</div>
                  <div className="text-xs text-muted-foreground">to Stakers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">10%</div>
                  <div className="text-xs text-muted-foreground">to Protocol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
