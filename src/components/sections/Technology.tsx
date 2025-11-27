import { Cpu, Globe, Layers, Bot } from "lucide-react";
import pancakeSwap from "../../../public/images/bunny-mono.png";

const Technology = () => {
  const integrations = [
    {
      name: "Hyperliquid",
      logo: "https://app.hyperliquid.xyz/favicon-32x32.png",
    },
    {
      name: "Lighter",
      logo: "https://framerusercontent.com/images/k22lnUP5Ao1xIheAoknaPGmdjXk.svg?width=14&height=26",
    },
    {
      name: "AsterDEX",
      logo: "https://static.asterindex.com/cloud-futures/static/images/aster/logo.svg",
    },
    {
      name: "Uniswap",
      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
    },
    {
      name: "PancakeSwap",
      logo: pancakeSwap,
    },
    {
      name: "Raydium Perps",
      logo: "https://docs.raydium.io/raydium/~gitbook/image?url=https%3A%2F%2F4071094211-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MT-qzD26DX_h6l_vXaA-887967055%252Fuploads%252FHPcvejBNveWwU0l3agvY%252FRaydium%2520icon.png%3Falt%3Dmedia%26token%3D689dd256-63ba-42a8-8a94-93aff9f95f47&width=768&dpr=4&quality=100&sign=fb5ff13&sv=2",
    },
    {
      name: "Jupiter Perps",
      logo: "https://jup.ag/svg/jupiter-logo.svg",
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Partners & <span className="text-gradient-primary">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built on best-in-class infrastructure for speed, reliability, and
            security.
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
              Powered by Solana's high-speed blockchain and x402 micropayment
              protocol for instant, low-cost transactions.
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
              Advanced signal orchestration with MCP servers and Helius for
              reliable RPC infrastructure.
            </p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">
            DEX Ecosystem
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center gap-3 group"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-12 h-12 object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <h4 className="font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {integration.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
