import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import Mixpanel from "@/mixpanel";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Ecosystem", href: "#ecosystem" },
    // { label: "Tokenomics", href: "#tokenomics" },
  ];

  const trackJoinWhiteListClicked = () => {
    // Mixpanel tracking code here
    Mixpanel.track("Join Whitelist button Clicked", {
      location: "Navbar",
    });
  };

  const trackLaunchAppClicked = () => {
    // Mixpanel tracking code here
    Mixpanel.track("Launch App button Clicked", {
      location: "Navbar",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="images/logo.png"
              alt="Signal Logo"
              className="w-32 h-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/whitelist">
              <Button
                variant="outline"
                size="sm"
                onClick={() => trackJoinWhiteListClicked()}
              >
                Join Whitelist
              </Button>
            </Link>
            <a
              href="https://app.signal402.xyz/"
              target="_blank"
              className="bg-transparent border-0"
            >
              <Button
                variant="default"
                size="sm"
                onClick={() => trackLaunchAppClicked()}
              >
                Launch App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-4">
                <Link to="/whitelist" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Join Whitelist
                  </Button>
                </Link>
                <a
                  href="https://app.signal402.xyz/"
                  target="_blank"
                  className="flex-1"
                >
                  <Button variant="default" size="sm" className="w-full">
                    Launch App
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
