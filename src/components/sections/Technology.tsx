import { Cpu, Globe, Layers, Bot } from "lucide-react";

const Technology = () => {
  const integrations = [
    { name: "Hyperliquid", icon: "🔮", url: "https://app.hyperliquid.xyz/trade" },
    { name: "Lighter", icon: "⚡", url: "https://app.lighter.xyz/" },
    { name: "AsterDEX", icon: "⭐", url: "https://www.asterdex.com/en/futures/v1/" },
    { name: "Uniswap", icon: "🦄", url: "https://app.uniswap.org/" },
    { name: "PancakeSwap", icon: "🥞", url: "https://pancakeswap.finance/" },
    { name: "Raydium Perps", icon: "💧", url: "https://perps.raydium.io/perp/" },
    { name: "Jupiter Perps", icon: "🪐", url: "https://jup.ag/perps" },
  ];

  return (
    <section id="technology" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technology & <span className="text-gradient-primary">Integrations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built on best-in-class infrastructure for speed, reliability, and security.
          </p>
        </div>

        {/* Core Tech */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Solana Blockchain</h3>
            </div>
            <p className="text-muted-foreground">
              Powered by Solana's high-speed blockchain and x402 micropayment protocol for instant, low-cost transactions.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20">
                <Layers className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">MCP Servers</h3>
            </div>
            <p className="text-muted-foreground">
              Advanced signal orchestration with MCP servers and Helius for reliable RPC infrastructure.
            </p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">Incoming Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <a
                key={integration.name}
                href={integration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 hover:border-primary/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl mb-3">{integration.icon}</div>
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{integration.name}</h4>
                <p className="text-xs text-muted-foreground break-all">{integration.url}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
