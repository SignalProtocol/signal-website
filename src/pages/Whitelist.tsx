import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

const Whitelist = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [hasFollowedX, setHasFollowedX] = useState("");
  const [hasJoinedTG, setHasJoinedTG] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateSolanaAddress = (address: string) => {
    if (address.length < 43 || address.length > 44) {
      return false;
    }
    const solanaRegex = /^[1-9A-HJ-NP-Za-km-z]+$/;
    return solanaRegex.test(address);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      toast({
        title: "Configuration Required",
        description: "Supabase credentials are not configured. Please check.",
        variant: "destructive",
      });
      return;
    }

    if (hasFollowedX !== "yes") {
      toast({
        title: "Requirement Missing",
        description: "Please confirm you have followed us on X.",
        variant: "destructive",
      });
      return;
    }

    if (hasJoinedTG !== "yes") {
      toast({
        title: "Requirement Missing",
        description: "Please confirm you have joined our TG Community.",
        variant: "destructive",
      });
      return;
    }

    if (!walletAddress) {
      toast({
        title: "Wallet Address Required",
        description: "Please enter your Solana wallet address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateSolanaAddress(walletAddress)) {
      toast({
        title: "Invalid Wallet Address",
        description: "Please enter a valid Solana wallet address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("whitelist").insert([
        {
          wallet_address: walletAddress,
          has_followed_x: true,
          has_joined_tg: true,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        // Check if it's a duplicate wallet error (assuming unique constraint on wallet_address)
        if (error.code === "23505") {
          toast({
            title: "Already Registered",
            description: "This wallet is already on the whitelist!",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast({
          title: "Success! 🎉",
          description: "You've been added to the whitelist.",
        });
        setWalletAddress("");
        setHasFollowedX("");
        setHasJoinedTG("");
      }
    } catch (error: any) {
      console.error("Error adding to whitelist:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to add to whitelist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 text-primary hover:text-primary/80 hover:bg-primary/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Main Card */}
        <div className="glass-card p-8 shadow-2xl">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-primary/20 glow-primary">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Join the Whitelist
                </h1>
                <p className="text-muted-foreground">
                  Complete the steps below to get early access
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Question 1: X Follow */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground block">
                    1. Followed us on{" "}
                    <a
                      href="https://x.com/signal402_xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      X (Twitter)
                    </a>
                    ? <span className="text-destructive">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          hasFollowedX === "yes"
                            ? "border-primary bg-primary/20 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                            : "border-muted-foreground group-hover:border-primary/50"
                        }`}
                      >
                        {hasFollowedX === "yes" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="followX"
                        value="yes"
                        checked={hasFollowedX === "yes"}
                        onChange={(e) => setHasFollowedX(e.target.value)}
                        className="hidden"
                      />
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          hasFollowedX === "yes"
                            ? "text-primary font-medium"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        Yes
                      </span>
                    </label>
                  </div>
                </div>

                {/* Question 2: TG Join */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground block">
                    2. Joined our{" "}
                    <a
                      href="https://t.me/signal402_community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      TG Community
                    </a>
                    ? <span className="text-destructive">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          hasJoinedTG === "yes"
                            ? "border-primary bg-primary/20 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                            : "border-muted-foreground group-hover:border-primary/50"
                        }`}
                      >
                        {hasJoinedTG === "yes" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="joinTG"
                        value="yes"
                        checked={hasJoinedTG === "yes"}
                        onChange={(e) => setHasJoinedTG(e.target.value)}
                        className="hidden"
                      />
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          hasJoinedTG === "yes"
                            ? "text-primary font-medium"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        Yes
                      </span>
                    </label>
                  </div>
                </div>

                {/* Question 3: Wallet Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="wallet"
                    className="text-sm font-medium text-foreground"
                  >
                    3. Enter your Solana Wallet Address{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="wallet"
                      type="text"
                      placeholder="Enter Solana address..."
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      disabled={isLoading}
                      className={`bg-card/50 text-foreground placeholder:text-muted-foreground h-12 font-mono text-sm transition-all duration-300 pr-10 ${
                        walletAddress
                          ? validateSolanaAddress(walletAddress)
                            ? "border-green-500 focus-visible:ring-green-500/20 focus-visible:border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                            : "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                          : "border-border focus-visible:border-primary focus-visible:ring-primary/20"
                      }`}
                    />
                    {walletAddress && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {validateSolanaAddress(walletAddress) ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                        )}
                      </div>
                    )}
                  </div>
                  {walletAddress && !validateSolanaAddress(walletAddress) && (
                    <p className="text-xs text-red-500 animate-in slide-in-from-top-1">
                      Please enter a valid Solana wallet address (base58, 32-44
                      characters)
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 glow-primary"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Join Whitelist"
                  )}
                </Button>
              </form>

              {/* Footer */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                By joining, you agree to receive updates about Signal402
              </p>
            </>
          ) : (
            // Success State
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 animate-bounce">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                You're In! 🎉
              </h2>
              <p className="text-muted-foreground mb-8">
                Keep an eye out for a{" "}
                <a
                  href="https://explorer.solana.com/address/EEMZhENRymuN2TViQC1ijSmuEk3XnC1unkog8fERp7Eh?cluster=devnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  $SIGNAL
                </a>{" "}
                drip on Solana Devnet. Once you have it, Launch the App!
              </p>
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  navigate("/");
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Return to Home
              </Button>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Questions? Contact us on X{" "}
            <a
              href="https://x.com/signal402_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              @signal402_xyz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whitelist;
