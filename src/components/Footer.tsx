import { Zap, FileText, Globe } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";
import Mixpanel from "@/mixpanel";

const Footer = () => {
  const trackXFollowClick = () => {
    // Mixpanel tracking code here
    Mixpanel.track("X Follow Clicked", {
      location: "Footer",
    });
  };

  const trackAppVisitClick = () => {
    // Mixpanel tracking code here
    Mixpanel.track("Signal App button clicked", {
      location: "Footer",
    });
  };
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="images/logo.png"
              alt="Signal Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/signal402_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => trackXFollowClick()}
            >
              <XLogo className="w-4 h-4" />
              Follow
            </a>
            <a
              href="https://app.signal402.xyz/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => trackAppVisitClick()}
            >
              <Globe className="w-4 h-4" />
              App
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Signal402. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
