import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">U</span>
              </div>
              <span>Upsellian</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              AI-powered automations that capture, qualify, and convert leads automatically.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Lead Capture & Routing",
                "AI Chatbots",
                "Social Automation",
                "Reporting & Dashboards",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:upsellian@outlook.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Mail size={16} />
                  upsellian@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916362436500"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Phone size={16} />
                  +91 6362436500
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Remote-first, serving clients globally</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Upsellian. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
